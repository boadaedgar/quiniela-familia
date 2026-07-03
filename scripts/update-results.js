// ============================================================
// Auto-sync results.js from openfootball/world-cup.json
// Run manually: node scripts/update-results.js
// Run in CI: .github/workflows/update-results.yml (cron)
// ============================================================

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const RESULTS_PATH = path.join(ROOT, "results.js");
const BETS_PATH = path.join(ROOT, "bets.js");
const INDEX_PATH = path.join(ROOT, "index.html");
const SOURCE_URL = "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2026/worldcup.json";

// Evaluate a top-level `const NAME = ...` from a JS/HTML source file
// without executing browser-only code (window, DOM, fetch, etc).
function extractConst(code, varName) {
  const re = new RegExp(`const\\s+${varName}\\s*=\\s*`);
  const m = re.exec(code);
  if (!m) throw new Error(`const ${varName} not found`);
  const valueStart = m.index + m[0].length;
  const openChar = code[valueStart]; // "{" or "["
  const closeChar = openChar === "{" ? "}" : "]";
  let depth = 0;
  let end = -1;
  for (let i = valueStart; i < code.length; i++) {
    if (code[i] === openChar) depth++;
    else if (code[i] === closeChar) {
      depth--;
      if (depth === 0) { end = i + 1; break; }
    }
  }
  if (end === -1) throw new Error(`unterminated ${varName}`);
  const literal = code.slice(valueStart, end);
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`globalThis.__out = ${literal};`, sandbox, { filename: varName });
  return sandbox.__out;
}

function loadMatches() {
  const code = fs.readFileSync(BETS_PATH, "utf8");
  return extractConst(code, "MATCHES");
}

function loadTeamMap() {
  const code = fs.readFileSync(INDEX_PATH, "utf8");
  return extractConst(code, "TEAM_NAME_MAP");
}

async function fetchOpenFootball() {
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
  const data = await res.json();
  const byTeams = {};
  (data.matches || []).forEach(g => {
    const key = [g.team1, g.team2].sort().join("|");
    byTeams[key] = g;
  });
  return byTeams;
}

function main() {
  const matches = loadMatches();
  const teamMap = loadTeamMap();
  let resultsText = fs.readFileSync(RESULTS_PATH, "utf8");

  return fetchOpenFootball().then(byTeams => {
    const changes = [];

    matches.forEach(m => {
      // Only fill matches currently null — never overwrite an existing
      // manually-entered result (e.g. penalty-shootout "A" markers).
      const lineRe = new RegExp(`("${m.id}"\\s*:\\s*)null(\\s*,.*)`);
      if (!lineRe.test(resultsText)) return;

      const homeEn = teamMap[m.home];
      const awayEn = teamMap[m.away];
      if (!homeEn || !awayEn) {
        console.warn(`No team-name mapping for ${m.id}: ${m.home} / ${m.away}`);
        return;
      }
      const key = [homeEn, awayEn].sort().join("|");
      const g = byTeams[key];
      if (!g || !g.score || !g.score.ft) return;

      const [t1, t2] = g.score.ft;
      const [h, a] = g.team1 === homeEn ? [t1, t2] : [t2, t1];
      resultsText = resultsText.replace(lineRe, `$1[${h},${a}]$2`);
      changes.push(`${m.id}: ${m.home} ${h}-${a} ${m.away}`);
    });

    if (changes.length === 0) {
      console.log("No new results to update.");
      return;
    }

    fs.writeFileSync(RESULTS_PATH, resultsText);
    console.log(`Updated ${changes.length} result(s):`);
    changes.forEach(c => console.log(`  ${c}`));
  });
}

main().catch(e => {
  console.error("update-results failed:", e);
  process.exit(1);
});
