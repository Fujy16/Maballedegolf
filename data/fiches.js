// =============================================================================
// Ma Balle de Golf — Fiches rédigées (deux registres + encadré vocabulaire)
// =============================================================================
//
// Indexées par `id` de balle (cf. data/balles.js). Fusionnées au catalogue au
// chargement par js/moteur.js (chaque balle reçoit une clé `fiche`).
//
// Patron (cf. ma-balle-de-golf-redaction.md) :
//   debutant : 3-4 phrases — conséquence d'abord, mécanisme simple, le « pourtant »,
//              synthèse. Zéro métrique brute, ton rassurant.
//   confirme : 4-6 phrases — problème de joueur → mécanisme → effets (chiffrés SI
//              fiables) → contre-indication honnête.
//   encadre  : { titre, texte } — 1-2 termes techniques de CETTE balle, définis.
//
// Rédaction progressive : on valide le ton sur les 5 premières (les plus
// recommandées), puis on déroule. Une balle sans fiche affiche un texte neutre.
// =============================================================================

export const FICHES = {
  // --- 1. Callaway Supersoft (ionomer, €, distance/tolérance, vitesse modérée) ---
  "callaway-supersoft": {
    debutant:
      "Vous cherchez de la distance sans vous compliquer la vie, et une balle facile à lever. La Supersoft est l'une des balles les plus douces du marché : son cœur très tendre se comprime même à vitesse modérée, donc vous ne laissez pas de mètres au sol.\n\n" +
      "Elle part haut, plutôt droit, et atténue la courbe de vos coups un peu décentrés. En clair : une balle indulgente, agréable au toucher, à un prix très raisonnable.",
    confirme:
      "Si votre vitesse est modérée et que vous jouez surtout en faisant rouler vos approches, une balle tour serait du gâchis. La Supersoft adresse exactement ce profil : un noyau à très basse compression (≈ 38) qui se comprime sans effort, pour un transfert d'énergie maximal à vitesse réduite.\n\n" +
      "L'enveloppe ionomer privilégie un vol haut, peu d'effet latéral et un comportement prévisible au sol. La contrepartie est assumée : peu de mordant sur les wedges. Si vous cherchez à faire arrêter la balle net près du drapeau, ce n'est pas elle — regardez plutôt vers une uréthane souple (Chrome Soft, Q-Star Tour).",
    encadre:
      "<strong>Compression</strong> : la dureté du cœur de la balle. Très basse ici (≈ 38), elle « s'écrase » facilement même sans taper fort — c'est ce qui vous rend la distance que les balles trop dures vous coûtent.",
  },

  // --- 2. Inesis Tour 900 (uréthane, €, contrôle, vitesse soutenue) ---
  "inesis-tour-900": {
    debutant:
      "C'est la bonne surprise du catalogue : une vraie balle de joueur, à enveloppe haut de gamme, vendue au prix d'une balle d'entrée de gamme. Elle accroche le green et s'arrête sur vos approches, tout en gardant une trajectoire propre sur les longs coups.\n\n" +
      "Si vous commencez à faire mordre vos balles près du drapeau, elle vous le rendra — sans faire mal au portefeuille.",
    confirme:
      "La Tour 900 est l'argument même d'un fitting indépendant : une uréthane 3 couches, compression ≈ 90, qui offre l'essentiel d'une balle tour pour une fraction du prix. Le mordant au green est réel, le vol reste maîtrisé, et son centre de gravité se situe sur une vitesse soutenue (V3).\n\n" +
      "Réserve honnête : la finition et la régularité de fabrication d'une Pro V1 restent un cran au-dessus, et à très haute vitesse une balle plus ferme (Tour B X, Chrome Tour X) tiendra mieux le vent. Mais à ce tarif, le rapport performance-prix n'a tout simplement pas d'équivalent.",
    encadre:
      "<strong>Uréthane</strong> : l'enveloppe tendre des balles de joueur, qui « accroche » sur les rainures des wedges et fait arrêter la balle au green. La trouver à ce prix est rare — c'est tout l'intérêt de la Tour 900.",
  },

  // --- 3. Titleist Tour Soft (ionomer, €€, polyvalente, vitesse modérée à soutenue) ---
  "titleist-tour-soft": {
    debutant:
      "Une balle qui vise le juste milieu, sans rien sacrifier. Douce au toucher, elle part facilement et reste régulière, aussi bien sur les longs coups qu'autour du green. Sa grande enveloppe extérieure aide à garder vos coups droits.\n\n" +
      "Un excellent compromis si vous ne voulez ni la balle la plus spécialisée, ni la plus chère.",
    confirme:
      "La Tour Soft occupe le créneau polyvalent : ionomer 2 couches, compression ≈ 70, avec une enveloppe particulièrement fine qui augmente le contact et donne un peu plus de mordant qu'une simple balle de distance. Vol moyen, sensation douce, comportement prévisible.\n\n" +
      "Idéale pour une vitesse modérée à soutenue (V2-V3) qui veut un bon équilibre sans payer une uréthane. Contre-indication : si vous attaquez les drapeaux en cherchant l'arrêt net, l'ionomer plafonnera — une Tour Speed ou une Q-Star Tour vous donnera plus d'effet au green.",
    encadre:
      "<strong>Ionomer (Surlyn)</strong> : une enveloppe résistante et prévisible, plus durable que l'uréthane mais avec moins de mordant. Le bon choix quand on privilégie la régularité et le prix plutôt que l'effet maximal.",
  },

  // --- 4. Callaway Chrome Tour X (uréthane, €€€, distance perçante, vitesse rapide) ---
  "callaway-chrome-tour-x": {
    debutant:
      "Une balle de joueur rapide qui cherche de la distance et un vol perçant. Elle part un peu plus bas et plus tendu, traverse mieux le vent et déroule au sol — tout en gardant, grâce à son enveloppe haut de gamme, la capacité de s'arrêter sur le green.\n\n" +
      "Réservée aux swings rapides : c'est cette vitesse qui lui permet d'exprimer tout son potentiel.",
    confirme:
      "Si vous produisez beaucoup de vitesse et cherchez un vol tendu sans renoncer au contrôle, la Chrome Tour X vise ce profil. Construction 4 couches, compression haute, manteau ferme : l'effet au driver est contenu (vol pénétrant, anti-ballon, davantage de déroulé), tandis que l'enveloppe uréthane préserve un mordant élevé sur les wedges.\n\n" +
      "La sensation est ferme et réactive. Réserve : il faut une vitesse capable de comprimer ce noyau (V4). En dessous, le bénéfice disparaît, et une balle plus souple — Chrome Soft ou Tour B RX — sera plus juste.",
    encadre:
      "<strong>Effet au driver ≠ effet au green</strong> : une vraie balle tour génère peu d'effet sur les longs coups (vol tendu, distance) mais beaucoup près du green (elle s'arrête). La Chrome Tour X pousse cette logique au maximum côté distance.",
  },

  // --- 5. Bridgestone Tour B X (uréthane, €€€, distance perçante, vitesse rapide) ---
  "bridgestone-tour-b-x": {
    debutant:
      "Vous cherchez de la distance sans renoncer au green. Cette balle part plus tendue : elle perce le vent, déroule au sol, et vos coups un peu décentrés partent moins de travers.\n\n" +
      "Et pourtant, grâce à son enveloppe haut de gamme, elle s'arrête sur le green là où une simple balle de distance filerait derrière le drapeau. En clair : les mètres d'une balle de distance, le toucher d'une balle de joueur.",
    confirme:
      "Si vous produisez trop d'effet au driver — une balle qui grimpe et décroche en fin de vol — la Tour B X s'attaque directement au problème. Sa construction multicouche à manteau ferme réduit l'effet sur les longs coups : le vol s'aplatit, le sommet de trajectoire descend, la balle perce mieux face au vent et déroule davantage.\n\n" +
      "Le défaut habituel d'une balle peu spinnante, c'est la perte de mordant au green ; ici, l'enveloppe uréthane le compense — l'effet sur les wedges reste élevé, avec un angle de descente suffisant pour tenir le green sur les longs fers. Réserve : il faut une vitesse capable de comprimer le noyau (compression haute, V4). En dessous, une balle plus souple comme la Tour B RX sera plus juste.",
    encadre:
      "<strong>Le sommet de la trajectoire</strong> (l'« apex ») : le point le plus haut du vol. Une balle peu spinnante au driver l'abaisse — d'où un vol plus perçant, qui résiste mieux au vent et déroule davantage au sol.",
  },

  // ===================== TITLEIST =====================
  "titleist-pro-v1": {
    debutant:
      "La référence, tout simplement. Une balle complète qui ne sacrifie rien : de la distance sur les longs coups, et surtout un arrêt franc sur le green. Si vous frappez assez vite pour l'exploiter, c'est une valeur sûre qui fait bien tout, partout.\n\nC'est la balle que jouent énormément de joueurs de bon niveau — et ce n'est pas un hasard.",
    confirme:
      "Le mètre-étalon du segment tour. Trois couches, enveloppe uréthane, compression ≈ 87 : un équilibre rare entre vol pénétrant au driver et mordant élevé sur les wedges, avec une trajectoire moyenne très stable. Sa régularité de fabrication est sa vraie signature.\n\nRéserve : à vitesse modérée (sous ~95 mph) elle reste jouable, mais vous n'en tirerez pas tout — une Pro V1 demande de la vitesse pour comprimer le noyau. Pour plus de hauteur et d'effet, voir la Pro V1x ; pour un vol plus tendu, l'AVX.",
    encadre:
      "<strong>Balle multicouche</strong> : plusieurs enveloppes superposées, chacune avec un rôle (vitesse au driver, mordant au green). C'est ce qui permet à une même balle de bien se comporter sur tous les coups, contrairement à une balle deux pièces.",
  },
  "titleist-pro-v1x": {
    debutant:
      "La sœur plus puissante de la Pro V1 : elle vole plus haut et tourne un peu plus, pour les joueurs rapides qui veulent un maximum de hauteur et d'arrêt sur le green. Si votre balle reste basse malgré une bonne vitesse, elle vous fera décoller.\n\nRéservée aux swings rapides, qui sauront la « comprimer ».",
    confirme:
      "Quatre couches, compression ≈ 97, sensation ferme : la Pro V1x s'adresse aux vitesses élevées (V4) qui cherchent un vol plus haut et un effet supérieur, au driver comme au green. L'angle de descente plus prononcé fait tenir les longs fers sur des greens fermes.\n\nContre-indication nette : sous une vitesse élevée, ce noyau ferme ne se comprime pas — perte de vitesse de balle et sensation « caillou ». Préférez alors la Pro V1 ou la Chrome Soft.",
    encadre:
      "<strong>Le lancement (hauteur de décollage)</strong> : l'angle auquel la balle quitte la face. Un lancement haut comme ici aide à porter loin et à faire arrêter la balle — à condition d'avoir la vitesse pour ne pas la voir ballonner.",
  },
  "titleist-avx": {
    debutant:
      "Une balle de joueur qui privilégie la douceur et un vol plus tendu. Elle part un peu plus bas, file à travers le vent et déroule au sol, tout en gardant la capacité de s'arrêter sur le green. Très agréable au toucher, et plus accessible en vitesse que les balles tour les plus fermes.\n\nLe bon compromis si vous aimez les balles douces et les trajectoires pénétrantes.",
    confirme:
      "L'AVX est la tour ball « distance » de Titleist : compression ≈ 77, enveloppe uréthane, vol bas et effet réduit au driver (dspin bas) pour un maximum de déroulé et de pénétration, avec une sensation très douce. Le cover uréthane conserve un mordant correct au green.\n\nRéserve : si vous cherchez le maximum de hauteur et d'arrêt sur greens fermes, son vol bas vous limitera — orientez-vous vers Pro V1 ou Pro V1x. Elle brille pour les joueurs au vol naturellement haut ou par vent.",
    encadre:
      "<strong>L'effet au driver</strong> : trop d'effet fait grimper puis « décrocher » la balle en fin de vol. En le réduisant, l'AVX aplatit la trajectoire — plus de distance au sol, meilleure tenue dans le vent.",
  },
  "titleist-tour-speed": {
    debutant:
      "Une vraie enveloppe de balle de joueur, à un prix intermédiaire. Elle vous donne un avant-goût du mordant au green des balles haut de gamme, sans en payer le prix fort, et reste polyvalente sur le reste du parcours.\n\nUn bon pont entre les balles d'entrée de gamme et les balles tour.",
    confirme:
      "La Tour Speed propose une enveloppe uréthane dans la tranche €€ : davantage de mordant au green qu'une ionomer, pour une vitesse modérée à soutenue (V2-V3), avec un comportement neutre et stable. Une porte d'entrée sérieuse vers le contrôle.\n\nRéserve : elle n'a ni la finesse ni la régularité d'une Pro V1, et à très haute vitesse une vraie tour ball reprend l'avantage. Mais pour du mordant sans casser sa tirelire, c'est juste — à comparer avec la Q-Star Tour.",
    encadre:
      "<strong>Le manteau (couche intermédiaire)</strong> : la couche sous l'enveloppe. Plus ou moins ferme, elle module l'effet au driver et la sensation — c'est elle qui sépare une vraie balle de joueur d'une simple deux pièces.",
  },
  "titleist-velocity": {
    debutant:
      "Conçue pour une chose, et elle la fait bien : envoyer loin et droit. Elle part haut, garde une trajectoire rectiligne et limite les écarts à gauche-droite. Autour du green, elle privilégie le roulement plutôt que l'effet.\n\nUn choix franc si votre objectif est la distance et la droiture, pas l'arrêt sur le green.",
    confirme:
      "La Velocity est une ionomer orientée distance pure : effet réduit (spin green et dspin bas) pour un vol haut et tendu, peu d'effet latéral, donc des écarts contenus. Pensée pour les vitesses modérées à soutenues qui cherchent du rendement au driver.\n\nContre-indication : aucune prétention de mordant sur les wedges — si vous attaquez les drapeaux, c'est le mauvais outil. Pour de la distance avec un peu plus de toucher, la Tour Soft est plus polyvalente.",
    encadre:
      "<strong>L'effet latéral</strong> : l'effet de côté qui courbe la balle (slice, hook). Une balle à faible effet latéral comme la Velocity réduit l'amplitude de vos courbes — vos coups ratés partent moins loin dans les arbres.",
  },
  "titleist-trufeel": {
    debutant:
      "La plus douce des Titleist, à prix doux elle aussi. Très agréable à l'impact, facile à lever, taillée pour la distance et la régularité aux vitesses tranquilles. Autour du green, elle roule proprement.\n\nUn excellent point de départ pour une balle confortable sans se ruiner.",
    confirme:
      "La TruFeel mise sur une basse compression et une sensation très douce, enveloppe ionomer : transfert d'énergie facile à vitesse modérée, vol moyen, peu d'effet. C'est une balle deux couches de distance/feel, pas de contrôle.\n\nRéserve : le mordant au green est limité. Pour qui roule ses approches, c'est sans importance ; pour faire mordre, il faut passer à une uréthane (Tour Speed, AVX).",
    encadre:
      "<strong>La basse compression</strong> : un cœur tendre qui s'écrase sans forcer. Moins vous tapez vite, plus elle vous aide à conserver votre vitesse de balle — donc votre distance.",
  },

  // ===================== CALLAWAY =====================
  "callaway-chrome-tour": {
    debutant:
      "Le haut de gamme polyvalent de Callaway : distance et arrêt sur le green réunis, pour les joueurs qui frappent assez vite. Une balle complète, à la sensation maîtrisée, qui rivalise avec les meilleures.\n\nSi vous hésitez avec une Pro V1, c'est sa concurrente directe.",
    confirme:
      "La Chrome Tour est la tour ball équilibrée de Callaway : quatre couches, compression moyenne-haute, vol moyen, effet élevé au green. Elle vise les vitesses soutenues à rapides (V3-V4) avec un compromis distance/contrôle très abouti et une sensation neutre.\n\nRéserve : comme toute balle de ce calibre, elle demande de la vitesse pour s'exprimer. Sous ~95 mph, la Chrome Soft, plus souple et plus haute, sera plus indulgente.",
    encadre:
      "<strong>Le nombre de couches</strong> : ici quatre. Chacune cible un coup (le noyau pour la vitesse au driver, l'enveloppe pour le mordant au green). Plus il y en a, plus la balle peut être « spécialisée » sur chaque type de coup.",
  },
  "callaway-chrome-soft": {
    debutant:
      "Le contrôle premium, en version souple et facile à lever. Elle part haut, s'arrête sur le green, et reste agréable même si vous ne frappez pas très fort. Une balle de joueur accessible à des vitesses modérées.\n\nL'arrêt sur le green sans exiger un swing de compétiteur.",
    confirme:
      "La Chrome Soft apporte le mordant uréthane à une compression basse (≈ 72) : vol haut et sensation douce, taillés pour les vitesses modérées à soutenues (V2-V3) qui veulent du contrôle sans noyau ferme. C'est la tour ball « confort ».\n\nRéserve : à très haute vitesse, elle peut manquer de pénétration et de fermeté — les joueurs rapides préféreront Chrome Tour ou Chrome Tour X.",
    encadre:
      "<strong>Le lancement haut</strong> : un vol naturellement haut aide à porter la balle et à la faire atterrir « molle » sur le green. Précieux pour qui peine à monter ses coups, à surveiller pour qui ballonne déjà.",
  },
  "callaway-erc-soft": {
    debutant:
      "Distance et douceur pour les swings tranquilles. Son enveloppe particulière lui donne un peu plus de toucher qu'une simple balle de distance, tout en restant facile à lever et longue. Un bon compromis pour les vitesses modérées.\n\nDe la distance, sans la dureté.",
    confirme:
      "L'ERC Soft combine une enveloppe hybride (entre ionomer et uréthane) à une basse compression : objectif distance et lancement haut pour les vitesses lentes à modérées (V1-V2), avec un soupçon de mordant en plus qu'une ionomer classique. Profil distance-polyvalent.\n\nRéserve : ce n'est pas une vraie balle de contrôle — l'effet au green reste modéré. Pour réellement faire mordre, il faut une uréthane (Tour Response, Q-Star Tour).",
    encadre:
      "<strong>L'enveloppe hybride</strong> : un cover à mi-chemin entre l'ionomer (durable, distance) et l'uréthane (mordant). Un compromis pour gagner un peu de toucher sans renoncer à la robustesse.",
  },

  // ===================== TAYLORMADE =====================
  "taylormade-tp5": {
    debutant:
      "Une balle tour parmi les plus complètes, qui cherche à tout faire bien : distance, vol et arrêt sur le green. Sa construction très élaborée lui donne un toucher plein. Pour les joueurs qui frappent assez vite et veulent un haut niveau partout.\n\nLa polyvalence haut de gamme.",
    confirme:
      "La TP5 pousse la logique multicouche à cinq couches : un noyau progressif pour la vitesse au driver, une enveloppe uréthane pour le mordant, un vol moyen et une sensation neutre. Elle vise les vitesses soutenues à rapides (V3-V4) et brille par sa régularité tous coups confondus.\n\nRéserve : la TP5x, plus ferme et plus haute, conviendra mieux aux vitesses les plus élevées ; sous ~95 mph, la richesse de la construction s'exprime moins.",
    encadre:
      "<strong>Cinq couches</strong> : la construction la plus élaborée du catalogue. Chaque couche durcit progressivement vers l'extérieur, pour que la balle « réagisse » selon la force du coup — souple sur les wedges, explosive au driver.",
  },
  "taylormade-tp5x": {
    debutant:
      "La version plus puissante et plus haute de la TP5, pour les swings rapides. Elle décolle fort, tient le vent par la vitesse, et s'arrête sur le green. Sensation ferme et réactive.\n\nUn maximum de performance, réservé aux frappes véloces.",
    confirme:
      "La TP5x ajoute de la fermeté (compression ≈ 97) et de la hauteur à la recette TP5 : pensée pour les vitesses élevées (V4), elle offre plus de vitesse de balle et un angle de descente prononcé.\n\nContre-indication classique des balles fermes : sous une vitesse élevée, le noyau ne se comprime pas et le bénéfice s'évapore. Préférez alors la TP5 ou la Tour Response.",
    encadre:
      "<strong>La compression haute</strong> : un cœur ferme qui ne rend toute son énergie qu'à grande vitesse. Récompense les frappeurs rapides, pénalise les autres — d'où l'importance de connaître sa catégorie de vitesse.",
  },
  "taylormade-tour-response": {
    debutant:
      "Le mordant d'une balle de joueur, en plus doux et plus abordable. Elle s'arrête sur le green et reste agréable à l'impact, sans exiger une grosse vitesse. Une belle porte d'entrée vers le contrôle.\n\nDu toucher premium, à prix raisonnable.",
    confirme:
      "La Tour Response offre une enveloppe uréthane sur une compression basse-moyenne : du mordant au green pour les vitesses modérées à soutenues (V2-V3), une sensation douce et un comportement sans surprise, en €€.\n\nRéserve : moins de finesse et de vitesse de balle qu'une tour ball pleine ; à haute vitesse, elle plafonne. Mais pour découvrir le contrôle sans surpayer, c'est solide — à comparer avec la Q-Star Tour et la Tour Speed.",
    encadre:
      "<strong>Uréthane à basse compression</strong> : le mordant de l'uréthane sans noyau ferme. La combinaison idéale pour qui veut faire mordre la balle sans avoir la vitesse des compétiteurs.",
  },
  "taylormade-speedsoft": {
    debutant:
      "Très douce et facile, pensée pour la distance des swings tranquilles. Elle s'écrase sans effort à l'impact, part haut et reste droite. Un confort de jeu immédiat.\n\nPour qui veut une balle agréable et longue, sans se poser de questions.",
    confirme:
      "La SpeedSoft mise sur une compression très basse (< 50) et une sensation très douce, enveloppe ionomer : transfert d'énergie maximal à vitesse réduite (V1-V2), vol haut, peu d'effet. Profil distance-polyvalent orienté confort.\n\nRéserve : le mordant au green est modéré, sans plus. Si vous attaquez les drapeaux, il faut une uréthane ; si la distance et le feel priment, elle remplit parfaitement son rôle.",
    encadre:
      "<strong>La sensation à l'impact</strong> : la perception « douce » ou « ferme » au contact. Surtout une affaire de goût — pas un indicateur de performance, mais une balle qu'on aime sentir, on la rejoue plus volontiers.",
  },
  "taylormade-soft-response": {
    debutant:
      "Douce, longue et économique. Facile à lever, droite, agréable à l'impact, taillée pour les vitesses modérées qui visent la distance.\n\nUn très bon rapport plaisir-prix.",
    confirme:
      "La Soft Response est une ionomer à basse compression, vol haut et effet modéré, pour vitesses lentes à modérées (V1-V2) — un profil distance avec une sensation douce, dans la tranche €.\n\nRéserve : pas de prétention de contrôle au green. C'est une balle de distance/feel ; pour le mordant, voir une uréthane abordable.",
    encadre:
      "<strong>Balle deux à trois couches</strong> : moins « spécialisée » qu'une tour ball, mais plus durable et bien moins chère — souvent le bon calcul à vitesse modérée.",
  },
  "taylormade-distance-plus": {
    debutant:
      "Le nom dit tout : de la distance, simplement et pas cher. Elle part proprement, file droit et roule au sol. Autour du green, elle privilégie le roulement.\n\nLe choix malin si vous perdez des balles et visez surtout la distance.",
    confirme:
      "La Distance+ est une ionomer deux couches orientée rendement au driver : effet réduit (spin green et dspin bas), vol moyen, peu d'effet latéral, pour vitesses lentes à modérées. Robuste et économique.\n\nContre-indication : zéro mordant au green — assumé. Pour la distance la moins chère possible, c'est imbattable ; pour du toucher, regardez ailleurs.",
    encadre:
      "<strong>La durabilité du cover</strong> : l'enveloppe ionomer résiste mieux aux coups de wedge que l'uréthane. Une balle qui dure — argument réel quand on en perd ou qu'on les use vite.",
  },

  // ===================== BRIDGESTONE =====================
  "bridgestone-tour-b-xs": {
    debutant:
      "La balle du contrôle maximal pour les joueurs rapides : elle mord le green et s'arrête net, même sur les coups de loin. Si votre force, c'est le petit jeu et l'attaque de drapeaux, elle vous le rendra.\n\nLe maximum d'effet au green, pour les swings véloces.",
    confirme:
      "La Tour B XS est la sœur « contrôle » de la Tour B X : même calibre haute vitesse (V4), mais orientée effet maximal au green (spin très élevé), enveloppe uréthane mordante, sensation ferme. C'est une balle d'attaquant de drapeaux, jouée par plusieurs joueurs du circuit.\n\nContre-indication : il faut la vitesse pour la comprimer, et un petit jeu capable d'exploiter ce surcroît d'effet — sinon il est inutile. Pour plus de distance et de pénétration, la Tour B X.",
    encadre:
      "<strong>L'effet au green (le mordant)</strong> : la capacité de la balle à « accrocher » le green et à s'arrêter. Très élevé ici — mais il ne se voit que sur des coups qui font monter et stopper la balle, pas en rouletté.",
  },
  "bridgestone-tour-b-rx": {
    debutant:
      "La distance et la tenue d'une balle tour, calibrées pour les vitesses moyennes plutôt que pour les gros frappeurs. Vol propre, déroulé au sol, et un arrêt correct sur le green. La balle de joueur pour qui ne swingue pas à 110 mph.\n\nLe haut de gamme « distance » à votre portée.",
    confirme:
      "La Tour B RX reprend l'esprit de la Tour B X — vol tendu, effet réduit au driver, déroulé — mais sur une compression basse-moyenne pensée pour les vitesses sous ~105 mph (V2-V3). L'enveloppe uréthane préserve le mordant au green.\n\nRéserve : à très haute vitesse, elle manquera de fermeté face à la Tour B X. À vitesse modérée, c'est précisément là qu'elle prend l'avantage sur les balles trop dures.",
    encadre:
      "<strong>Le déroulé (roll-out)</strong> : la distance parcourue au sol après l'atterrissage. Un vol tendu et peu d'effet l'augmentent — des mètres gratuits, surtout sur sol ferme.",
  },
  "bridgestone-tour-b-rxs": {
    debutant:
      "La cousine « toucher » de la RX : le même calibre pour vitesses moyennes, mais avec plus de mordant au green et une sensation plus douce. Pour qui, sans frapper très fort, aime faire arrêter ses balles.\n\nDu contrôle premium, sans exiger une grosse vitesse.",
    confirme:
      "La Tour B RXS associe une compression basse-moyenne (vitesses sous ~105 mph) à un effet au green élevé et une sensation douce : c'est la balle de contrôle des joueurs modérés. Enveloppe uréthane mordante, vol moyen.\n\nRéserve : moins de déroulé et de pénétration que la RX, orientée distance. Choisissez selon votre priorité : RXS pour le mordant, RX pour la distance.",
    encadre:
      "<strong>Distance ou contrôle : l'arbitrage</strong> : à vitesse égale, une balle privilégie soit le déroulé (peu d'effet), soit le mordant (effet élevé). RX et RXS illustrent ce choix — d'où l'importance de savoir ce que vous attendez au green.",
  },
  "bridgestone-e12": {
    debutant:
      "Une balle de distance qui soigne aussi la droiture. Son dessin d'alvéoles particulier vise à stabiliser le vol. Longue, plutôt droite, agréable, à un prix intermédiaire.\n\nDe la distance qui ne part pas dans tous les sens.",
    confirme:
      "L'e12 Contact est une ionomer à vol haut et effet modéré, dont l'alvéolage spécifique cherche à améliorer le contact et la régularité de vol. Profil distance-polyvalent pour vitesses modérées à soutenues (V2-V3), en €€.\n\nRéserve : le mordant au green reste celui d'une ionomer — modéré. C'est une balle de distance bien née, pas une balle de contrôle.",
    encadre:
      "<strong>Les alvéoles (dimples)</strong> : les creux à la surface de la balle. Leur dessin gère la portance et la traînée — donc la hauteur et la stabilité du vol. Chaque marque a sa recette.",
  },
  "bridgestone-e6-soft": {
    debutant:
      "Douce, droite et économique. Elle part haut, file droit et roule au green. Pensée pour les vitesses tranquilles qui veulent du confort et de la distance sans se ruiner.\n\nSimple, agréable, efficace.",
    confirme:
      "L'e6 Soft est une ionomer deux couches à basse compression : sensation douce, vol haut, faible effet (latéral comme au green), pour vitesses lentes à modérées. Une balle de distance/droiture confortable.\n\nContre-indication : pas de mordant exploitable au green. Pour qui roule ses approches, parfait ; pour faire mordre, passez à une uréthane.",
    encadre:
      "<strong>La droiture</strong> : un faible effet latéral limite la courbe des coups ratés. Une balle « droite » ne corrige pas un swing, mais elle atténue l'amplitude de vos slices et hooks.",
  },

  // ===================== SRIXON =====================
  "srixon-z-star": {
    debutant:
      "Une balle tour à la sensation douce, complète et équilibrée. Distance correcte, et surtout un bel arrêt sur le green. Pour les joueurs qui frappent à bonne vitesse et veulent du contrôle sans dureté.\n\nUne tour ball réputée pour son toucher.",
    confirme:
      "La Z-Star est la tour ball équilibrée de Srixon : enveloppe uréthane, compression moyenne, vol moyen, effet élevé au green, taillée pour les vitesses soutenues (V3). Réputée pour sa douceur relative et son mordant.\n\nRéserve : les très gros frappeurs préféreront la Z-Star XV, plus ferme et plus longue. Sous ~90 mph, une Q-Star Tour, plus souple, sera plus indulgente.",
    encadre:
      "<strong>Le toucher (feel)</strong> : la sensation et le retour d'information à l'impact, surtout au putting et au petit jeu. Subjectif, mais une balle dont le toucher vous plaît inspire confiance autour du green.",
  },
  "srixon-z-star-xv": {
    debutant:
      "La version plus longue et plus haute de la Z-Star, pour les swings rapides. Elle décolle fort et garde le mordant au green. Sensation ferme.\n\nPlus de distance, sans renoncer à l'arrêt.",
    confirme:
      "La Z-Star XV ajoute de la fermeté (compression haute) et de la hauteur : pensée pour les vitesses élevées (V4), elle privilégie la vitesse de balle et un vol plus haut, tout en conservant un effet élevé au green grâce au cover uréthane.\n\nContre-indication : sous une vitesse élevée, ce noyau ferme pénalise. La Z-Star standard sera alors plus juste.",
    encadre:
      "<strong>La vitesse de balle</strong> : la vitesse à laquelle la balle quitte la face. Un noyau ferme bien comprimé la maximise — mais seulement si votre propre vitesse de swing est au rendez-vous.",
  },
  "srixon-z-star-diamond": {
    debutant:
      "La spécialiste de l'arrêt sur le green. Elle est pensée pour s'arrêter vite, même sur les coups de loin, pour les joueurs au bon petit jeu. Vol plutôt haut.\n\nPour qui vit autour du drapeau.",
    confirme:
      "La Z-Star Diamond pousse l'effet au green au maximum (spin très élevé, dspin haut), enveloppe uréthane, compression moyenne-haute, vol haut, pour vitesses soutenues à rapides (V3-V4). Une balle d'attaquant de drapeaux, dans la lignée des Pro V1x et Tour B XS.\n\nRéserve : ce surcroît d'effet ne sert qu'à un petit jeu capable de l'exploiter ; et l'effet élevé au driver peut coûter du déroulé. Pour plus de distance, voir la Z-Star ou une balle perçante.",
    encadre:
      "<strong>L'effet maximal au green</strong> : utile uniquement si vos approches montent et redescendent avec de l'angle. En rouletté, cet effet est invisible — d'où la question posée dans le test.",
  },
  "srixon-q-star-tour": {
    debutant:
      "Le mordant d'une balle de joueur, à prix contenu et pour des vitesses raisonnables. Elle s'arrête sur le green sans exiger un gros swing, et reste agréable. L'un des meilleurs rapports contrôle-prix du catalogue.\n\nUn vrai goût de balle tour, sans le tarif.",
    confirme:
      "La Q-Star Tour est une uréthane à compression basse-moyenne : du mordant au green pour les vitesses modérées à soutenues (V2-V3), une sensation neutre, en €€. Une alternative très crédible aux tour balls premium pour qui ne swingue pas vite.\n\nRéserve : pas la finesse ni la vitesse de balle d'une Z-Star à haute vitesse. Mais à vitesse modérée, l'écart se referme — un excellent choix « malin » vers le contrôle.",
    encadre:
      "<strong>L'uréthane abordable</strong> : longtemps réservé au premium, le cover uréthane se trouve désormais en milieu de gamme. C'est ce qui permet d'avoir du mordant au green sans payer 50 € la douzaine.",
  },
  "srixon-q-star": {
    debutant:
      "Une balle polyvalente et équilibrée, ni trop spécialisée ni trop chère. Sensation correcte, vol moyen, comportement régulier sur tout le parcours. Un bon couteau suisse.\n\nLe juste milieu Srixon.",
    confirme:
      "La Q-Star est une ionomer polyvalente : compression moyenne, vol moyen, effet modéré, pour une vitesse modérée (V2), profil équilibré. Une balle sans défaut marquant, pensée pour la constance.\n\nRéserve : le mordant plafonne, comme toute ionomer. Pour plus de contrôle, la Q-Star Tour, juste au-dessus, ajoute l'uréthane.",
    encadre:
      "<strong>La polyvalence</strong> : une balle qui ne sacrifie rien mais n'excelle nulle part. Le bon choix quand aucune facette de votre jeu ne domine — ou quand vous cherchez avant tout la régularité.",
  },
  "srixon-ad333": {
    debutant:
      "Une valeur sûre de l'entrée de gamme, longue et facile, qui a fait ses preuves depuis des années. Elle part haut, reste droite, avec un toucher correct pour son prix.\n\nUn grand classique du rapport qualité-prix.",
    confirme:
      "L'AD333 est une ionomer éprouvée à compression basse-moyenne : vol haut, effet modéré, peu d'effet latéral, pour vitesses lentes à modérées (V1-V2), profil distance-polyvalent en €. Réputée pour son équilibre distance/feel à ce tarif.\n\nRéserve : mordant au green limité. Pour du contrôle, il faut monter vers la Q-Star Tour ; mais en pur rapport qualité-prix, l'AD333 reste une référence.",
    encadre:
      "<strong>Le rapport qualité-prix</strong> : la performance obtenue par euro dépensé. Une balle « maligne » n'est pas la plus performante dans l'absolu — c'est celle qui vous en donne le plus pour ce que vous êtes prêt à mettre.",
  },
  "srixon-soft-feel": {
    debutant:
      "Douce, longue et abordable, comme son nom l'indique. Facile à lever, droite, agréable à l'impact, pour les vitesses tranquilles. Autour du green, elle roule proprement.\n\nUn confort de jeu à petit prix.",
    confirme:
      "La Soft Feel est une ionomer à basse compression (≈ 60) : sensation douce, vol haut, faible effet, pour vitesses lentes à modérées (V1-V2). Profil distance/feel, robuste et économique.\n\nContre-indication : pas de mordant exploitable. Une excellente balle de roulette et de distance ; pour faire mordre, voir une uréthane.",
    encadre:
      "<strong>Cœur tendre, vitesse modérée</strong> : à swing tranquille, un cœur souple se comprime mieux qu'un cœur ferme et restitue plus d'énergie. Le principe qui guide tout le bas du catalogue en compression.",
  },
  "srixon-ultisoft": {
    debutant:
      "L'une des balles les plus douces qui soient, pour les swings les plus tranquilles. Très facile à comprimer et à lever, confortable à l'impact, orientée distance.\n\nIdéale si vous cherchez avant tout de la souplesse.",
    confirme:
      "L'UltiSoft affiche une compression très basse (≈ 42) : pensée pour les vitesses lentes (V1), elle maximise le transfert d'énergie quand on ne frappe pas fort, vol haut, faible effet. Ionomer deux couches.\n\nContre-indication : aucune ambition de contrôle au green ; et un joueur rapide « écraserait » trop ce noyau, perdant en efficacité. C'est une balle de vitesse modérée, assumée.",
    encadre:
      "<strong>La compression très basse</strong> : sous 50, le cœur s'écrase au moindre impact. Parfait pour les swings lents ; contre-productif pour les frappeurs rapides, qui la sur-compriment et perdent en régularité.",
  },

  // ===================== WILSON =====================
  "wilson-staff-model": {
    debutant:
      "Une balle tour épurée, taillée pour les joueurs rapides qui veulent de la performance sans esbroufe. Distance, vol maîtrisé et arrêt sur le green. Sensation ferme.\n\nLe haut de gamme, sans le marketing.",
    confirme:
      "La Staff Model est une uréthane quatre couches à compression haute : vitesses élevées (V4), vol moyen, effet élevé au green, sensation ferme. Une vraie tour ball, souvent saluée pour son rapport performance-prix face aux ténors.\n\nContre-indication : il faut la vitesse pour la comprimer. Sous une vitesse élevée, orientez-vous vers des balles plus souples (Triad, Tour Response).",
    encadre:
      "<strong>La balle tour</strong> : la catégorie reine — enveloppe uréthane, plusieurs couches, pensée pour exploiter une grande vitesse. Performante entre toutes… à condition de pouvoir la faire travailler.",
  },
  "wilson-staff-model-x": {
    debutant:
      "La version plus haute et plus tournante de la Staff Model, pour les swings très rapides qui veulent un maximum de hauteur et d'arrêt. Sensation ferme et réactive.\n\nPour les frappeurs véloces en quête de contrôle aérien.",
    confirme:
      "La Staff Model X relève le vol et l'effet (dspin haut) sur une compression haute : vitesses élevées (V4), trajectoire haute, angle de descente prononcé, effet élevé au green. Pour faire stopper la balle de loin.\n\nContre-indication : l'effet élevé au driver coûte du déroulé, et le noyau ferme exige de la vitesse. Frappeurs cherchant la distance pure : préférez une balle perçante.",
    encadre:
      "<strong>L'angle de descente</strong> : la pente à laquelle la balle retombe. Plus il est prononcé (vol haut, effet élevé), plus la balle s'arrête vite — utile sur greens fermes, coûteux en déroulé.",
  },
  "wilson-triad": {
    debutant:
      "Une balle de joueur pensée pour la stabilité : trajectoires régulières et bon comportement partout, avec le mordant d'une enveloppe haut de gamme. Pour qui veut du contrôle sans la nervosité d'une balle de compétition.\n\nLe contrôle, version rassurante.",
    confirme:
      "La Triad est une uréthane à compression ≈ 86, orientée stabilité et tolérance : un noyau pensé pour réduire l'effet parasite au driver et régulariser le vol, avec un mordant correct au green. Profil polyvalent-contrôle pour vitesses soutenues (V3), en €€.\n\nRéserve : moins de finesse et de vitesse de balle qu'une tour ball pure. Mais pour un bon joueur qui veut de la régularité sans payer le premium, c'est pertinent.",
    encadre:
      "<strong>La tolérance</strong> : la capacité d'une balle à limiter les conséquences d'un coup imparfait. Elle ne masque pas une faute, mais elle en réduit l'amplitude — précieux quand la frappe n'est pas encore régulière.",
  },
  "wilson-duo-soft": {
    debutant:
      "La balle la plus douce du marché, ou presque. Incroyablement tendre à l'impact, facile à lever, longue pour les vitesses tranquilles. Si vous aimez les balles très souples, c'est l'extrême du genre.\n\nLe summum de la douceur.",
    confirme:
      "La Duo Soft revendique l'une des compressions les plus basses du marché (≈ 29-35) : pour les vitesses lentes (V1), un transfert d'énergie maximal sans forcer, vol haut, effet minimal. Ionomer deux couches, profil distance/feel.\n\nContre-indication : aucune ambition de contrôle ; et tout joueur un peu rapide la sur-comprime. C'est une balle de vitesse lente, parfaitement assumée.",
    encadre:
      "<strong>La balle la plus douce du marché</strong> : une compression sous 35 est un cas extrême. Bénéfice réel à très basse vitesse — mais inutile, voire contre-productif, dès que la vitesse monte.",
  },

  // ===================== VOLVIK =====================
  "volvik-condor": {
    debutant:
      "Une balle de joueur signée Volvik : du mordant au green et un comportement de balle tour, pour les vitesses soutenues. Pour qui veut du contrôle avec une marque qui sort des sentiers battus.\n\nLe contrôle, hors des grands noms habituels.",
    confirme:
      "La Condor est une uréthane trois couches à compression moyenne : vol moyen, effet élevé au green, vitesses soutenues (V3), sensation neutre. Une vraie tour ball, alternative crédible aux références plus connues.\n\nRéserve : disponibilité et régularité de gamme moins évidentes que chez les leaders. Mais techniquement, le profil tient face aux tour balls établies.",
    encadre:
      "<strong>Le choix indépendant</strong> : recommander une marque moins courante quand le profil technique le justifie, c'est tout l'intérêt d'un fitting sans parti pris — là où un outil de marque ne sortirait jamais de son catalogue.",
  },
  "volvik-condor-x": {
    debutant:
      "La version plus haute et plus puissante de la Condor, pour les swings rapides qui veulent de la hauteur et de l'arrêt. Une tour ball performante.\n\nPlus de vol, plus de mordant.",
    confirme:
      "La Condor X relève le lancement et la fermeté (compression moyenne-haute) : vitesses soutenues à rapides (V3-V4), vol haut, effet élevé au green. Profil contrôle pour frappeurs qui cherchent de la hauteur.\n\nContre-indication habituelle : la vitesse est nécessaire pour comprimer le noyau. Sous ~95 mph, la Condor standard sera plus juste.",
    encadre:
      "<strong>Le lancement haut</strong> : un vol naturellement haut maximise l'arrêt sur le green, à condition d'avoir la vitesse pour ne pas voir la balle ballonner par vent contraire.",
  },
  "volvik-s4": {
    debutant:
      "Une balle tour… en couleur. Performance haut de gamme pour swings rapides — distance, hauteur, arrêt sur le green — avec la visibilité et le style des balles colorées Volvik. Sensation ferme.\n\nLa performance qui se voit de loin.",
    confirme:
      "La S4 est une uréthane quatre couches à compression haute : vitesses élevées (V4), vol haut, effet élevé au green, sensation ferme — une vraie balle de compétition, en finitions colorées. Le profil rivalise avec les tour balls classiques.\n\nContre-indication : noyau ferme = vitesse requise. Pour les swings modérés, la couleur ne compense pas — préférez une balle plus souple.",
    encadre:
      "<strong>Les balles colorées</strong> : la couleur n'enlève rien à la performance (le pigment est dans le cover). Avantage réel de visibilité — au sol, en automne, par faible lumière — souvent sous-estimé.",
  },
  "volvik-vivid": {
    debutant:
      "L'emblème des balles colorées : une finition mate très visible, sur une balle de distance droite et facile. Vous la suivez mieux des yeux et la retrouvez plus vite. Pour les vitesses modérées qui veulent allier distance et plaisir.\n\nDe la distance, et le plaisir de la voir voler.",
    confirme:
      "La Vivid est une ionomer à compression ≈ 80, finition mate, orientée distance et droiture (effet réduit) pour vitesses modérées à soutenues (V2-V3), profil distance-polyvalent. Sa visibilité est un atout pratique réel.\n\nRéserve : mordant au green limité, comme toute ionomer. C'est une balle de distance/visibilité, pas de contrôle.",
    encadre:
      "<strong>La finition mate</strong> : un revêtement non brillant qui réduit les reflets et facilite le suivi visuel du vol. Surtout un confort d'usage — sans incidence sur la performance pure.",
  },
  "volvik-vivid-soft": {
    debutant:
      "La Vivid, en plus douce. Même visibilité colorée mate, sensation plus tendre, comportement équilibré pour les vitesses tranquilles. Agréable et facile à suivre des yeux.\n\nLe plaisir de la couleur, en plus moelleux.",
    confirme:
      "La Vivid Soft abaisse la compression (≈ 70) et adoucit la sensation : ionomer à vol moyen et effet modéré, pour vitesse modérée (V2), profil polyvalent, finition mate colorée.\n\nRéserve : contrôle au green plafonné. Choisissez selon la sensation : Vivid pour la distance ferme, Vivid Soft pour la douceur.",
    encadre:
      "<strong>La sensation, critère de départage</strong> : entre deux balles aux performances proches, le « toucher » préféré tranche. Vivid et Vivid Soft ne diffèrent presque que par là — à vous de sentir.",
  },
  "volvik-power-soft": {
    debutant:
      "Distance et douceur à petit prix, en finition brillante colorée. Facile à lever, droite, pensée pour les vitesses tranquilles qui visent le rendement au driver.\n\nDe la distance accessible, avec un peu de couleur.",
    confirme:
      "La Power Soft est une ionomer à compression ≈ 75, orientée distance (effet bas) pour vitesses lentes à modérées (V1-V2), en €. Profil distance pur, sensation neutre, finition glossy.\n\nContre-indication : pas de mordant au green. Une balle de distance/prix ; pour le contrôle, voir une uréthane abordable.",
    encadre:
      "<strong>Le rendement au driver</strong> : maximiser la distance du grand jeu. À vitesse modérée, il passe par un cœur qui se comprime facilement plus que par un effet réduit — d'où les basses compressions dans cette catégorie.",
  },
  "volvik-radiance": {
    debutant:
      "Pensée pour être vue : une balle haute visibilité, douce et facile, pour les vitesses tranquilles. Idéale pour suivre votre balle sans effort et la retrouver vite dans l'herbe.\n\nLa visibilité avant tout, sans renoncer au confort.",
    confirme:
      "La Radiance est une ionomer à basse compression, vol haut et effet bas, pour vitesses lentes (V1), profil distance, avec un cover haute visibilité. Confort et repérage priment.\n\nContre-indication : aucune ambition de contrôle. Son vrai argument est pratique — voir et retrouver la balle — particulièrement utile pour beaucoup de joueurs seniors.",
    encadre:
      "<strong>La haute visibilité</strong> : couleurs et finitions étudiées pour maximiser le repérage en vol et au sol. Un bénéfice concret de confort et de rythme de jeu, surtout quand la vue baisse.",
  },

  // ===================== INESIS =====================
  "inesis-soft-500": {
    debutant:
      "La balle Decathlon qui fait l'unanimité : douce, longue, droite et imbattable sur le prix. Facile à lever, polyvalente, parfaite pour débuter ou jouer sans se ruiner.\n\nLe meilleur rapport simplicité-prix du catalogue.",
    confirme:
      "La Soft 500 est une ionomer (Surlyn) à compression 74, vol moyen, effet modéré, pour vitesses lentes à modérées (V1-V2), profil distance-polyvalent en €. Un rapport qualité-prix redoutable, qui ressort souvent comme « choix malin ».\n\nRéserve : mordant au green limité, sans surprise. Pour du contrôle abordable, la Tour 900 (uréthane) du même fabricant est l'étape suivante.",
    encadre:
      "<strong>Le Surlyn</strong> : le nom commercial le plus répandu de l'ionomer. Enveloppe résistante et économique, gage de durabilité et de droiture — le socle des balles accessibles.",
  },
  "inesis-distance-100": {
    debutant:
      "La plus économique du catalogue, pensée pour une chose : la distance, à prix plancher. Droite, robuste, sans fioritures. Le choix raisonnable quand on débute et qu'on perd des balles.\n\nLe minimum vital, bien fait, pour quelques euros.",
    confirme:
      "La Distance 100 est une ionomer (Surlyn) deux couches à compression basse-moyenne : effet réduit, vol moyen, droiture, pour vitesses lentes à modérées. Profil distance pur, prix plancher.\n\nContre-indication : aucun contrôle au green, assumé. Pour perdre des balles sans regret tout en gardant de la distance, c'est le choix logique.",
    encadre:
      "<strong>La balle deux couches</strong> : un cœur et une enveloppe, rien de plus. Moins « spécialisée » qu'une multicouche, mais robuste et bon marché — l'essentiel pour la distance et la droiture.",
  },

  // ===================== VICE =====================
  "vice-pro-plus": {
    debutant:
      "Une balle de compétition vendue directement en ligne, à prix plus doux que les grands noms. Pour les swings rapides : distance, vol perçant et arrêt sur le green. Sensation ferme.\n\nLa performance premium, sans l'intermédiaire.",
    confirme:
      "La Pro Plus est une uréthane quatre couches à compression ≈ 95-100, à l'effet réduit au driver (dspin bas) pour un vol tendu et du déroulé, tout en gardant un mordant élevé au green. Vitesses élevées (V4). Assumée comme une rivale directe des Pro V1x, en vente directe.\n\nContre-indication : noyau ferme = vitesse requise. L'intérêt majeur est tarifaire (achat en ligne, dégressif) — à vitesse modérée, préférez la Pro ou la Pro Air.",
    encadre:
      "<strong>La vente directe (DTC)</strong> : vendue en ligne sans passer par les magasins, donc moins chère à performance égale, avec des remises au volume. Un modèle qu'aucun fabricant « classique » ne mettra en avant.",
  },
  "vice-pro": {
    debutant:
      "La balle tour polyvalente de Vice, en vente directe : distance et arrêt sur le green pour les joueurs à bonne vitesse, à un tarif plus accessible que les références. Nombreuses couleurs.\n\nLe juste équilibre, à prix direct.",
    confirme:
      "La Pro est une uréthane trois couches à compression ≈ 86-90, vol moyen, effet élevé au green, pour vitesses soutenues (V3). Positionnée comme une alternative directe à la Pro V1, vendue en ligne.\n\nRéserve : régularité de gamme et réseau d'essai moindres que chez les leaders. Mais le profil et le tarif en font un excellent rapport performance-prix pour qui achète en ligne.",
    encadre:
      "<strong>Le clone assumé</strong> : certaines marques en vente directe reproduisent ouvertement le profil des références (cover, couches, compression) pour les vendre moins cher. Techniquement crédible — c'est la distribution qui change, pas la balle.",
  },
  "vice-pro-air": {
    debutant:
      "Rare et précieuse : une balle de contrôle pensée pour les swings lents. Elle apporte du mordant au green sans exiger une grosse vitesse, avec un vol haut et une sensation douce. Idéale pour un senior qui veut faire arrêter ses balles.\n\nLe contrôle, enfin accessible aux vitesses tranquilles.",
    confirme:
      "La Pro Air est une uréthane à basse compression et lancement haut : un objectif rare, proposer du mordant au green (cover uréthane) à des vitesses lentes à modérées (V1-V2). Sensation douce, vente directe.\n\nRéserve : ce n'est pas une balle de distance ni de gros frappeur. Mais pour un joueur lent qui veut réellement du contrôle — créneau quasi vide ailleurs — c'est une réponse pertinente.",
    encadre:
      "<strong>Uréthane pour swing lent</strong> : la plupart des balles de contrôle exigent de la vitesse. Quelques rares modèles, comme la Pro Air, apportent le mordant uréthane à basse compression — précieux pour les seniors au bon petit jeu.",
  },
  "vice-tour": {
    debutant:
      "Une balle polyvalente et économique, en vente directe. Comportement équilibré sur tout le parcours, sensation correcte, disponible en blanc ou jaune. Un bon couteau suisse à prix direct.\n\nLe juste milieu, sans intermédiaire.",
    confirme:
      "La Vice Tour est une ionomer (Surlyn) à compression moyenne, vol moyen, effet modéré, pour vitesses modérées à soutenues (V2-V3), profil polyvalent en €. Vente directe.\n\nRéserve : mordant au green plafonné. Une balle d'équilibre et de prix ; pour le contrôle, la Pro ou la Pro Air, juste au-dessus.",
    encadre:
      "<strong>Polyvalente à prix direct</strong> : sans le mordant d'une uréthane ni l'extrême distance d'une balle spécialisée, elle vise la régularité — la vente directe la rend simplement moins chère que ses équivalentes en magasin.",
  },
  "vice-drive": {
    debutant:
      "Ferme et longue, pensée pour la distance à petit prix, en vente directe. Elle file droit et roule au sol. Autour du green, elle privilégie le roulement.\n\nDe la distance franche, sans détour.",
    confirme:
      "La Vice Drive est une ionomer (Surlyn) deux couches à sensation ferme (compression ≈ 95) : effet réduit, vol moyen, droiture, pour vitesses modérées à soutenues (V2-V3), profil distance en €.\n\nContre-indication : pas de mordant au green, et une sensation ferme qui ne plaira pas aux amateurs de douceur. Pour la distance économique, c'est efficace.",
    encadre:
      "<strong>Sensation ferme et distance</strong> : un cœur et une enveloppe fermes peuvent maximiser le déroulé pour un joueur qui a la vitesse — mais la sensation « dure » reste une affaire de goût, à départager au test.",
  },

  // ===================== MIZUNO =====================
  "mizuno-rb-tour-x": {
    debutant:
      "La balle la plus ferme du marché, pour les frappeurs les plus rapides qui cherchent un vol perçant et de la distance. Elle traverse le vent et déroule, tout en gardant le mordant au green. Sensation très ferme.\n\nLa pénétration extrême, réservée aux gros moteurs.",
    confirme:
      "La RB Tour X affiche la compression la plus élevée du catalogue (≈ 110) avec un effet réduit au driver (dspin bas) : vol perçant, déroulé maximal, pour les vitesses les plus hautes (V4). L'enveloppe uréthane maintient le mordant au green.\n\nContre-indication ferme : sous une très haute vitesse, ce noyau ne se comprime tout simplement pas — perte de vitesse de balle et sensation cassante. À réserver aux frappes véloces ; sinon, la RB Tour.",
    encadre:
      "<strong>La balle la plus ferme du marché</strong> : une compression ≈ 110 est un extrême. Spectaculaire de pénétration pour un swing très rapide, inexploitable en dessous — l'illustration parfaite du mismatch vitesse/balle.",
  },
  "mizuno-rb-tour": {
    debutant:
      "Une balle de joueur orientée vol perçant et distance, un peu plus douce que sa sœur la plus ferme. Pour les bons frappeurs qui veulent de la pénétration et un arrêt correct sur le green.\n\nLa distance perçante, en plus jouable.",
    confirme:
      "La RB Tour est une uréthane quatre couches à compression moyenne-haute et effet réduit au driver (dspin bas) : vol tendu, déroulé, mordant au green préservé, pour vitesses soutenues à rapides (V3-V4).\n\nRéserve : reste exigeante en vitesse, même si elle l'est moins que la RB Tour X. Sous ~95 mph, une balle plus souple sera plus juste.",
    encadre:
      "<strong>Le vol perçant</strong> : une trajectoire tendue qui résiste au vent et déroule au sol. Obtenue en réduisant l'effet au driver — l'arme des joueurs rapides contre le ballon et le vent.",
  },
  "mizuno-rb-max": {
    debutant:
      "De la distance et un vol haut, faciles à obtenir. Sa grande taille de cœur aide à envoyer loin sans forcer, avec une trajectoire haute et droite. Pour les vitesses modérées qui visent le rendement.\n\nDe la distance, sans se fatiguer.",
    confirme:
      "La RB Max est une ionomer à gros noyau et compression moyenne : vol haut, effet modéré, peu d'effet latéral, pour vitesses modérées à soutenues (V2-V3), profil distance-polyvalent en €€.\n\nRéserve : mordant au green limité. Une balle de distance/hauteur ; pour le contrôle, il faut une uréthane.",
    encadre:
      "<strong>Le gros noyau</strong> : un cœur de grand diamètre favorise la vitesse de balle et un vol haut à effort modéré. Un levier de distance classique sur les balles destinées aux vitesses modérées.",
  },
  "mizuno-rb-566": {
    debutant:
      "Une balle de distance au dessin d'alvéoles original, douce et facile à lever. Elle vise un vol stable et de la distance pour les vitesses tranquilles, à petit prix.\n\nDe la distance confortable, version originale.",
    confirme:
      "La RB 566 est une ionomer à basse compression (≈ 50-60) avec un alvéolage spécifique (566 micro-alvéoles) censé stabiliser le vol : lancement haut, effet bas, vitesses lentes à modérées (V1-V2), profil distance en €.\n\nContre-indication : pas de contrôle au green. Une balle de distance/feel économique, avec un argument aérodynamique en plus.",
    encadre:
      "<strong>Le dessin d'alvéoles</strong> : le nombre et la forme des creux influencent la portance et la stabilité du vol. Un argument réel d'ingénierie — à ne pas confondre avec une promesse de distance miraculeuse.",
  },

  // ===================== PINNACLE =====================
  "pinnacle-rush": {
    debutant:
      "Vendue en pack généreux, ultra-accessible : la balle de la distance et de la durabilité, quand on en perd souvent. Elle part haut, file droit et résiste aux coups. Parfaite pour jouer sans compter ses balles.\n\nLe choix sans regret pour débuter et progresser.",
    confirme:
      "La Rush est une ionomer de distance : vol haut, effet bas, robuste, couvrant un large spectre de vitesses, vendue en pack de 15. Profil distance pur, prix au plus bas par balle.\n\nContre-indication : aucune ambition de contrôle au green. Son argument est imparable pour qui perd des balles : maximum de distance et de durabilité, minimum de coût.",
    encadre:
      "<strong>Le pack de 15</strong> : un conditionnement pensé pour le coût par balle, pas pour le prestige. Quand on perd des balles, la vraie économie est là — et jouer toujours le même modèle reste possible, donc bénéfique.",
  },
  "pinnacle-soft": {
    debutant:
      "La version douce du pack accessible : agréable à l'impact, facile à lever, longue pour les vitesses tranquilles, et toujours à prix plancher au pack de 15. Le confort sans se ruiner.\n\nDouce, économique, sans complexe.",
    confirme:
      "La Pinnacle Soft est une ionomer à basse compression (≈ 50) : sensation douce, vol moyen, effet bas, pour vitesses lentes à modérées (V1-V2), vendue en pack de 15. Profil distance/feel, coût par balle minimal.\n\nContre-indication : pas de mordant au green. Pour de la douceur et de la distance sans penser au prix de chaque balle perdue, c'est le bon calcul.",
    encadre:
      "<strong>Le coût par balle</strong> : le vrai indicateur quand on en perd. Une balle deux fois moins chère qu'on peut rejouer sans hésiter vaut souvent mieux qu'une premium qu'on a peur d'envoyer dans l'eau.",
  },
};
