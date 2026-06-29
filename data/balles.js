// =============================================================================
// Ma Balle de Golf — Catalogue (source de données maintenable)
// =============================================================================
//
// RÈGLE DE SOURCING (cf. analyse de cohérence) :
//   • Champs de SCORING  -> portés fidèlement depuis `test_moteur.py`
//       cover, launch, spin (green), dspin (spin driver), vit, profil, sens, prix
//     NE PAS modifier sans refaire tourner la vérification (tools/verify_moteur.js).
//   • Champs d'AFFICHAGE -> portés depuis `ma-balle-de-golf-moteur.md`
//       construction, coverLabel, compression, couleurs, annee
//     Modifiables librement, ils n'entrent pas dans le calcul.
//
// MILLÉSIME (`annee`) : génération courante connue (2024-2025), facile à mettre à
//   jour ici. `null` = marque sans cycle annuel clair (Inesis, Vice, Pinnacle,
//   certaines Volvik) -> l'affichage masque alors l'année.
//
// Les FICHES rédigées (deux registres + encadré) vivent dans `data/fiches.js`,
//   indexées par `id`, et sont fusionnées au chargement (cf. js/moteur.js).
//
// Encodage scoring :
//   cover : 'ure' (uréthane) | 'ion' (ionomer / Surlyn)
//   launch / spin / dspin : 'bas' | 'moy' | 'haut'
//   vit   : catégories de vitesse couvertes, sous-ensemble de [1,2,3,4] (V1..V4)
//   profil: sous-ensemble de [1,2,3]  (1=A distance · 2=B polyvalente · 3=C contrôle)
//   sens  : 'soft' | 'neutre' | 'firm'
//   prix  : 1 (€) | 2 (€€) | 3 (€€€)
// =============================================================================

