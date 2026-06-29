// =============================================================================
// Ma Balle de Golf — Relais d'inscription Brevo (fonction serverless Vercel)
// =============================================================================
//
// Rôle : recevoir le formulaire du site et déclencher un DOUBLE OPT-IN Brevo,
// SANS jamais exposer la clé API (elle vit dans les variables d'environnement
// Vercel, côté serveur). Conforme RGPD : le contact n'est ajouté à la liste
// qu'après avoir cliqué le lien de confirmation reçu par e-mail.
//
// Variables d'environnement à définir dans Vercel (Settings → Environment Variables) :
//   BREVO_API_KEY          (secret, REQUIS) clé API v3 Brevo
//   BREVO_LIST_ID          (REQUIS) identifiant numérique de la liste de contacts
//   BREVO_DOI_TEMPLATE_ID  (OPTIONNEL) identifiant du modèle de confirmation double opt-in
//   BREVO_REDIRECT_URL     (OPTIONNEL) page d'atterrissage après confirmation
//                          (ex. https://maballedegolf.vercel.app/merci.html)
//
// MODE AUTOMATIQUE :
//   • Si BREVO_DOI_TEMPLATE_ID *et* BREVO_REDIRECT_URL sont présents -> DOUBLE opt-in.
//   • Sinon -> opt-in SIMPLE (contact ajouté directement à la liste).
//   Pour activer le double opt-in plus tard : ajouter ces 2 variables, c'est tout.
// =============================================================================

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  // Corps JSON (Vercel parse automatiquement, mais on sécurise)
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const email = (body?.email || "").trim();
  const consent = body?.consent === true;
  const reco = Array.isArray(body?.reco) ? body.reco.slice(0, 5) : [];

  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: "Adresse e-mail invalide" });
  if (!consent) return res.status(400).json({ error: "Consentement requis" });

  const { BREVO_API_KEY, BREVO_LIST_ID, BREVO_DOI_TEMPLATE_ID, BREVO_REDIRECT_URL } = process.env;
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.error("[subscribe] BREVO_API_KEY ou BREVO_LIST_ID manquant");
    return res.status(500).json({ error: "Service non configuré" });
  }

  const doubleOptin = Boolean(BREVO_DOI_TEMPLATE_ID && BREVO_REDIRECT_URL);
  const headers = {
    "api-key": BREVO_API_KEY,
    "content-type": "application/json",
    accept: "application/json",
  };
  const attributes = { SOURCE: "maballedegolf", RECO: reco.join(","), OPTIN: new Date().toISOString() };

  const url = doubleOptin
    ? "https://api.brevo.com/v3/contacts/doubleOptinConfirmation"
    : "https://api.brevo.com/v3/contacts";
  const payload = doubleOptin
    ? {
        email,
        includeListIds: [Number(BREVO_LIST_ID)],
        templateId: Number(BREVO_DOI_TEMPLATE_ID),
        redirectionUrl: BREVO_REDIRECT_URL,
        attributes,
      }
    : {
        email,
        listIds: [Number(BREVO_LIST_ID)],
        updateEnabled: true, // si le contact existe déjà, on le met à jour au lieu d'échouer
        attributes,
      };

  try {
    const r = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });

    // 2xx = succès (201 créé, 204 mis à jour, 200/2xx DOI envoyé)
    if (r.ok || r.status === 204) return res.status(200).json({ ok: true, mode: doubleOptin ? "doi" : "simple" });

    const data = await r.json().catch(() => ({}));
    if (data?.code === "duplicate_parameter") return res.status(200).json({ ok: true, already: true });

    console.error("[subscribe] Brevo a refusé :", r.status, data?.message);
    return res.status(502).json({ error: "Inscription impossible pour l'instant" });
  } catch (err) {
    console.error("[subscribe] erreur réseau", err);
    return res.status(502).json({ error: "Inscription impossible pour l'instant" });
  }
}
