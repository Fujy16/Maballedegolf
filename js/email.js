// =============================================================================
// Ma Balle de Golf — Capture e-mail (RGPD), branchable Brevo
// Opt-in décoché par défaut · finalité explicite · lien confidentialité ·
// double opt-in · aucune donnée personnelle stockée côté client.
// =============================================================================

import { EMAIL_CONFIG } from "./config.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function initEmail(slot, reco, profil) {
  if (!slot) return;

  slot.innerHTML = `
    <form id="mbg-email-form" novalidate style="margin-top:18px;display:flex;flex-direction:column;gap:14px;max-width:520px">
      <label for="mbg-email" class="sr-only">Votre adresse e-mail</label>
      <input id="mbg-email" type="email" autocomplete="email" inputmode="email"
        placeholder="votre@email.fr" required
        style="font-family:var(--font-mono);font-size:16px;background:var(--charbon-2);color:var(--craie);border:0.5px solid var(--trait-fort);border-radius:8px;padding:15px 16px" />

      <label style="display:flex;gap:12px;align-items:flex-start;font-size:14px;color:var(--craie-muet);line-height:1.5;cursor:pointer">
        <input id="mbg-consent" type="checkbox" style="margin-top:3px;width:18px;height:18px;accent-color:var(--signal);flex:none" />
        <span>J'accepte de recevoir par e-mail mes fiches détaillées et les conseils d'Amaury Dumas-Jarousse pour bien choisir et adopter ma balle. Je peux me désinscrire à tout moment. <a href="confidentialite.html" style="color:var(--signal)">Politique de confidentialité</a>.</span>
      </label>

      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <button type="submit" class="btn btn-primary">Recevoir mes fiches</button>
        <span id="mbg-email-msg" role="status" aria-live="polite" style="font-size:14px"></span>
      </div>
    </form>`;

  const form = slot.querySelector("#mbg-email-form");
  const msg = slot.querySelector("#mbg-email-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = slot.querySelector("#mbg-email").value.trim();
    const consent = slot.querySelector("#mbg-consent").checked;

    if (!EMAIL_RE.test(email)) { return setMsg(msg, "Adresse e-mail invalide.", "err"); }
    if (!consent) { return setMsg(msg, "Merci de cocher la case de consentement.", "err"); }

    // Contexte de la reco (noms des balles) — utile pour personnaliser l'e-mail.
    // Aucune donnée personnelle n'est stockée côté client.
    const payload = {
      email,
      consent: true,
      consent_text: "fiches détaillées + conseils, désinscription possible",
      double_opt_in: EMAIL_CONFIG.doubleOptIn,
      ts: new Date().toISOString(),
      reco: reco ? [reco.ideale, reco.alternative, reco.malin].filter(Boolean).map((b) => b.id) : [],
      conflit: reco ? Boolean(reco.conflit) : false,
      registre: profil && profil.niveau === "conf" ? "confirme" : "debutant",
      profil: profil || {},
    };

    setMsg(msg, "Envoi…", "info");
    try {
      let mode = "simple";
      if (EMAIL_CONFIG.enabled && EMAIL_CONFIG.endpoint) {
        const res = await fetch(EMAIL_CONFIG.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json().catch(() => ({}));
        if (data.mode) mode = data.mode;
      } else {
        console.warn("[email] Brevo non connecté (EMAIL_CONFIG.enabled=false) — mode démonstration.", payload);
        await new Promise((r) => setTimeout(r, 400));
      }
      form.querySelector("button").disabled = true;
      setMsg(
        msg,
        mode === "doi"
          ? "✓ Vérifiez votre boîte mail pour confirmer votre inscription."
          : "✓ C'est noté, merci ! Vos fiches détaillées arrivent par e-mail.",
        "ok"
      );
    } catch (err) {
      console.error("[email] échec de l'envoi", err);
      setMsg(msg, "Envoi impossible pour l'instant. Réessayez plus tard.", "err");
    }
  });
}

function setMsg(el, text, kind) {
  el.textContent = text;
  el.style.color = kind === "ok" ? "var(--vert-ok)" : kind === "err" ? "var(--signal)" : "var(--craie-muet)";
}
