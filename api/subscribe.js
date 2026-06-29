// =============================================================================
// Ma Balle de Golf — Relais Brevo (fonction serverless Vercel)
// 1) ajoute le contact à la liste  2) envoie l'e-mail personnalisé des fiches
// =============================================================================
//
// Variables d'environnement Vercel (Settings → Environment Variables) :
//   BREVO_API_KEY          (secret, REQUIS) clé API v3 Brevo
//   BREVO_LIST_ID          (REQUIS) identifiant numérique de la liste
//   BREVO_SENDER_EMAIL     (REQUIS pour l'envoi) expéditeur VÉRIFIÉ dans Brevo
//   BREVO_SENDER_NAME      (optionnel) nom affiché de l'expéditeur
//   BREVO_DOI_TEMPLATE_ID  (optionnel) -> active le double opt-in si présent
//   BREVO_REDIRECT_URL     (optionnel) -> idem
//
// Réutilise les 57 fiches déjà rédigées (data/fiches.js + data/balles.js).
// =============================================================================

import { CATALOGUE, PRIX_SYMBOLE } from "../data/balles.js";
import { FICHES } from "../data/fiches.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BY_ID = Object.fromEntries(CATALOGUE.map((b) => [b.id, b]));
const SITE_URL = "https://www.maballedegolf.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const email = (body?.email || "").trim();
  const consent = body?.consent === true;
  const recoIds = Array.isArray(body?.reco) ? body.reco.slice(0, 3) : [];
  const conflit = body?.conflit === true;
  const registre = body?.registre === "confirme" ? "confirme" : "debutant";

  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: "Adresse e-mail invalide" });
  if (!consent) return res.status(400).json({ error: "Consentement requis" });

  const {
    BREVO_API_KEY, BREVO_LIST_ID, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME,
    BREVO_DOI_TEMPLATE_ID, BREVO_REDIRECT_URL,
  } = process.env;

  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.error("[subscribe] BREVO_API_KEY ou BREVO_LIST_ID manquant");
    return res.status(500).json({ error: "Service non configuré" });
  }

  const headers = { "api-key": BREVO_API_KEY, "content-type": "application/json", accept: "application/json" };
  const attributes = { SOURCE: "maballedegolf", RECO: recoIds.join(","), OPTIN: new Date().toISOString() };
  const doubleOptin = Boolean(BREVO_DOI_TEMPLATE_ID && BREVO_REDIRECT_URL);

  // --- 1) Ajout du contact (ou déclenchement du double opt-in) ---------------
  try {
    const url = doubleOptin
      ? "https://api.brevo.com/v3/contacts/doubleOptinConfirmation"
      : "https://api.brevo.com/v3/contacts";
    const payload = doubleOptin
      ? { email, includeListIds: [Number(BREVO_LIST_ID)], templateId: Number(BREVO_DOI_TEMPLATE_ID), redirectionUrl: BREVO_REDIRECT_URL, attributes }
      : { email, listIds: [Number(BREVO_LIST_ID)], updateEnabled: true, attributes };

    const r = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });
    if (!r.ok && r.status !== 204) {
      const data = await r.json().catch(() => ({}));
      if (data?.code !== "duplicate_parameter") {
        console.error("[subscribe] contact refusé :", r.status, data?.message);
        return res.status(502).json({ error: "Inscription impossible pour l'instant" });
      }
    }
  } catch (err) {
    console.error("[subscribe] erreur réseau (contact)", err);
    return res.status(502).json({ error: "Inscription impossible pour l'instant" });
  }

  // En double opt-in, l'e-mail des fiches sera envoyé APRÈS confirmation (à câbler
  // côté automatisation Brevo). En opt-in simple, on l'envoie tout de suite.
  if (doubleOptin) return res.status(200).json({ ok: true, mode: "doi" });

  // --- 2) Envoi de l'e-mail personnalisé des fiches --------------------------
  let emailSent = false;
  if (BREVO_SENDER_EMAIL) {
    try {
      const html = emailHtml(recoIds, registre, conflit);
      const r = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers,
        body: JSON.stringify({
          sender: { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME || "Ma Balle de Golf" },
          to: [{ email }],
          subject: "Vos balles recommandées — Ma Balle de Golf",
          htmlContent: html,
        }),
      });
      emailSent = r.ok;
      if (!r.ok) {
        const data = await r.json().catch(() => ({}));
        console.error("[subscribe] envoi e-mail refusé :", r.status, data?.message);
      }
    } catch (err) {
      console.error("[subscribe] erreur réseau (e-mail)", err);
    }
  } else {
    console.warn("[subscribe] BREVO_SENDER_EMAIL absent — contact ajouté mais e-mail non envoyé");
  }

  return res.status(200).json({ ok: true, mode: "simple", emailSent });
}

