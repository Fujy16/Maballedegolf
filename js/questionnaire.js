// =============================================================================
// Ma Balle de Golf — Parcours du questionnaire + rendu des résultats
// 7 questions + Q8 conditionnelle (confirmés). Une question par écran.
// =============================================================================

import { recommander, PRIX_SYMBOLE, BALLES } from "./moteur.js";
import { initEmail } from "./email.js";

// --- Modèle des questions (cf. ma-balle-de-golf-questionnaire.md) -------------

const QUESTIONS = [
  {
    id: "q1", key: "v", kicker: "Votre drive",
    title: "En moyenne, jusqu'où va votre drive sur un coup bien tapé ?",
    sub: "Distance totale, là où la balle s'arrête. Pas votre record — votre coup bien tapé habituel. Une estimation suffit.",
    options: [
      { label: "Moins de 180 m", desc: "≈ presque deux terrains de foot", value: 1 },
      { label: "Entre 180 et 210 m", value: 2 },
      { label: "Entre 210 et 245 m", value: 3 },
      { label: "Plus de 245 m", desc: "la distance d'un bon joueur de club", value: 4 },
    ],
    skip: { label: "Je ne sais pas / je débute", value: 1 },
    speed: true,
  },
  {
    id: "q2", key: "p", kicker: "Votre priorité",
    title: "Qu'attendez-vous en priorité de votre balle ?",
    sub: "Aucune réponse n'est « meilleure » — elles correspondent à des jeux différents.",
    options: [
      { tag: "A", label: "De la distance et des coups droits", desc: "moins de balles perdues à droite ou à gauche", value: 1 },
      { tag: "B", label: "Un bon équilibre, polyvalent", desc: "ni trop spécialisé, ni trop cher", value: 2 },
      { tag: "C", label: "Du contrôle près du green", desc: "faire mordre la balle, l'arrêter", value: 3 },
    ],
  },
  {
    id: "q3", key: "green", kicker: "Autour du green",
    title: "Près du green, quand vous visez le drapeau, que cherchez-vous à faire ?",
    options: [
      { label: "Je fais rouler la balle vers le trou", desc: "comme un putt, en la posant tôt sur le green — le plus simple et régulier", value: "rouler" },
      { label: "Je la fais voler puis rouler un peu", desc: "jusqu'au drapeau", value: "mixte" },
      { label: "Je la fais atterrir et s'arrêter vite", desc: "avec de l'effet, près du trou", value: "stop" },
      { label: "Je ne suis pas encore à l'aise là-dedans", desc: "je débute dans ce domaine", value: "debute" },
    ],
  },
  {
    id: "q4", key: "niveau", kicker: "Votre niveau",
    title: "Où en êtes-vous dans votre golf ?",
    options: [
      { label: "Je débute", desc: "je perds encore beaucoup de balles", value: "deb" },
      { label: "Joueur intermédiaire", desc: "index ≈ 15 à 36, ou non classé mais régulier", value: "inter" },
      { label: "Joueur confirmé", desc: "index inférieur à 15", value: "conf" },
    ],
  },
  {
    id: "q5", key: "traj", kicker: "Vos trajectoires",
    title: "Comment décririez-vous la hauteur de vos coups en général ?",
    sub: "Cela nous aide à choisir une balle qui décolle facilement, ou au contraire plus perçante.",
    options: [
      { label: "Plutôt basse", desc: "j'ai du mal à faire monter la balle", value: "basse" },
      { label: "Normale", value: "normale" },
      { label: "Plutôt haute", desc: "elle monte beaucoup, parfois trop", value: "haute" },
    ],
    skip: { label: "Je ne sais pas", value: "normale" },
  },
  {
    id: "q6", key: "sens", kicker: "La sensation",
    title: "Quelle sensation préférez-vous à l'impact ?",
    sub: "C'est une affaire de goût — ça nous sert à départager deux balles très proches.",
    options: [
      { label: "Très douce", value: "soft" },
      { label: "Équilibrée / peu importe", value: "neutre" },
      { label: "Ferme et réactive", value: "firm" },
    ],
  },
  {
    id: "q7", key: "budget", kicker: "Le budget",
    title: "Quel budget visez-vous pour une douzaine de balles ?",
    sub: "Quoi que vous choisissiez, on vous montrera toujours une option maligne et économique.",
    options: [
      { tag: "€", label: "Le plus accessible possible", desc: "jusqu'à ~25 €", value: 1 },
      { tag: "€€", label: "Un bon rapport qualité-prix", desc: "~25 à 40 €", value: 2 },
      { tag: "€€€", label: "Peu importe, je veux la meilleure pour moi", desc: "40 € et plus", value: 3 },
    ],
  },
  {
    id: "q8", key: "premium", kicker: "Sur vos longs coups", conditionnel: true,
    title: "Sur vos longs coups, que recherchez-vous en priorité ?",
    options: [
      { label: "Plus de distance", desc: "une balle au vol plus tendu, qui déroule au sol", value: "distance" },
      { label: "Un équilibre", desc: "entre distance et contrôle", value: "equilibre" },
      { label: "Un maximum de contrôle", desc: "une balle qui s'arrête net, même de loin", value: "max_spin" },
    ],
  },
];

