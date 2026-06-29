# Ma Balle de Golf

Outil de fitting de balle de golf **indépendant et multimarque**. Un questionnaire
de deux minutes recommande, parmi 57 modèles de 11 marques, la balle idéale du
joueur, une alternative et un choix malin — sans parti pris de marque.

Créé par **Amaury Dumas-Jarousse**, enseignant de golf indépendant.

## Stack

Site **statique** : HTML + CSS sur-mesure + JavaScript vanilla (modules ES).
Aucune étape de build. Hébergeable tel quel (Vercel, GitHub Pages…).

## Structure

```
index.html              Accueil + sas éducatif
test.html               Questionnaire + écran de résultat
educatif.html           « Est-ce que la balle compte ? » (signé)
a-propos.html           À propos
confidentialite.html    Politique de confidentialité (RGPD)
css/styles.css          Design system « Le Labo »
js/moteur.js            Moteur de recommandation (scoring)
js/questionnaire.js     Parcours du test + rendu des résultats
js/email.js             Capture e-mail (RGPD), branchable Brevo
js/config.js            Configuration isolée (clés/liens à remplir)
data/balles.js          Catalogue des 57 balles
data/fiches.js          Fiches rédigées (2 registres + encadré)
tools/verify_moteur.js  Vérification du moteur (npm run verify, nécessite Node)
```

## Vérifier le moteur

```
npm run verify
```
Rejoue les 6 profils types et confirme la fidélité du portage.
