// =============================================================================
// Vérification du portage : rejoue les 6 profils types de test_moteur.py
// et compare aux sorties de référence. `npm run verify`.
// =============================================================================

import { recommander, scoreTotal, BALLES, PRIX_SYMBOLE } from "../js/moteur.js";

const PROFILS = {
  "1 · Senior débutant lent (V1, distance, fait rouler, balle basse, €)":
    { v: 1, p: 1, green: "rouler", niveau: "deb", traj: "basse", sens: "soft", budget: 1 },
  "2 · Joueur moyen polyvalent (V2, équilibre, vole+roule, normale, €€)":
    { v: 2, p: 2, green: "mixte", niveau: "inter", traj: "normale", sens: "neutre", budget: 2 },
  "3 · Avancé rapide — MORDANT MAX (V4, contrôle, arrête, ferme, €€€)":
    { v: 4, p: 3, green: "stop", niveau: "conf", traj: "normale", sens: "firm", budget: 3, premium: "max_spin" },
  "3b · Avancé rapide — DISTANCE/PERÇANTE (V4, contrôle, arrête, €€€)":
    { v: 4, p: 3, green: "stop", niveau: "conf", traj: "normale", sens: "firm", budget: 3, premium: "distance" },
  "4 · CAS PIÈGE pédagogue : dit 'contrôle' mais ROULE (V2, prio C, €€)":
    { v: 2, p: 3, green: "rouler", niveau: "inter", traj: "normale", sens: "neutre", budget: 2 },
  "5 · Contrôle exploité, budget serré (V3, contrôle, arrête, inter, €)":
    { v: 3, p: 3, green: "stop", niveau: "inter", traj: "normale", sens: "neutre", budget: 1 },
};

// Sorties attendues (capturées depuis test_moteur.py).
const ATTENDU = {
  "1 · Senior débutant lent (V1, distance, fait rouler, balle basse, €)":
    { ideale: "Callaway Supersoft", alternative: "TaylorMade Soft Response", malin: null, optionA: true, score: 1.0 },
  "2 · Joueur moyen polyvalent (V2, équilibre, vole+roule, normale, €€)":
    { ideale: "Titleist Tour Soft", alternative: "Srixon Q-Star", malin: "Inesis Soft 500", optionA: false, score: 0.963 },
  "3 · Avancé rapide — MORDANT MAX (V4, contrôle, arrête, ferme, €€€)":
    { ideale: "Callaway Chrome Tour X", alternative: "Bridgestone Tour B X", malin: "Inesis Tour 900", optionA: false, score: 1.0 },
  "3b · Avancé rapide — DISTANCE/PERÇANTE (V4, contrôle, arrête, €€€)":
    { ideale: "Callaway Chrome Tour X", alternative: "Bridgestone Tour B X", malin: "Inesis Tour 900", optionA: false, score: 1.0 },
  "4 · CAS PIÈGE pédagogue : dit 'contrôle' mais ROULE (V2, prio C, €€)":
    { ideale: "Titleist Tour Soft", alternative: "Titleist Tour Speed", malin: "Inesis Soft 500", optionA: false, conflit: true, score: 0.867 },
  "5 · Contrôle exploité, budget serré (V3, contrôle, arrête, inter, €)":
    { ideale: "Inesis Tour 900", alternative: "Titleist Tour Speed", malin: null, optionA: true, score: 0.986 },
};

const nom = (b) => (b ? `${b.marque} ${b.nom}` : null);
const fiche = (b) =>
  `${b.marque} ${b.nom} [${b.cover === "ure" ? "uréthane" : "ionomer"}, ${PRIX_SYMBOLE[b.prix]}, spin ${b.spin}, lance ${b.launch}]`;

let echecs = 0;

for (const [titre, p] of Object.entries(PROFILS)) {
  const r = recommander(p);
  const a = ATTENDU[titre];
  console.log("=".repeat(92));
  console.log(titre);
  console.log("-".repeat(92));

  if (r.conflit) {
    console.log(`  🎯 Idéale (jeu réel)   : ${fiche(r.ideale)}   (score ${scoreTotal(p, r.ideale).toFixed(3)})`);
    console.log(`  🎯 Référence contrôle  : ${fiche(r.alternative)}   ← aspiration uréthane`);
  } else {
    console.log(`  🎯 Idéale       : ${fiche(r.ideale)}   (score ${scoreTotal(p, r.ideale).toFixed(3)})`);
    console.log(`  🔄 Alternative  : ${fiche(r.alternative)}   (score ${scoreTotal(p, r.alternative).toFixed(3)})`);
  }
  if (r.optionA) {
    console.log(`  💡 Choix malin  : — (idéale déjà au meilleur rapport qualité-prix)`);
  } else {
    console.log(`  💡 Choix malin  : ${fiche(r.malin)}   (score ${scoreTotal(p, r.malin).toFixed(3)})`);
  }
  console.log(
    `     Top 6 brut   : ` +
      r.classed.slice(0, 6).map((bb) => `${bb.marque} ${bb.nom} (${scoreTotal(p, bb).toFixed(2)})`).join(" | ")
  );

  // --- assertions ---
  const verifs = [
    ["idéale", nom(r.ideale), a.ideale],
    ["alternative", nom(r.alternative), a.alternative],
    ["malin", nom(r.malin), a.malin],
    ["optionA", r.optionA, a.optionA],
    ["conflit", r.conflit, a.conflit ?? false],
    ["score idéale", Math.round(scoreTotal(p, r.ideale) * 1000) / 1000, a.score],
  ];
  for (const [champ, obtenu, attendu] of verifs) {
    if (obtenu !== attendu) {
      console.log(`  ❌ ÉCART ${champ}: obtenu=${JSON.stringify(obtenu)} attendu=${JSON.stringify(attendu)}`);
      echecs++;
    }
  }
}

console.log("=".repeat(92));
if (echecs === 0) {
  console.log("✅ TOUT CONCORDE — le portage JS reproduit les 6 profils de test_moteur.py.");
} else {
  console.log(`❌ ${echecs} écart(s) détecté(s).`);
  process.exit(1);
}