// --- État + navigation -------------------------------------------------------

const profil = {};
let currentId = "q1";
const elQuiz = document.getElementById("quiz");
const elResults = document.getElementById("results");
const elProgress = document.querySelector(".progress > span");

function sequence() {
  // q8 seulement si confirmé
  return QUESTIONS.filter((q) => !q.conditionnel || profil.niveau === "conf").map((q) => q.id);
}
function indexOfCurrent() { return sequence().indexOf(currentId); }

function setProgress() {
  const seq = sequence();
  const i = seq.indexOf(currentId);
  const pct = ((i + 1) / seq.length) * 100;
  elProgress.style.width = pct + "%";
}

function showQuestion(id) {
  currentId = id;
  const q = QUESTIONS.find((x) => x.id === id);
  const seq = sequence();
  const num = seq.indexOf(id) + 1;
  const sel = profil[q.key];

  const opts = q.options.map((o) => optionHTML(q, o, sel)).join("");
  const skip = q.skip
    ? `<div class="q-skip"><button type="button" data-skip="${encodeURIComponent(JSON.stringify(q.skip.value))}">${q.skip.label}</button></div>`
    : "";
  const speed = q.speed
    ? `<div class="q-link" style="margin-top:14px"><button type="button" id="speed-toggle">Je connais ma vitesse de swing</button></div>
       <div class="speed-box" id="speed-box" hidden>
         <label style="font-size:14px;color:var(--craie-muet)">Vitesse de swing au driver</label>
         <div style="display:flex;gap:10px;margin-top:10px;align-items:center;flex-wrap:wrap">
           <input type="number" id="speed-val" inputmode="decimal" min="50" max="160" placeholder="ex. 145" aria-label="Vitesse de swing" />
           <select id="speed-unit" aria-label="Unité"><option value="kmh">km/h</option><option value="mph">mph</option></select>
           <button type="button" class="btn btn-ghost" id="speed-go" style="padding:11px 18px;font-size:15px">Valider</button>
         </div>
       </div>`
    : "";
  const back = num > 1
    ? `<button type="button" class="q-back" id="q-back"><span aria-hidden="true">←</span> Précédent</button>`
    : `<span></span>`;

  elQuiz.innerHTML = `
    <section class="q-screen">
      <div class="q-inner">
        <div class="q-step">Question <b>${num}</b> / ${seq.length} · ${q.kicker}</div>
        <h1 class="q-title">${q.title}</h1>
        ${q.sub ? `<p class="q-sub">${q.sub}</p>` : ""}
        <div class="options" role="group" aria-label="${q.kicker}">${opts}</div>
        ${skip}
        ${speed}
        <div class="q-nav">${back}<span></span></div>
      </div>
    </section>`;

  // Écouteurs
  elQuiz.querySelectorAll("[data-val]").forEach((b) =>
    b.addEventListener("click", () => choose(q.key, JSON.parse(decodeURIComponent(b.dataset.val))))
  );
  const skipBtn = elQuiz.querySelector("[data-skip]");
  if (skipBtn) skipBtn.addEventListener("click", () => choose(q.key, JSON.parse(decodeURIComponent(skipBtn.dataset.skip))));
  const backBtn = document.getElementById("q-back");
  if (backBtn) backBtn.addEventListener("click", goBack);
  if (q.speed) wireSpeed();

  setProgress();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function optionHTML(q, o, sel) {
  const isSel = sel !== undefined && JSON.stringify(sel) === JSON.stringify(o.value);
  return `<button type="button" class="option${isSel ? " sel" : ""}" data-val="${encodeURIComponent(JSON.stringify(o.value))}">
    ${o.tag ? `<span class="tag">${o.tag}</span>` : ""}
    <span class="body"><span class="t">${o.label}</span>${o.desc ? `<span class="d">${o.desc}</span>` : ""}</span>
  </button>`;
}

function choose(key, value) {
  profil[key] = value;
  // retour visuel immédiat sur l'option choisie
  const cible = JSON.stringify(value);
  elQuiz.querySelectorAll(".option").forEach((b) => {
    b.classList.toggle("sel", JSON.stringify(JSON.parse(decodeURIComponent(b.dataset.val))) === cible);
  });
  setTimeout(advance, 180);
}

function advance() {
  const seq = sequence();
  const i = seq.indexOf(currentId);
  if (i < seq.length - 1) showQuestion(seq[i + 1]);
  else finish();
}

function goBack() {
  const seq = sequence();
  const i = seq.indexOf(currentId);
  if (i > 0) showQuestion(seq[i - 1]);
}

// Chemin avancé Q1 : saisie de vitesse → catégorie V
function wireSpeed() {
  const toggle = document.getElementById("speed-toggle");
  const box = document.getElementById("speed-box");
  toggle.addEventListener("click", () => { box.hidden = !box.hidden; if (!box.hidden) document.getElementById("speed-val").focus(); });
  document.getElementById("speed-go").addEventListener("click", () => {
    const raw = parseFloat(document.getElementById("speed-val").value);
    if (!raw || raw <= 0) return;
    const unit = document.getElementById("speed-unit").value;
    const mph = unit === "mph" ? raw : raw / 1.609;
    const v = mph < 85 ? 1 : mph < 95 ? 2 : mph < 105 ? 3 : 4;
    choose("v", v);
  });
}

// --- Finalisation + résultats ------------------------------------------------

function finish() {
  elProgress.style.width = "100%";
  const r = recommander(profil);
  const registre = profil.niveau === "conf" ? "confirme" : "debutant";
  elQuiz.hidden = true;
  elResults.hidden = false;
  elResults.innerHTML = renderResults(r, registre);
  initEmail(document.getElementById("email-slot"), r, { ...profil });
  document.getElementById("refaire")?.addEventListener("click", restart);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function restart() {
  for (const k of Object.keys(profil)) delete profil[k];
  elResults.hidden = true;
  elResults.innerHTML = "";
  elQuiz.hidden = false;
  showQuestion("q1");
}

// --- Rendu d'une fiche balle -------------------------------------------------

const PROFIL_LABEL = { 1: "Distance & tolérance", 2: "Polyvalente", 3: "Contrôle" };
const NIV3 = { bas: "Bas", moy: "Moyen", haut: "Élevé" };
const LAUNCH3 = { bas: "Bas", moy: "Moyen", haut: "Haut" };

function vitLabel(vit) {
  const v = [...vit].sort();
  return "V" + (v.length > 1 ? `${v[0]}–V${v[v.length - 1]}` : v[0]);
}

function balleMeta(b) {
  const annee = b.annee ? `${b.annee} · ` : "";
  return `${annee}${b.coverLabel} · ${b.construction} couches · ${PRIX_SYMBOLE[b.prix]}`;
}

function specs(b) {
  return `<div class="specs">
    <div class="spec"><div class="k">Enveloppe</div><div class="v">${b.coverLabel}</div></div>
    <div class="spec"><div class="k">Compression</div><div class="v">${b.compression}</div></div>
    <div class="spec"><div class="k">Lancement</div><div class="v">${LAUNCH3[b.launch]}</div></div>
    <div class="spec"><div class="k">Effet au green</div><div class="v">${NIV3[b.spin]}</div></div>
    <div class="spec"><div class="k">Profil</div><div class="v">${[...b.profil].map((p) => PROFIL_LABEL[p]).join(" / ")}</div></div>
    <div class="spec"><div class="k">Vitesse cible</div><div class="v">${vitLabel(b.vit)}</div></div>
  </div>`;
}

// Texte de fiche : la prose rédigée si elle existe, sinon un repli qualitatif
// (provisoire, sans chiffre inventé) en attendant la rédaction des 57 fiches.
function ficheTexte(b, registre) {
  if (b.fiche && b.fiche[registre]) return `<p>${b.fiche[registre].replace(/\n\n/g, "</p><p>")}</p>`;
  return repli(b, registre);
}

function repli(b, registre) {
  const ure = b.cover === "ure";
  const douce = b.sens === "soft", ferme = b.sens === "firm";
  const sens = douce ? "douce" : ferme ? "ferme et réactive" : "équilibrée";
  const orient = b.profil.includes(3) ? "le contrôle près du green" : b.profil.includes(1) ? "la distance et la tolérance" : "la polyvalence";
  const greenTxt = b.spin === "haut" ? "elle accroche le green et s'arrête" : b.spin === "moy" ? "elle offre un arrêt modéré sur le green" : "elle privilégie le roulement, prévisible";
  const vit = vitLabel(b.vit);
  if (registre === "confirme") {
    return `<p>Construction ${b.construction} couches, enveloppe ${ure ? "uréthane" : "ionomer"}, compression ${b.compression}. Centre de gravité ${vit}, orientée vers ${orient}.</p>
      <p>Au green, ${greenTxt} ; au driver, l'effet est ${NIV3[b.dspin].toLowerCase()}. Sensation ${sens}. <em>Fiche détaillée à venir.</em></p>`;
  }
  return `<p>Une balle ${sens}, pensée pour ${orient}. Près du green, ${greenTxt}.</p>
    <p>Adaptée à votre catégorie de vitesse (${vit}). <em>La fiche complète vous sera envoyée par e-mail.</em></p>`;
}

function carte(role, roleClass, b, registre, lead, extra = "") {
  return `<article class="card${lead ? " lead" : ""}">
    <div class="role"><span class="pip" style="width:8px;height:8px;background:var(--signal);display:inline-block"></span>${role}</div>
    <h2 class="ball-name">${b.marque} ${b.nom}</h2>
    <div class="ball-meta">${balleMeta(b)}</div>
    <div class="ball-text">${ficheTexte(b, registre)}</div>
    ${extra}
    ${specs(b)}
    <div class="encadre"><div class="k">Comprendre votre balle</div><div class="v">${encadre(b)}</div></div>
  </article>`;
}

function encadre(b) {
  if (b.fiche && b.fiche.encadre) return b.fiche.encadre;
  const cover = b.cover === "ure"
    ? "<strong>Uréthane</strong> : l'enveloppe haut de gamme, plus tendre, qui « accroche » sur les wedges et fait mordre la balle au green."
    : "<strong>Ionomer (Surlyn)</strong> : une enveloppe plus résistante et prévisible, qui privilégie la durabilité et le roulement plutôt que l'effet.";
  const comp = "<strong>Compression</strong> : la dureté du cœur de la balle. Plus elle est basse, moins il faut taper vite pour bien la « comprimer » et en tirer toute la distance.";
  return `${cover}<br><br>${comp}`;
}

function renderResults(r, registre) {
  let cards = "";
  if (r.conflit) {
    cards += carte("Votre balle idéale — pour votre jeu actuel", "lead", r.ideale, registre, true);
    cards += carte("Votre référence contrôle", "", r.alternative, registre, false,
      `<p class="aspiration">Si vous voulez faire évoluer votre jeu vers une balle qui mord le green, c'est la direction à viser — l'aspiration, quand vos approches lèveront davantage.</p>`);
  } else {
    cards += carte("Votre balle idéale", "lead", r.ideale, registre, true);
    cards += carte("Une belle alternative", "", r.alternative, registre, false);
  }

  if (r.optionA) {
    cards += `<div class="option-a"><div class="role" style="margin-bottom:8px"><span class="pip" style="width:8px;height:8px;background:var(--signal);display:inline-block"></span>Le choix malin</div>
      <p style="margin:0">Votre balle idéale est <strong>déjà le meilleur rapport qualité-prix du marché</strong>. Inutile de chercher moins cher : vous l'avez.</p></div>`;
  } else if (r.malin) {
    cards += carte("Le choix malin", "", r.malin, registre, false);
  }

  return `
    <div class="result-head wrap">
      <div class="kicker"><span class="pip"></span>Votre recommandation</div>
      <h1 style="margin-top:12px">Vos balles, choisies sans parti pris.</h1>
      <p class="muet">D'après vos réponses, parmi les 57 modèles du catalogue. Aucune marque ne nous rémunère.</p>
    </div>
    <div class="wrap"><div class="cards">${cards}</div>

      <div class="aller-plus-loin">
        <div class="kicker"><span class="pip"></span>Pour ne rien oublier</div>
        <h2 style="margin-top:12px">Recevez vos fiches détaillées par e-mail</h2>
        <p class="muet">Les deux registres de lecture, l'encadré « comprendre votre balle » et mes conseils pour l'adopter durablement. Gratuit, sans engagement.</p>
        <div id="email-slot"></div>
      </div>

      <div class="aller-plus-loin">
        <p class="muet" style="font-size:14px">Pourquoi ces balles et pas une autre ? <a href="educatif.html" style="color:var(--signal)">Comprendre comment la balle change votre jeu →</a></p>
        <div style="margin-top:18px"><button class="btn btn-ghost" id="refaire">↺ Refaire le test</button></div>
      </div>
    </div>`;
}

// Expose le profil pour le module e-mail (capture contextuelle de la reco).
window.__MBG__ = { get profil() { return { ...profil }; }, recommander, BALLES };

// Démarrage
showQuestion("q1");
