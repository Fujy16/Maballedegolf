// =============================================================================
// Ma Balle de Golf — Configuration (à remplir, isolée du code)
// =============================================================================
//
// SÉCURITÉ : ne JAMAIS mettre de clé API Brevo en clair ici (le code est public).
// Deux options conformes pour un site statique :
//   (a) RELAIS serverless (recommandé) : une petite fonction (Netlify/Cloudflare/
//       Vercel) détient la clé API et relaie l'inscription en double opt-in.
//       -> renseigner `endpoint` avec l'URL du relais.
//   (b) FORMULAIRE hébergé Brevo (DOI) : on pointe vers l'action du formulaire
//       Brevo. -> renseigner `endpoint` avec l'URL d'action Brevo.
//
// Tant que `enabled = false`, le formulaire fonctionne en mode démonstration
// (aucune donnée envoyée, message de confirmation simulé).
// =============================================================================

export const EMAIL_CONFIG = {
  service: "brevo",
  enabled: false,
  endpoint: "",          // URL du relais serverless ou de l'action Brevo
  listId: null,          // identifiant de la liste DOI Brevo, si pertinent
  doubleOptIn: true,     // toujours true (conformité RGPD)
};

// Liens vers les offres d'Amaury — à remplir plus tard (page À propos, e-mails,
// encart « aller plus loin »). Laisser vide masque les liens correspondants.
export const PRODUITS = {
  coaching: "",   // ex. https://azurgolfcoaching.fr
  zone54: "",     // ex. centre indoor Zone 54
  guides: "",     // ex. guide PDF
};

export const SITE = {
  auteur: "Amaury Dumas-Jarousse",
  role: "Enseignant de golf indépendant",
  email: "",      // adresse de contact affichée (À propos / confidentialité)
};