// --- Construction de l'e-mail HTML (thème clair, compatible messageries) -----

function paras(txt) {
  return txt
    .split("\n\n")
    .map((p) => `<p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#2b2b28">${p}</p>`)
    .join("");
}

function balleSection(role, b, registre) {
  const annee = b.annee ? `${b.annee} · ` : "";
  const meta = `${annee}${b.coverLabel} · ${b.construction} couches · ${PRIX_SYMBOLE[b.prix]}`;
  const fiche = FICHES[b.id];
  const corps = fiche && fiche[registre] ? paras(fiche[registre]) : `<p style="margin:0 0 12px;font-size:15px;color:#2b2b28">${b.marque} ${b.nom}.</p>`;
  const encadre = fiche && fiche.encadre
    ? `<div style="margin-top:10px;background:#f4f2ec;border-radius:8px;padding:12px 14px;font-size:13.5px;line-height:1.55;color:#4a4a45"><span style="color:#C2431F;font-weight:bold;text-transform:uppercase;font-size:11px;letter-spacing:.06em">Comprendre votre balle</span><br>${fiche.encadre}</div>`
    : "";
  return `
  <tr><td style="padding:0 24px 22px">
    <div style="border-left:3px solid #E8552D;padding-left:16px">
      <div style="color:#C2431F;font-weight:bold;text-transform:uppercase;font-size:11px;letter-spacing:.08em">${role}</div>
      <div style="font-size:21px;font-weight:bold;color:#161719;margin:4px 0 2px">${b.marque} ${b.nom}</div>
      <div style="font-size:12.5px;color:#8a8a82;margin-bottom:10px;font-family:'Courier New',monospace">${meta}</div>
      ${corps}
      ${encadre}
    </div>
  </td></tr>`;
}

function emailHtml(recoIds, registre, conflit) {
  const roles = ["Votre balle idéale", conflit ? "Votre référence contrôle" : "Une belle alternative", "Le choix malin"];
  let sections = "";
  recoIds.forEach((id, i) => {
    const b = BY_ID[id];
    if (b) sections += balleSection(roles[i] || "Une balle pour vous", b, registre);
  });
  if (!sections) {
    sections = `<tr><td style="padding:0 24px 22px;font-size:15px;color:#2b2b28">Merci ! Refaites le test quand vous voulez pour obtenir vos recommandations.</td></tr>`;
  }

  return `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#eceae3;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eceae3;padding:24px 0">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden">
  <tr><td style="background:#161719;padding:22px 24px">
    <div style="color:#E8552D;font-weight:bold;font-size:12px;letter-spacing:.12em;text-transform:uppercase">Ma Balle de Golf</div>
    <div style="color:#9d9d95;font-size:12px;margin-top:4px;font-family:'Courier New',monospace">par Amaury Dumas-Jarousse · enseignant indépendant</div>
  </td></tr>
  <tr><td style="padding:24px 24px 6px">
    <h1 style="margin:0 0 8px;font-size:23px;color:#161719">Voici vos balles, choisies sans parti pris.</h1>
    <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#6e6e68">D'après vos réponses au test, parmi 57 modèles de 11 marques. Aucune marque ne nous rémunère.</p>
  </td></tr>
  ${sections}
  <tr><td style="padding:6px 24px 22px">
    <a href="${SITE_URL}/test.html" style="display:inline-block;background:#E8552D;color:#161719;font-weight:bold;text-decoration:none;padding:13px 22px;border-radius:8px;font-size:15px">Refaire le test</a>
    &nbsp;&nbsp;<a href="${SITE_URL}/educatif.html" style="color:#C2431F;font-size:14px">Pourquoi la balle compte ?</a>
  </td></tr>
  <tr><td style="background:#f4f2ec;padding:18px 24px;font-size:12px;line-height:1.6;color:#8a8a82">
    Envie d'aller plus loin ? Retrouvez Amaury à <a href="https://www.zone54.fr" style="color:#C2431F">Zone 54</a>, son centre de golf indoor à Mougins.<br><br>
    Vous recevez cet e-mail car vous avez demandé vos fiches sur maballedegolf.com.
    Pour ne plus en recevoir, écrivez à <a href="mailto:amaurydumasjarousse@azurgolfcoaching.fr" style="color:#C2431F">amaurydumasjarousse@azurgolfcoaching.fr</a>.<br>
    © Ma Balle de Golf — Amaury Dumas-Jarousse, enseignant de golf indépendant.
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}
