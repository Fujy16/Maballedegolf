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
//   BREVO_API_KEY          (secret) clé API v3 Brevo
//   BREVO_LIST_ID          identifiant numérique de la liste (DOI)
//   BREVO_DOI_TEMPLATE_ID  identifiant du modèle d'e-mail de confirmation (double opt-in)
//   BREVO_REDIRECT_URL     page d'atterrissage après confirmation
//                          (ex. https://maballedegolf.vercel.app/merci.html)
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
  if (!BREVO_API_KEY || !BREVO_LIST_ID || !BREVO_DOI_TEMPLATE_ID || !BREVO_REDIRECT_URL) {
    console.error("[subscribe] variables d'environnement Brevo manquantes");
    return res.status(500).json({ error: "Service non configuré" });
  }

  try {
    const r = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        includeListIds: [Number(BREVO_LIST_ID)],
        templateId: Number(BREVO_DOI_TEMPLATE_ID),
        redirectionUrl: BREVO_REDIRECT_URL,
        attributes: { SOURCE: "maballedegolf", RECO: reco.join(",") },
        updateEnabled: true,
      }),
    });

    if (r.ok) return res.status(200).json({ ok: true });

    // Brevo renvoie parfois une erreur "contact déjà inscrit" : on la traite comme un succès doux.
    const data = await r.json().catch(() => ({}));
    if (data?.code === "duplicate_parameter") return res.status(200).json({ ok: true, already: true });

    console.error("[subscribe] Brevo a refusé :", r.status, data?.message);
    return res.status(502).json({ error: "Inscription impossible pour l'instant" });
  } catch (err) {
    console.error("[subscribe] erreur réseau", err);
    return res.status(502).json({ error: "Inscription impossible pour l'instant" });
  }
}
