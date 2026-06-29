// =============================================================================
// Ma Balle de Golf — Moteur de recommandation
// Portage fidèle de `test_moteur.py` (logique validée). NE PAS re-dériver.
// Poids standard : vit 30 · prio 25 · green 20 · niveau 12 · traj 8 · sens 5
// Poids confirmé : vit 25 · prio 20 · green 15 · finesse 22 · niveau 5 · traj 8 · sens 5
// =============================================================================

import { CATALOGUE, PRIX_SYMBOLE } from "../data/balles.js";
import { FICHES } from "../data/fiches.js";

// Catalogue enrichi : on agrège la fiche rédigée (si elle existe) à chaque balle.
export const BALLES = CATALOGUE.map((b) => ({ ...b, fiche: FICHES[b.id] || null }));

export { PRIX_SYMBOLE };

// --- Composantes de score ----------------------------------------------------

function minEcart(valeur, ensemble) {
  return Math.min(...ensemble.map((v) => Math.abs(valeur - v)));
}

export function scoreVitesse(profilV, ball) {
  if (ball.vit.includes(profilV)) return 1.0;
  const dist = minEcart(profilV, ball.vit);
  return { 1: 0.6, 2: 0.25 }[dist] ?? 0.0;
}

export function scorePriorite(profilP, ball) {
  if (ball.profil.includes(profilP)) return 1.0;
  const dist = minEcart(profilP, ball.profil);
  return { 1: 0.5, 2: 0.1 }[dist] ?? 0.1;
}

export function scoreGreen(green, ball) {
  const ure = ball.cover === "ure";
  const premium = ball.prix === 3;
  if (green === "rouler") {
    if (!ure) return 1.0;
    return premium ? 0.2 : 0.5;
  }
  if (green === "mixte") return 0.85;
  if (green === "stop") return ure ? 1.0 : 0.3;
  if (green === "debute") return ure ? 0.6 : 0.9;
  return 0.8;
}

function exigence(ball) {
  if (ball.cover === "ure" && (ball.vit.includes(4) || ball.sens === "firm")) return "haute";
  if (ball.cover === "ure") return "moyenne";
  return "basse";
}

export function scoreNiveau(niveau, ball) {
  const ex = exigence(ball);
  if (niveau === "deb") return { haute: 0.4, moyenne: 0.7, basse: 1.0 }[ex];
  if (niveau === "inter") return { haute: 0.8, moyenne: 0.95, basse: 1.0 }[ex];
  if (niveau === "conf") {
    if (ball.cover === "ion" && ball.spin === "bas" && ball.prix === 1) return 0.7;
    return 1.0;
  }
  return 0.9;
}

export function scoreTraj(traj, ball) {
  const L = ball.launch;
  if (traj === "basse") return { haut: 1.0, moy: 0.7, bas: 0.3 }[L];
  if (traj === "haute") return { bas: 1.0, moy: 0.7, haut: 0.3 }[L];
  if (traj === "normale") return { moy: 1.0, haut: 0.85, bas: 0.85 }[L];
  return 0.85;
}

export function scoreSens(sens, ball) {
  if (sens === "neutre") return 0.85;
  const order = { soft: 0, neutre: 1, firm: 2 };
  const d = Math.abs(order[sens] - order[ball.sens]);
  return { 0: 1.0, 1: 0.6, 2: 0.2 }[d];
}

// Question de finesse premium (uniquement si niveau === 'conf').
// premium ∈ {"max_spin","equilibre","distance", null}
export function scorePremium(premium, ball) {
  if (premium == null) return null; // question non posée
  const spinGreen = ball.spin;
  const dspin = ball.dspin;
  if (premium === "max_spin") return { haut: 1.0, moy: 0.55, bas: 0.15 }[spinGreen];
  if (premium === "equilibre") {
    const g = { moy: 1.0, haut: 0.85, bas: 0.55 }[spinGreen];
    const d = { moy: 1.0, bas: 0.8, haut: 0.8 }[dspin];
    return 0.5 * g + 0.5 * d;
  }
  if (premium === "distance") return { bas: 1.0, moy: 0.55, haut: 0.15 }[dspin];
  return 0.7;
}