export const CATALOGUE = [
  // --- TITLEIST -------------------------------------------------------------
  { id: "titleist-pro-v1", marque: "Titleist", nom: "Pro V1", annee: 2024,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "≈ 87 (moyenne)",
    launch: "moy", spin: "haut", dspin: "moy", vit: [3, 4], profil: [3], sens: "neutre", prix: 3 },
  { id: "titleist-pro-v1x", marque: "Titleist", nom: "Pro V1x", annee: 2024,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "≈ 97 (haute)",
    launch: "haut", spin: "haut", dspin: "haut", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "titleist-avx", marque: "Titleist", nom: "AVX", annee: 2024,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "≈ 77 (moyenne)",
    launch: "bas", spin: "moy", dspin: "bas", vit: [2, 3], profil: [3], sens: "soft", prix: 3 },
  { id: "titleist-tour-speed", marque: "Titleist", nom: "Tour Speed", annee: 2023,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "moyenne",
    launch: "moy", spin: "moy", dspin: "moy", vit: [2, 3], profil: [2, 3], sens: "neutre", prix: 2 },
  { id: "titleist-tour-soft", marque: "Titleist", nom: "Tour Soft", annee: 2024,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 70",
    launch: "moy", spin: "moy", dspin: "bas", vit: [2, 3], profil: [2], sens: "soft", prix: 2 },
  { id: "titleist-velocity", marque: "Titleist", nom: "Velocity", annee: 2024,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "moyenne",
    launch: "haut", spin: "bas", dspin: "bas", vit: [2, 3], profil: [1], sens: "neutre", prix: 2 },
  { id: "titleist-trufeel", marque: "Titleist", nom: "TruFeel", annee: 2024,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "basse (la + douce Titleist)",
    launch: "moy", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "soft", prix: 1 },

  // --- CALLAWAY -------------------------------------------------------------
  { id: "callaway-chrome-tour", marque: "Callaway", nom: "Chrome Tour", annee: 2024,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "moyenne-haute",
    launch: "moy", spin: "haut", dspin: "moy", vit: [3, 4], profil: [3], sens: "neutre", prix: 3 },
  { id: "callaway-chrome-tour-x", marque: "Callaway", nom: "Chrome Tour X", annee: 2024,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "haute",
    launch: "moy", spin: "haut", dspin: "bas", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "callaway-chrome-soft", marque: "Callaway", nom: "Chrome Soft", annee: 2022,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "≈ 72",
    launch: "haut", spin: "haut", dspin: "moy", vit: [2, 3], profil: [3], sens: "soft", prix: 3 },
  { id: "callaway-erc-soft", marque: "Callaway", nom: "ERC Soft", annee: 2023,
    construction: 3, cover: "ion", coverLabel: "Hybride / ionomer", compression: "basse",
    launch: "haut", spin: "moy", dspin: "bas", vit: [1, 2], profil: [1, 2], sens: "soft", prix: 2 },
  { id: "callaway-supersoft", marque: "Callaway", nom: "Supersoft", annee: 2023,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 38 (très basse)",
    launch: "haut", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "soft", prix: 1 },

  // --- TAYLORMADE -----------------------------------------------------------
  { id: "taylormade-tp5", marque: "TaylorMade", nom: "TP5", annee: 2024,
    construction: 5, cover: "ure", coverLabel: "Uréthane", compression: "moyenne-haute",
    launch: "moy", spin: "haut", dspin: "moy", vit: [3, 4], profil: [3], sens: "neutre", prix: 3 },
  { id: "taylormade-tp5x", marque: "TaylorMade", nom: "TP5x", annee: 2024,
    construction: 5, cover: "ure", coverLabel: "Uréthane", compression: "haute (≈ 97)",
    launch: "haut", spin: "haut", dspin: "moy", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "taylormade-tour-response", marque: "TaylorMade", nom: "Tour Response", annee: 2022,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "basse-moyenne",
    launch: "moy", spin: "moy", dspin: "moy", vit: [2, 3], profil: [3], sens: "soft", prix: 2 },
  { id: "taylormade-speedsoft", marque: "TaylorMade", nom: "SpeedSoft", annee: 2025,
    construction: 3, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "< 50 (basse)",
    launch: "haut", spin: "moy", dspin: "bas", vit: [1, 2], profil: [1, 2], sens: "soft", prix: 2 },
  { id: "taylormade-soft-response", marque: "TaylorMade", nom: "Soft Response", annee: 2022,
    construction: 3, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "basse",
    launch: "haut", spin: "moy", dspin: "bas", vit: [1, 2], profil: [1], sens: "soft", prix: 1 },
  { id: "taylormade-distance-plus", marque: "TaylorMade", nom: "Distance+", annee: 2024,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "basse-moyenne",
    launch: "moy", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "neutre", prix: 1 },

  // --- BRIDGESTONE ----------------------------------------------------------
  { id: "bridgestone-tour-b-x", marque: "Bridgestone", nom: "Tour B X", annee: 2024,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "haute (> 105 mph)",
    launch: "moy", spin: "haut", dspin: "bas", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "bridgestone-tour-b-xs", marque: "Bridgestone", nom: "Tour B XS", annee: 2024,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "haute",
    launch: "moy", spin: "haut", dspin: "moy", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "bridgestone-tour-b-rx", marque: "Bridgestone", nom: "Tour B RX", annee: 2024,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "basse-moyenne (< 105 mph)",
    launch: "moy", spin: "haut", dspin: "bas", vit: [2, 3], profil: [3], sens: "neutre", prix: 3 },
  { id: "bridgestone-tour-b-rxs", marque: "Bridgestone", nom: "Tour B RXS", annee: 2024,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "basse-moyenne (< 105 mph)",
    launch: "moy", spin: "haut", dspin: "moy", vit: [2, 3], profil: [3], sens: "soft", prix: 3 },
  { id: "bridgestone-e12", marque: "Bridgestone", nom: "e12 Contact", annee: 2023,
    construction: 3, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "moyenne",
    launch: "haut", spin: "moy", dspin: "bas", vit: [2, 3], profil: [1, 2], sens: "neutre", prix: 2 },
  { id: "bridgestone-e6-soft", marque: "Bridgestone", nom: "e6 Soft", annee: 2025,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "basse",
    launch: "haut", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "soft", prix: 1 },

  // --- SRIXON ---------------------------------------------------------------
  { id: "srixon-z-star", marque: "Srixon", nom: "Z-Star", annee: 2025,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "moyenne",
    launch: "moy", spin: "haut", dspin: "moy", vit: [3], profil: [3], sens: "neutre", prix: 3 },
  { id: "srixon-z-star-xv", marque: "Srixon", nom: "Z-Star XV", annee: 2025,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "haute",
    launch: "haut", spin: "haut", dspin: "moy", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "srixon-z-star-diamond", marque: "Srixon", nom: "Z-Star Diamond", annee: 2025,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "moyenne-haute",
    launch: "haut", spin: "haut", dspin: "haut", vit: [3, 4], profil: [3], sens: "neutre", prix: 3 },
  { id: "srixon-q-star-tour", marque: "Srixon", nom: "Q-Star Tour", annee: 2024,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "basse-moyenne",
    launch: "moy", spin: "haut", dspin: "moy", vit: [2, 3], profil: [3], sens: "neutre", prix: 2 },
  { id: "srixon-q-star", marque: "Srixon", nom: "Q-Star", annee: 2022,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "moyenne",
    launch: "moy", spin: "moy", dspin: "bas", vit: [2], profil: [2], sens: "neutre", prix: 2 },
  { id: "srixon-ad333", marque: "Srixon", nom: "AD333", annee: 2024,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "basse-moyenne",
    launch: "haut", spin: "moy", dspin: "bas", vit: [1, 2], profil: [1, 2], sens: "neutre", prix: 1 },
  { id: "srixon-soft-feel", marque: "Srixon", nom: "Soft Feel", annee: 2023,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "basse (≈ 60)",
    launch: "haut", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "soft", prix: 1 },
  { id: "srixon-ultisoft", marque: "Srixon", nom: "UltiSoft", annee: 2023,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 42 (très basse)",
    launch: "haut", spin: "bas", dspin: "bas", vit: [1], profil: [1], sens: "soft", prix: 1 },

  // --- WILSON ---------------------------------------------------------------
  { id: "wilson-staff-model", marque: "Wilson", nom: "Staff Model", annee: 2024,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "haute",
    launch: "moy", spin: "haut", dspin: "moy", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "wilson-staff-model-x", marque: "Wilson", nom: "Staff Model X", annee: 2024,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "haute",
    launch: "haut", spin: "haut", dspin: "haut", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "wilson-triad", marque: "Wilson", nom: "Triad", annee: 2022,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "≈ 86",
    launch: "moy", spin: "moy", dspin: "moy", vit: [3], profil: [2, 3], sens: "neutre", prix: 2 },
  { id: "wilson-duo-soft", marque: "Wilson", nom: "Duo Soft", annee: 2023,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 29-35 (la + basse du marché)",
    launch: "haut", spin: "bas", dspin: "bas", vit: [1], profil: [1], sens: "soft", prix: 1 },

  // --- VOLVIK ---------------------------------------------------------------
  { id: "volvik-condor", marque: "Volvik", nom: "Condor", annee: null,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "moyenne",
    launch: "moy", spin: "haut", dspin: "moy", vit: [3], profil: [3], sens: "neutre", prix: 3 },
  { id: "volvik-condor-x", marque: "Volvik", nom: "Condor X", annee: null,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "moyenne-haute",
    launch: "haut", spin: "haut", dspin: "moy", vit: [3, 4], profil: [3], sens: "neutre", prix: 3 },
  { id: "volvik-s4", marque: "Volvik", nom: "S4", annee: 2021,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "haute",
    launch: "haut", spin: "haut", dspin: "moy", vit: [4], profil: [3], sens: "firm", prix: 3, couleurs: "couleurs" },
  { id: "volvik-vivid", marque: "Volvik", nom: "Vivid", annee: 2024,
    construction: 3, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 80",
    launch: "moy", spin: "bas", dspin: "bas", vit: [2, 3], profil: [1, 2], sens: "neutre", prix: 2, couleurs: "11 couleurs mates" },
  { id: "volvik-vivid-soft", marque: "Volvik", nom: "Vivid Soft", annee: 2024,
    construction: 3, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 70",
    launch: "moy", spin: "moy", dspin: "bas", vit: [2], profil: [2], sens: "soft", prix: 2, couleurs: "couleurs mates" },
  { id: "volvik-power-soft", marque: "Volvik", nom: "Power Soft", annee: null,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 75",
    launch: "moy", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "neutre", prix: 1, couleurs: "glossy" },
  { id: "volvik-radiance", marque: "Volvik", nom: "Radiance", annee: null,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "basse",
    launch: "haut", spin: "bas", dspin: "bas", vit: [1], profil: [1], sens: "soft", prix: 1, couleurs: "haute visibilité" },

  // --- INESIS (Decathlon) ---------------------------------------------------
  { id: "inesis-tour-900", marque: "Inesis", nom: "Tour 900", annee: null,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "≈ 90",
    launch: "moy", spin: "haut", dspin: "moy", vit: [3], profil: [3], sens: "neutre", prix: 1 },
  { id: "inesis-soft-500", marque: "Inesis", nom: "Soft 500", annee: null,
    construction: 2, cover: "ion", coverLabel: "Surlyn", compression: "74",
    launch: "moy", spin: "moy", dspin: "bas", vit: [1, 2], profil: [1, 2], sens: "neutre", prix: 1 },
  { id: "inesis-distance-100", marque: "Inesis", nom: "Distance 100", annee: null,
    construction: 2, cover: "ion", coverLabel: "Surlyn", compression: "basse-moyenne",
    launch: "moy", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "neutre", prix: 1 },

  // --- VICE (vente directe / DTC) -------------------------------------------
  { id: "vice-pro-plus", marque: "Vice", nom: "Pro Plus", annee: null,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "≈ 95-100",
    launch: "moy", spin: "haut", dspin: "bas", vit: [4], profil: [3], sens: "firm", prix: 2, couleurs: "blanc + néons" },
  { id: "vice-pro", marque: "Vice", nom: "Pro", annee: null,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "≈ 86-90",
    launch: "moy", spin: "haut", dspin: "moy", vit: [3], profil: [3], sens: "neutre", prix: 2, couleurs: "nombreuses" },
  { id: "vice-pro-air", marque: "Vice", nom: "Pro Air", annee: null,
    construction: 3, cover: "ure", coverLabel: "Uréthane", compression: "basse",
    launch: "haut", spin: "moy", dspin: "moy", vit: [1, 2], profil: [3], sens: "soft", prix: 2, couleurs: "blanc / couleurs" },
  { id: "vice-tour", marque: "Vice", nom: "Tour", annee: null,
    construction: 3, cover: "ion", coverLabel: "Surlyn", compression: "moyenne",
    launch: "moy", spin: "moy", dspin: "bas", vit: [2, 3], profil: [2], sens: "neutre", prix: 1, couleurs: "blanc / jaune" },
  { id: "vice-drive", marque: "Vice", nom: "Drive", annee: null,
    construction: 2, cover: "ion", coverLabel: "Surlyn", compression: "≈ 95 (ferme)",
    launch: "moy", spin: "bas", dspin: "bas", vit: [2, 3], profil: [1], sens: "firm", prix: 1, couleurs: "blanc / couleurs" },

  // --- MIZUNO ---------------------------------------------------------------
  { id: "mizuno-rb-tour-x", marque: "Mizuno", nom: "RB Tour X", annee: 2024,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "≈ 110 (la + ferme du marché)",
    launch: "haut", spin: "haut", dspin: "bas", vit: [4], profil: [3], sens: "firm", prix: 3 },
  { id: "mizuno-rb-tour", marque: "Mizuno", nom: "RB Tour", annee: 2024,
    construction: 4, cover: "ure", coverLabel: "Uréthane", compression: "moyenne-haute",
    launch: "moy", spin: "haut", dspin: "bas", vit: [3, 4], profil: [3], sens: "neutre", prix: 3 },
  { id: "mizuno-rb-max", marque: "Mizuno", nom: "RB Max", annee: 2024,
    construction: 3, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "moyenne",
    launch: "haut", spin: "moy", dspin: "bas", vit: [2, 3], profil: [1, 2], sens: "neutre", prix: 2 },
  { id: "mizuno-rb-566", marque: "Mizuno", nom: "RB 566", annee: 2020,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 50-60 (basse)",
    launch: "haut", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "soft", prix: 1 },

  // --- PINNACLE (Acushnet) --------------------------------------------------
  { id: "pinnacle-rush", marque: "Pinnacle", nom: "Rush", annee: null,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "moyenne",
    launch: "haut", spin: "bas", dspin: "bas", vit: [1, 2, 3], profil: [1], sens: "neutre", prix: 1, couleurs: "pack de 15" },
  { id: "pinnacle-soft", marque: "Pinnacle", nom: "Soft", annee: null,
    construction: 2, cover: "ion", coverLabel: "Ionomer (Surlyn)", compression: "≈ 50 (basse)",
    launch: "moy", spin: "bas", dspin: "bas", vit: [1, 2], profil: [1], sens: "soft", prix: 1, couleurs: "pack de 15" },
];

// Symboles d'affichage du palier de prix.
export const PRIX_SYMBOLE = { 1: "€", 2: "€€", 3: "€€€" };
