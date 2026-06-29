// =============================================================================
// Ma Balle de Golf — Menu mobile (burger)
// Injecte un bouton dans le header et ouvre/ferme la navigation sur petit écran.
// Aucune dépendance ; partagé par toutes les pages.
// =============================================================================

(function () {
  const header = document.querySelector(".site-header");
  const nav = header && header.querySelector(".nav");
  if (!header || !nav) return;

  if (!nav.id) nav.id = "site-nav";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "nav-toggle";
  btn.setAttribute("aria-label", "Ouvrir le menu");
  btn.setAttribute("aria-controls", nav.id);
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = "<span></span><span></span><span></span>";

  // Placé après la nav dans le .wrap pour s'aligner à droite.
  nav.parentNode.insertBefore(btn, nav.nextSibling);

  function setOpen(open) {
    header.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  }

  btn.addEventListener("click", () => setOpen(!header.classList.contains("nav-open")));

  // Fermer après un clic sur un lien, sur Échap, ou en cliquant ailleurs.
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  document.addEventListener("click", (e) => {
    if (header.classList.contains("nav-open") && !header.contains(e.target)) setOpen(false);
  });
})();