export function scoreTotal(p, ball) {
  const prem = scorePremium(p.premium ?? null, ball);
  if (prem === null) {
    // Barème standard (débutant / intermédiaire)
    return (
      0.30 * scoreVitesse(p.v, ball) +
      0.25 * scorePriorite(p.p, ball) +
      0.20 * scoreGreen(p.green, ball) +
      0.12 * scoreNiveau(p.niveau, ball) +
      0.08 * scoreTraj(p.traj, ball) +
      0.05 * scoreSens(p.sens, ball)
    );
  }
  // Barème confirmé (finesse 22 %, renormalisé)
  return (
    0.25 * scoreVitesse(p.v, ball) +
    0.20 * scorePriorite(p.p, ball) +
    0.15 * scoreGreen(p.green, ball) +
    0.05 * scoreNiveau(p.niveau, ball) +
    0.08 * scoreTraj(p.traj, ball) +
    0.05 * scoreSens(p.sens, ball) +
    0.22 * prem
  );
}

// --- Cas piège pédagogue -----------------------------------------------------

export function enConflit(p) {
  // priorité = contrôle (C) MAIS jeu green = « je fais rouler »
  return p.p === 3 && p.green === "rouler";
}

// Tri : score (arrondi à 3 décimales) puis RESPECT DU BUDGET DÉCLARÉ.
function classer(p, catalogue) {
  const budget = p.budget ?? 3;
  const cle = (bb) => {
    const s = Math.round(scoreTotal(p, bb) * 1000) / 1000;
    const prox = Math.abs(bb.prix - budget);
    return [-s, prox, bb.prix];
  };
  // Tri stable (Node ≥ 12 / navigateurs modernes) : préserve l'ordre du catalogue
  // sur égalité parfaite, comme le sorted() de Python.
  return [...catalogue].sort((a, b) => {
    const ka = cle(a);
    const kb = cle(b);
    return ka[0] - kb[0] || ka[1] - kb[1] || ka[2] - kb[2];
  });
}

// --- Composition des 3 sorties ----------------------------------------------

export function recommander(p, catalogue = BALLES) {
  const classed = classer(p, catalogue);
  const conflit = enConflit(p);

  let ideale, alternative;
  if (conflit) {
    // IDÉALE = meilleure balle qui colle au jeu réel → ionomer prévisible
    ideale = classed.find((bb) => bb.cover === "ion") ?? classed[0];
    // RÉFÉRENCE CONTRÔLE = meilleure uréthane (l'aspiration)
    const refControle = classed.find((bb) => bb.cover === "ure") ?? classed[1];
    alternative = refControle;
  } else {
    ideale = classed[0];
    alternative =
      classed.slice(1).find((bb) => bb.marque !== ideale.marque) ?? classed[1];
  }

  // CHOIX MALIN = meilleur score en € (sinon €€), distinct de l'idéale ET de l'alternative
  const enEur = classed.filter((bb) => bb.prix === 1);
  const malinPool = enEur.length ? enEur : classed.filter((bb) => bb.prix === 2);
  const exclus = new Set([ideale.id, alternative.id]);
  let malin = malinPool.find((bb) => !exclus.has(bb.id)) ?? null;
  if (malin === null) {
    malin = malinPool.find((bb) => bb.id !== ideale.id) ?? malinPool[0] ?? null;
  }

  // OPTION A : si l'idéale est déjà en € (hors conflit), pas de 3ᵉ carte.
  const optionA = ideale.prix === 1 && !conflit;

  return {
    ideale,
    alternative,
    malin: optionA ? null : malin,
    optionA,
    conflit,
    classed,
  };
}
