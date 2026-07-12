// ============================================================
// QUINIELA FIFA 2026 — Resultados
// ✏️  Actualizar aquí después de cada partido.
// Formato: "m01": [goles_local, goles_visitante]
// Sin resultado: null
// ============================================================

const RESULTS = {
  "m01": [2,0],  // México vs Sudáfrica        (11-Jun)
  "m02": [1,1],  // Canadá vs Bosnia-Herz.     (12-Jun)
  "m03": [1,1],  // Qatar vs Suiza             (12-Jun)
  "m04": [1,1],  // Brasil vs Marruecos        (12-Jun)
  "m05": [4,1],  // EE.UU. vs Paraguay         (12-Jun)
  "m06": [2,1],  // Corea del Sur vs Rep. Checa(13-Jun)
  "m07": [0,1],  // Haití vs Escocia           (13-Jun)
  "m08": [2,0],  // Australia vs Turquía       (13-Jun)
  "m09": [7,1],  // Alemania vs Curazao        (13-Jun)
  "m10": [2,2],  // Países Bajos vs Japón      (14-Jun)
  "m11": [1,0],  // Costa de Marfil vs Ecuador (14-Jun)
  "m12": [5,1],  // Suecia vs Túnez            (14-Jun)
  "m13": [1,1],  // Bélgica vs Egipto          (14-Jun)
  "m14": [0,0],  // España vs Cabo Verde       (14-Jun)
  "m15": [2,2],  // Irán vs Nueva Zelanda      (15-Jun)
  "m16": [1,1],  // Arabia Saudita vs Uruguay  (15-Jun)
  "m17": [3,1],  // Francia vs Senegal         (15-Jun)
  "m18": [1,4],  // Irak vs Noruega            (15-Jun)
  "m19": [3,0],  // Argentina vs Argelia       (15-Jun)
  "m20": [3,1],  // Austria vs Jordania        (16-Jun)
  "m21": [1,1],  // Portugal vs R.D. del Congo (16-Jun)
  "m22": [1,3],  // Uzbekistán vs Colombia     (16-Jun)
  "m23": [4,2],  // Inglaterra vs Croacia      (16-Jun)
  "m24": [1,0],  // Ghana vs Panamá            (17-Jun)

  // === JORNADA 2 (Jun 18-23) ===
  "m25": [1,0],  // México vs Corea del Sur    (18-Jun)
  "m26": [1,1],  // Sudáfrica vs Rep. Checa    (18-Jun)
  "m27": [6,0],  // Canadá vs Qatar            (18-Jun)
  "m28": [1,4],  // Bosnia-Herz. vs Suiza      (18-Jun)
  "m29": [3,0],  // Brasil vs Haití            (19-Jun)
  "m30": [1,0],  // Marruecos vs Escocia       (19-Jun)
  "m31": [2,0],  // EE.UU. vs Australia        (19-Jun)
  "m32": [1,0],  // Paraguay vs Turquía        (19-Jun)
  "m33": [2,1],  // Alemania vs Costa de Marfil(20-Jun)
  "m34": [0,0],  // Curazao vs Ecuador         (20-Jun)
  "m35": [5,1],  // Países Bajos vs Suecia     (20-Jun)
  "m36": [4,0],  // Japón vs Túnez             (20-Jun)
  "m37": [0,0],  // Bélgica vs Irán            (21-Jun)
  "m38": [3,1],  // Egipto vs Nueva Zelanda    (21-Jun)
  "m39": [4,0],  // España vs Arabia Saudita   (21-Jun)
  "m40": [2,2],  // Cabo Verde vs Uruguay      (21-Jun)
  "m41": [3,0],  // Francia vs Irak            (22-Jun)
  "m42": [2,3],  // Senegal vs Noruega         (22-Jun)
  "m43": [2,0],  // Argentina vs Austria       (22-Jun)
  "m44": [1,2],  // Jordania vs Argelia        (22-Jun)
  "m45": [5,0],  // Portugal vs Uzbekistán     (23-Jun)
  "m46": [0,1],  // R.D. del Congo vs Colombia (23-Jun)
  "m47": [1,0],  // Croacia vs Panamá          (23-Jun)
  "m48": [0,0],  // Inglaterra vs Ghana        (23-Jun)

  // === JORNADA 3 (Jun 24-27) ===
  "m49": [0,3],  // Rep. Checa vs México       (24-Jun)
  "m50": [1,0],  // Sudáfrica vs Corea del Sur (24-Jun)
  "m51": [2,1],  // Suiza vs Canadá            (24-Jun)
  "m52": [3,1],  // Bosnia-Herz. vs Qatar      (24-Jun)
  "m53": [0,3],  // Escocia vs Brasil          (24-Jun)
  "m54": [4,2],  // Marruecos vs Haití         (24-Jun)
  "m55": [3,2],  // Turquía vs EE.UU.          (25-Jun)
  "m56": [0,0],  // Paraguay vs Australia      (25-Jun)
  "m57": [0,2],  // Curazao vs Costa de Marfil (25-Jun)
  "m58": [2,1],  // Ecuador vs Alemania        (25-Jun)
  "m59": [1,1],  // Japón vs Suecia            (25-Jun)
  "m60": [1,3],  // Túnez vs Países Bajos      (25-Jun)
  "m61": [1,1],  // Egipto vs Irán             (26-Jun)
  "m62": [1,5],  // Nueva Zelanda vs Bélgica   (26-Jun)
  "m63": [0,0],  // Cabo Verde vs Arabia Saudita(26-Jun)
  "m64": [0,1],  // Uruguay vs España          (26-Jun)
  "m65": [1,4],  // Noruega vs Francia         (26-Jun)
  "m66": [5,0],  // Senegal vs Irak            (26-Jun)
  "m67": [3,3],  // Argelia vs Austria         (27-Jun)
  "m68": [1,3],  // Jordania vs Argentina      (27-Jun)
  "m69": [0,0],  // Colombia vs Portugal       (27-Jun)
  "m70": [3,1],  // R.D. del Congo vs Uzbekistán(27-Jun)
  "m71": [0,2],  // Panamá vs Inglaterra       (27-Jun)
  "m72": [2,1],  // Croacia vs Ghana           (27-Jun)

  // === RONDA DE 32 ===
  "m73": [2,1],        // Brasil vs Japón            (29-Jun)
  "m74": [1,1,"A"],   // Alemania vs Paraguay       (30-Jun) — Paraguay gana penales 4-3
  "m75": [1,1,"A"],   // Países Bajos vs Marruecos  (29-Jun) — 1-1 en 90'/ET, Marruecos gana penales 3-2 (fuente: FIFA/ESPN, corrige el 2-2 anotado antes por error)
  "m76": [1,2],        // Costa de Marfil vs Noruega (30-Jun)
  "m77": [3,0],        // Francia vs Suecia          (30-Jun)
  "m78": [2,0],        // México vs Ecuador          (30-Jun)
  "m79": [2,1],        // Inglaterra vs R.D. del Congo (1-Jul)
  "m80": [3,2],        // Bélgica vs Senegal         (1-Jul) — ET
  "m81": [2,0],  // EE.UU. vs Bosnia-Herz.     (2-Jul)
  "m82": [3,0],  // España vs Austria          (3-Jul)
  "m83": [2,1],  // Portugal vs Croacia        (3-Jul)
  "m84": [2,0],  // Suiza vs Argelia           (3-Jul)
  "m85": [1,1,"A"],  // Australia vs Egipto    (3-Jul) — 1-1 en 90' y en ET, Egipto gana penales 4-2
  "m86": [3,2],  // Argentina vs Cabo Verde   (4-Jul) — 1-1 en 90', 3-2 en tiempo extra
  "m87": [1,0],  // Colombia vs Ghana          (4-Jul)
  "m88": [1,0],  // Canadá vs Sudáfrica        (28-Jun) — faltaba en el formulario original, sin apuestas

  // === RONDA DE 16 ===
  "m89": [0,3],  // Canadá vs Marruecos        (4-Jul)
  "m90": [0,1],  // Paraguay vs Francia        (4-Jul)
  "m91": [1,2],  // Brasil vs Noruega          (5-Jul)
  "m92": [2,3],  // México vs Inglaterra       (5-Jul)
  "m93": [0,1],  // Portugal vs España         (6-Jul)
  "m94": [1,4],  // EE.UU. vs Bélgica          (6-Jul)
  "m95": [3,2],  // Argentina vs Egipto        (7-Jul) — Argentina remonta 0-2, gana 3-2
  "m96": [0,0,"H"],  // Suiza vs Colombia      (7-Jul) — 0-0 en 120', Suiza gana penales 4-3

  // === CUARTOS DE FINAL ===
  "m97": [2,0],  // Francia vs Marruecos       (9-Jul)
  "m98": [2,1],   // España vs Bélgica          (10-Jul) — pendiente
  "m99": [1,2],   // Noruega vs Inglaterra      (11-Jul) — pendiente
  "m100": [3,1],  // Argentina vs Suiza         (11-Jul) — pendiente
};
