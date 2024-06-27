---
title: Software ecodesign - 1st year master thesis
publishDate: "10 July 2019"
updatedDate: 14 April 2020
tags: ["university", "ecodesign", "french"]
draft: false
description: "A thesis I wrote on software ecodesign in my 1st year of master's studies"
---

# Eco-conception et intégration des problématiques de performance énergétique dans les processus de développement logiciel

Mémoire rédigé par Amaury LUCAS

Apprenti au sein d'IBM - étudiant ingénieur à l'EFREI

Avec le soutien de :

- Boris LIGER, Maitre d'apprentissage
- Christian KHOURY, Tuteur enseignant
- Virginie GALLET, responsable CFA
- Didier ACHVAR, responsable EFREI

## Introduction

La deuxième moitié du 20e siècle marque l'avènement d'un nouveau mode de pensée économique et politique, dont la genèse se trouve dans le rapport du Club de Rome, publié en 1972 [^1]. Ce rapport constate que les évolutions économiques et industrielles du début du siècle ont des impacts négatifs importants sur l'environnement et l'équilibre social et sociétal.
Il s'est alors dessiné une convergence mondiale pour la reconnaissance des impacts environnementaux induits par le mode de vie de la civilisation humaine (en témoigne les nombreux sommets internationaux regroupant les chefs d'états du monde entier qui se sont tenus ces 50 dernières années, des "Sommets de la Terre" aux "Conference Of Parties" - COP).
Dans le même temps sera développé le concept de développement durable, apparu pour la première fois dans le rapport Bruntland [^2], publié en 1987 par la Commission mondiale sur l’environnement et le développement de l'ONU (Organisation des Nations Unies). Ce mode de développement économique permet d'avoir des outils pour répondre aux enjeux sociétaux cruciaux nouvellement identifiés. Il sera universellement reconnu et adopté comme un moyen de préserver la planète.

Législations, méthodes de conceptions, recyclage... Les questions environnementales ont par la suite non seulement pris de l'importance au sein des organisations et des entreprises, mais elles sont même devenues des obligations légales pour nombres d'industries (industrie automobile par exemple), notamment en France et en Europe. Et pour cause, les impacts à long terme sur les générations futures pourraient être dramatiques si rien n'est fait : pollution de l'air, réchauffement climatique, acidification de l'air, raréfaction d'eau potable... et les conséquences de ces phénomènes physiques sur notre mode de vie sont nombreuses (santé, migration, énergie, etc).

Si la très grande majorité des industries ont adopté puis appliqué petit à petit les principes du développement durable, le secteur des TIC (Technologies de l'Information et des Communications), qui a émergé puis explosé durant ces 50 dernières années, est resté quand à lui complètement étanche à ces principes : l'aspect faussement immatériel de ce secteur ayant très certainement joué en la défaveur de la mise en place de ces derniers.

A l'heure où les enjeux environnementaux n'ont jamais été aussi importants, et où le secteur des TIC s'est désormais imposé comme fer de lance de l'économie mondiale (9 des 10 plus grosses entreprises mondiales appartiennent au secteur des TIC [^4] ), où en est le niveau de maturité environnemental du secteur ? Où en sont les démarches dites de Green-IT ?

[^1]: Limits of Growth, Club de Rome, 1972, http://www.donellameadows.org/wp-content/userfiles/Limits-to-Growth-digital-scan-version.pdf
[^2]: Our common future, 1987, https://www.diplomatie.gouv.fr/sites/odyssee-developpement-durable/files/5/rapport_brundtland.pdf
[^3]: International Energy Agency, https://www.iea.org/geco/data/
[^4]: Brandz top 100 most valuable global Brands, 2019, http://online.pubhtml5.com/bydd/ksdy/#p=15
[^5]: Série de normes ISO 14000, https://www.iso.org/fr/iso-14001-environmental-management.html

## État de l'art

Avant toute chose, un constat s'impose : en 2015, les TICs représentent 10% de la consommation électrique mondiale, et ce chiffre est en hausse de 9% chaque année. C'est aujourd'hui le seul secteur dont la hausse est si importante. Dans une étude publiée en 2015 et menée par Andrae & Edler, dont les chiffres ci dessus sont tirés, les auteurs ont établis 3 scénarios d’évolution de la consommation énergétique du Numérique de 2010 à 2030 [^6] (un "meilleur des cas", un "attendu" et un "pire des cas"), en se basant sur un modèle qu'ils ont défini et des données jusqu'à 2013.
En 2018 , le groupe de réflexion The shift project a publié un rapport, "Lean ICT - Pour une sobriété numérique" [^7], dans lequel il actualise les scénarios de Andrae & Edler avec les dernières données récoltées pour voir de quel scénario nous sommes le plus proche, et le résultat n'est pas très optimiste. En effet, sur les années 2013 - 2017, la consommation énergétique des TIC s'est montrée bien au dessus du scénario "attendu" de Andrae et Edler (nous sommes à mi chemin entre le scénario "attendu" et le scénario "pire des cas"). Ainsi, d'ici à 2025,le secteur des TIC pourrait représenter 6% des émissions de gaz à effet de serre mondiales, soit 2 fois plus que l'aviation civile par exemple (3,2% en 2017 selon l'Agence Internationale de l'énergie [^3]).
De fait dans le secteur des TIC, les enjeux économiques et environnementaux sont liés.
En effet, la quasi totalité des équipements du secteur sont alimentés en énergie grâce à l'électricité.
Rappelons que l'unité de mesure de la consommation des équipements informatiques est le Kilowattheures (kWh) : il correspond à la quantité d'énergie électrique consommée. Lorsque l'on mesure et compare des consommations, on utilise donc cette unité (ou des multiples tel que le Megawattheures - MWh). Néanmoins, la consommation électrique n'a pas en soi d'impact sur l'environnement, ce sont plutôt les moyens de production électriques qui eux peuvent en avoir.
Or, ces mêmes moyens de production électrique dans le monde mobilisent majoritairement des ressources fossiles (charbon, pétrole, gaz) et génèrent donc des gaz à effets de serres : en 2018, 64% de la production électrique provient d'énergies primaires fossiles selon les chiffres de l'Agence Internationale de l'énergie [^3]. Les gaz à effet de serre (GES) comprennent le dioxyde de carbone CO<sup>2</sup>, le méthane CH^4^, et le protoxyde d'azote N~2~O (pour les plus importants d'entre eux), et l'unité de mesure utilisée est le kilogramme. Les GES contribuent au réchauffement climatique car ils ont un forçage radiatif fort, c'est à dire qu'ils participent à la conservation de l'énergie dans le système Terre plutôt qu'à la libération dans l'espace.
Chaque GES a un effet différent sur le réchauffement global : leurs effets se mesurent donc en équivalent CO<sup>2</sup> (noté CO<sup>2</sup>e et aussi appelé potentiel de réchauffement global PRG) pour uniformiser les valeurs. On parlera donc de g CO<sup>2</sup>e ou g eq CO<sup>2</sup>.

Néanmoins, chaque pays possède un mix de production électrique différent : en France par exemple en 2018, les moyens de production fossile ont représenté 7,1% de la production totale selon RTE France [^18]. Il faut donc, lors de l'étude des consommations électriques, considérer dans quel pays on se trouve pour évaluer les impacts environnementaux engendrés.

La réduction de consommation électrique des équipements réduit également la facture des organisations qui les utilisent.
C'est pourquoi les travaux d'optimisation des équipements informatiques remontent à avant même le "réveil écologique" du monde professionnel : les industriels y voyaient une piste de réduction des coûts d'infrastructure.
La recherche s'est donc surtout focalisée sur l'amélioration de l'efficience énergétique des composants matériels, à cause de la combinaison de deux facteurs, comme le démontre une étude menée par Google et publiée en 2007 [^8]. Premièrement, ils montrent que les ressources processeurs (CPU) des serveurs sont le plus souvent utilisée entre 20% et 50% de leur maximum, en examinant plus de 5000 serveurs sur une période de 6 mois. Ensuite, ils comparent le pourcentage d'utilisation du serveur (en utilisant différentes métriques telles que le nombre de requête HTTP par seconde, le nombre de processus actifs et le pourcentage d'utilisation du CPU) à la consommation électrique du serveur : ils montrent que la consommation électrique suit une fonction affine, donc non linéaire. En conséquence, un serveur ayant un taux d'utilisation presque nul consomme tout de même 50% d'électricité par rapport à sa consommation maximale.
L'efficience énergétique, définie dans cette étude comme le pourcentage de consommation électrique (par rapport à la consommation maximale) divisé par le pourcentage d'utilisation du serveur, est donc faible pour les taux d'utilisations constatés dans la vie réelle (entre 20% et 50% la plupart du temps). Autrement dit, l'énergie est "gâchée".

Des initiatives ont donc été lancées, soit par les institutions (Etats, Union Européenne, etc), soit par les professionnels eux même pour améliorer cette efficience (entendre ici efficience énergétique générale des équipements). On peut citer par exemple EnergyStar [^9], éco-label lancé en 1992 aux Etats-Unis par la U.S. Environmental Protection Agency (EPA), puis importé en Europe dans les années 2000. Ce label a pour but d'assurer l'efficience énergétique des équipements informatiques divers. Autre exemple, le programme 80plus [^10], qui certifie que les blocs d'alimentation électrique des équipements (ordinateurs personnels notamment) convertissent au moins 80% de l'énergie reçue pour l'utilisation des composants et non en chaleur par effet Joule.
Sur le plan institutionnel, des directives ont été instaurées en Union Européenne notamment, que les constructeurs d'équipements doivent respecter. On peut citer par exemple RoHS (Restriction of hazardous substances), WEEE (Waste Electronic and Electrical Equipment) ou Reach (_Registration, Evaluation, Authorization and restriction of CHemicals_), bien que ces directives ne concernent pas directement la consommation d'énergie des composants.
Enfin, de plus vastes programmes tel que le Climate Servers Computing [^11], lancé par l'ONG WWF et Google en 2007, ont reçu le soutien des plus grandes entreprises du secteur pour contenir les émissions de gaz à effet de serre de la filière à horizon 2030.

Et il faut dire que cela a porté ses fruits, la consommation d'énergie unitaire des équipements a considérablement baissé, si bien que de nombreux appareils fonctionnent aujourd'hui sur batterie avec une puissance de calcul importante et dont l'autonomie est raisonnable, chose complètement impensable il y a de cela encore 30 ans.

Néanmoins, et nous l'avons vu plus haut, la consommation électrique du secteur est en constante hausse. Cela s'explique de plusieurs manières:

1 - La démocratisation du numérique. Le changement de paradigme s'est initié à la fin des années 90. Là ou le matériel informatique était principalement la propriété des entreprises, il s'est petit à petit démocratisé au point ou aujourd'hui il est extrêmement improbable de croiser quelqu'un n'ayant pas un smartphone, un ordinateur, ou une télévision (pour ne citer que ces équipements). Ce changement de paradigme, couplé aux mauvaises habitudes des consommateurs (ne jamais éteindre ses appareils par exemple), ont considérablement augmenté les impacts environnementaux des TIC. Une étude menée au Canada en 1994 a montré que mettre des post-it pour rappeler aux utilisateurs d'éteindre leurs équipements a permis de réduire la consommation électrique de 14%, tandis que mettre en place un arrêt automatique des machines selon des plages horaires a permis de réduire la consommation de 63% [^12]. Si ces mesures peuvent être prises à l'échelle d'une entreprise, cela semble en revanche compliqué chez les particuliers.

2 - La loi empirique de With statue : "Les logiciels ralentissent plus vite que le matériel n'accélère". Outre la formulation quelque peu humoristique, cette loi soulève un aspect très intéressant et trop souvent négligé. La complexité, la taille ou le poids de nos solutions informatiques ne cessent de grandir et, avec elles, les ressources matérielles nécessaires à leur traitement, donc a fortiori leur consommation énergétique. Certains parlent même aujourd'hui du phénomène "d'obésiciel", pour obésité-logicielle. En effet, les éditeurs n'ont cessé de superposer les couches applicatives, contrairement aux fabricants de matériels qui ont su innover depuis maintenant plusieurs années sur l’efficience des équipements.
A titre d'exemple, Frédéric Bordage, précurseur du Green-IT et fondateur du site greenit.fr, a calculé que le couple "Windows 8 - Office 2013" nécessite un CPU cadencé à une fréquence 15 fois plus grande que le couple "Windows 98 - Office 97" et a besoin de 114 fois plus de mémoire vive RAM [^16].

Ces deux premières explications illustrent ce que l'on nomme "l'effet rebond" : l’augmentation de consommation liée à la réduction des limites à l’utilisation d’une technologie. Les ressources informatiques telles que la RAM et le CPU sont devenues moins chères, plus abondantes et plus efficaces, ce qui a poussé les développeurs à concevoir des services numériques beaucoup plus gourmands.

3 - L'argument économique pour la réduction de la consommation pour les entreprises n'est valable que pour la partie serveur des applications (par exemple pour le Web). Or, avec la multiplication des terminaux et l'essor du Web notamment, et plus récemment de l'IoT (Internet of Things), la partie serveur ne représente qu'une petite partie des ressources globales utilisées pour l'application. Selon l'association The Green Code Lab, dans son étude Web Energy Archive parue en 2014 [^14], la partie serveur d'un site web consommerait plus de 10 fois moins que les terminaux clients accédant au site. Or, faire un client "léger", c'est à dire alléger le composant logiciel qui sera exécuté sur la machine du client, n'a aucun intérêt économique pour l'entreprise (hors analyse fonctionnelle). L'ADEME (Agence de l’environnement et de la maîtrise de l’énergie) a elle aussi publié un livre blanc [^15] dans lequel elle indique que 47% des émissions de gaz à effet de serres des TIC sont issues des équipements des consommateurs (sur l'ensemble du cycle de vie).

Par ailleurs, si des acteurs ont très tôt cherché à minimiser les consommations induites par le secteur des TIC, comme on l'a vu précédemment, ces derniers sont restés assez marginaux et cantonnés à l'optimisation du matériel. Or, la prise en compte des impacts environnementaux d'un produit ou d'un service doit se faire dès la conception de ce dernier. En effet, les choix de conception ont une responsabilité majeure dans les externalités négatives générées lors de la vie du produit ou service.

C'est pourquoi d'autres industries, historiquement beaucoup plus polluantes que le secteur des TIC, ont développé des méthodes dites d'éco-conception : l'empreinte environnementale du service ou produit est intégrée dès la phase de conception de ce dernier et ce dans le but de réduire les impacts générés tout au long de son cycle de vie. L'Organisation mondiale de normalisation (ISO) a dans ce sens publié la série de normes ISO 14000 [^5], relatives au management environnemental, qui s'adresse aux organisations cherchant à maîtriser leurs impacts sur l'environnement.

L'éco-conception appliquée aux services numériques implique donc de fait les développeurs et plus généralement toutes les équipes participant à la conception d'un produit ou service. Et cela fait sens : le matériel, aussi optimisé soit-il, n'existe que pour exécuter les ordres dictés par les programmes. Or, comme vu précédemment, la consommation électrique est directement corrélée à la sollicitation des composants. On définit alors la consommation des logiciels par l'énergie utilisée par le matériel suite à une requête du logiciel.

En parallèle des optimisations matérielles, quelques pistes logicielles ont tout de même été exploitées, comme par exemple une étude menée par Irish & Christensen publiée en 2000 [^13] proposant un protocole réseau TCP/IP modifié pour diminuer la consommation des équipements non utilisés mais devant rester connectés au réseau. Mais bien que le changement du protocole réseau implique des changements dans les implémentations logicielles, il ne s'agit pas d'une application ou programme informatique, ni de la mise en place des méthodes d'éco-conception.

Une synthèse sur l'état de l'art en terme d'efficience énergétique logicielle, publiée en 2015 par des chercheurs de l'université de Pernambuco [^23], a analyser les publications dans les plus grandes conférences dédiées au logiciel (telles que les conférences ICSE, ESEC/FSE, ...) en y cherchant les termes "power" (puissance) et "energy" (énergie) dans les titres et abstracts. Il n'ont trouvé que 14 publications, et dont la plus récente date de 2012. Cela montre que le sujet est émergeant et encore trop peu approfondi.

Enfin, il est à noter que dans le but de réduire la consommation énergétique des logiciels, il faut déjà pouvoir mesurer cette dernière. Or, nous verrons par la suite que cette question reste aujourd'hui ouverte, sans qu'une solution n'ait été adoptée consensuellement par le secteur.

Ce contexte nous amène donc donc à nous poser le questionnement suivant :

[^6]: On Global Electricity Usage of Communication Technology: Trends to 2030, Andrae & Edler, 2015, https://www.mdpi.com/2078-1547/6/1/117/htm
[^7]: LEAN ICT - Pour une sobriété numérique, The Shift Project, 2018, https://theshiftproject.org/wp-content/uploads/2018/11/Rapport-final-v8-WEB.pdf
[^8]: The Case for Energy-Proportional Computing, Barroso & Hölzle, 2007, https://storage.googleapis.com/pub-tools-public-publication-data/pdf/33387.pdf
[^9]: Label Energy Star, https://www.energystar.gov/about
[^10]: 80+ certification, https://www.plugloadsolutions.com/80PlusPowerSupplies.aspx
[^11]: Climate Servers Computing, aujourd'hui renommé The Green Grid, https://www.thegreengrid.org/
[^12]: The energy consumption of desktop computers: measurement and savings potential, G.R. Newsham & D.K. Tiller, 1994 ,https://ieeexplore.ieee.org/abstract/document/297924
[^13]: A "Green TCP/IP" to reduce electricity consumed by computers, Irish & Christensen, 2000, https://ieeexplore.ieee.org/abstract/document/673356
[^14]: Etude Web Energy Archive, The green code Lab, 2014, https://www.greencodelab.org/vie-du-green-code-lab/etude-web-energy-archive-la-consommation-energetique-des-sites-web-cote-utilisateur/
[^15]: La face cachée du numérique, ADEME, 2017, https://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-face-cachee-numerique.pdf
[^16]: Logiciel : la clé de l’obsolescence programmée du matériel informatique, Frédéric Bordage, 2013, https://www.greenit.fr/2010/05/24/logiciel-la-cle-de-l-obsolescence-programmee-du-materiel-informatique/
[^18]: Synthèse production électrique française 2018, RTE France, https://bilan-electrique-2018.rte-france.com/synthese/
[^23]: Refactoring for Energy Efficiency:A Reflection on the State of the Art, Gustavo Pinto, Francisco Soares-Neto, Fernando Castor, http://gustavopinto.org/lost+found/greens2015.pdf

## Problématique

En quoi l'intégration de la performance énergétique des logiciels dans les méthodologies de développements est-elle un enjeu majeur du secteur des TIC au 21e siècle ?

## 1 - Eco-conception et Analyse du cycle de vie d'une solution logicielle

L'éco-conception s'est imposée dans de très nombreux secteurs, comme une démarche ayant de nombreuses retombées positives. Outre les gains environnementaux, ces démarches permettent notamment la réduction des coûts de production, l'anticipation des réglementations environnementales futures, la différenciation vis-à-vis des concurrents ou encore l'amélioration de l'image de l'entreprise.

Cependant, dans le domaine de l'informatique logicielle, rien n'est fait, ou presque. Pourtant, les avantages d'une démarche d'éco-conception appliquée au logiciel sont bien réels. On est alors en droit de se demander : Pourquoi cela n'est pas adopté par les acteurs du secteur ?

Plusieurs facteurs jouent et ont pu joué dans la non-adoption de telles démarches, mais le principal réside dans la spécificité du logiciel : ce n'est ni un bien manufacturé, ni un service (au sens strict), ni un procédé. Par ailleurs, le couplage matériel/logiciel est fort pour un service numérique. Ce statut si particulier du programme informatique a considérablement compliqué les démarches d'éco-conception : les outils génériques et trans-domaines sont plus difficilement applicables.

Frédéric Bordage, avec l'ADEME et l'Alliance Green IT notamment, ont publié "Eco-conception web : les 115 bonnes pratiques". Ce recueil de bonnes pratiques est utile pour l'éco-conception logicielle, mais comment mesurer clairement les impacts d'un site Web ? Les métriques habituellement utilisées sont le poids d'une page web et le nombre de requêtes HTTP, entre autres, mais ces métriques sont trop abstraites, incomplètes et propres au domaine du Web.

Hors la mesure est le point de départ de toute éco-conception.

Parmi l'attirail d'outils génériques et trans-domaines utilisés pour éco-concevoir, l'Analyse du Cycle de Vie (ACV, LCA en anglais) est sans nul doutes le plus incontournable et le plus central. L'ACV est une méthodologie standardisée (ISO14040 et ISO14044 notamment) qui permet d’évaluer les impacts environnementaux de biens manufacturés, services et procédés et ceci de façon globale et complète.
L'ACV comptabilise 4 catégories de dommages envers l'environnement :

- santé humaine (DALY)
- qualité des éco systèmes (PDF.m².an)
- changement climatique (kg Eq CO2)
- consommation de ressource (MJ énergie primaire).

L'ACV est apparue pour la première fois en 1969, initiée par l'industriel Coca-Cola afin de trancher entre l'utilisation de bouteilles en verre ou de bouteilles en plastiques. Afin d'avoir une vision ensembliste et systémique, ils ont comparé les deux contenants sur l'ensemble du cycle de vie, que l'on généralise désormais de la sorte :

- Etude de la conception du produit ;
- L’extraction des matières premières ;
- Le processus de fabrication et de conditionnement ;
- Le processus logistique et d’acheminement ;
- L’usage du produit ;
- La fin de vie (démontage, transport, tri, recyclage, déchets).

Ce fut la genèse de cette approche, plus tard reprise par d'autres industriels, puis formalisée en outil pour l'éco-conception.

La startup nantaise GreenSpector propose une méthode spécifique pour effectuer une Analyse du Cycle de Vie et qui adresse les problèmes habituellement rencontrés lors de l'utilisation de cet outil avec les produits logiciels.
Définir une méthodologie d'ACV spécifique aux logiciels se justifie par le fait que cette catégorie de produits, souvent considérés à tort comme purement immatériels, présentent des spécificités par rapport aux produits dits « matériels ».
Ce caractère pseudo immatériel est central dans les questions environnementales liées aux logiciels. C'est notamment la raison pour laquelle on entends parler de service numérique plutôt que de logiciel : au niveau sémantique, le service est plus global, et inclut la nécessité de disposer du matériel et des composants logiciels requis tel que le système d'exploitation.
Quoi qu'il en soit, la difficulté réside dans la définition du périmètre du dit service numérique ou du logiciel.
Cette pseudo-immatérialité soulève donc des questions quant à la meilleure façon de réaliser une ACV dans ce contexte.

C'est pourquoi GreenSpector a publié conjointement avec Orange et l'ADEME le "Guide méthodologique pour l'ACV des logiciels" [^17], dont les enseignements sont présentés ci-dessous.

D'abord, le cycle de vie d'un logiciel diffère grandement de celui d'un produit manufacturé classique. En tant que « bien immatériel », un logiciel ne nécessite pas directement d’extraction de matières premières (bien que des ressources matérielles sont nécessaires à son utilisation, nous en reparlerons ci dessous). La phase de fabrication quand à elle, n’est pas envisageable comme un processus de fabrication répété N fois pour produire N exemplaires du produit : il faut plutôt la considérer comme une phase unique permettant d’aboutir à une version du logiciel théoriquement reproductible et réutilisable à l’infini. La phase de conception se confond donc avec celle de fabrication dans ce cas précis, au sens de l'ACV.

On peut donc résumer le cycle de vie du logiciel en 4 étapes :
-Conception/Fabrication ;
-Distribution ;
-Utilisation ;
-Fin de vie / recyclage.

#### Conception/Fabrication

La fabrication (processus de conception / développement) est considérée comme une phase unique permettant de produire la solution logicielle. Cette phase intègre tout le processus de conception du logiciel : analyse des besoins, conception, programmation, test, stabilisation, déploiement. Les ressources associées aux maintenances correctives (correction de bug) et les enrichissements fonctionnels, sont à inclure dans cette phase. On comptabilisera également le matériel nécessaire à cette phase (postes de développement, serveurs, ...), les infrastructures tels que les bâtiments et leurs consommations, les déplacements des collaborateurs, etc.

#### Distribution

La distribution/copie vers l’utilisateur final : différents scénarios sont possibles, les deux plus répandus étant :

- Téléchargement (Page web par exemple, ou exécutables d'installations) ;
- L’utilisateur peut aussi récupérer la licence dans un commerce ou par courrier postal et télécharger le logiciel. Dans ce cas, le déplacement de l'utilisateur est à prendre en compte.
  Dans ces deux cas, on prendra en compte le stockage et l’hébergement ainsi que l'utilisation du réseau.

#### Utilisation

L’utilisation du logiciel par l’utilisateur final démarre par la phase de mise en service suite au téléchargement (distribution) par exemple et couvre toute la phase d’usage du logiciel sur le matériel adéquat de l’usager. Le périmètre intègre :

- Le matériel nécessaire ou prérequis pour utiliser le logiciel. Dans ce cas, on prend en compte : la fabrication du matériel (l’équipement de l’utilisateur, accès réseau, accès serveur), l’utilisation de l’énergie en phase d’usage du matériel (équipement de l’utilisateur, accès réseau et serveur), les logiciels prérequis intégrant leurs consommations de ressources (OS, navigateurs, machines virtuelles, …) ;
- Le logiciel étudié intégrant sa consommation d’énergie ;
- Les données nécessaires pour utiliser le logiciel ou créées par le logiciel et qui sont stockées sur les différentes ressources matérielles comprises dans le périmètre de l’application.

#### Fin de vie / recyclage

Là encore, l’ambiguïté matériel/logiciel complique la définition de cette phase.
Il n’existe pas d’obsolescence intrinsèque à un logiciel. Un logiciel est théoriquement utilisable à l’infini, tant qu’il existe du matériel pour le faire fonctionner. Le logiciel ignore l’usure et ne risque pas de tomber en panne parce qu’il est trop vieux. On ne peut donc pas déterminer une durée de vie d’un logiciel liée au fait que ses composants vont se dégrader au cours du temps (contrairement aux bien manufacturés). Les seules raisons pour un logiciel de devenir obsolète sont des facteurs extérieurs au produit lui-même :

- Décision de l’utilisateur de le supprimer ;
- Politique de maintenance d’une version ;
- Obsolescence des matériels supportant le logiciel ;
- Obsolescence des autres logiciels en interaction avec le logiciel (système d’exploitation, bases de données, navigateur ne supportant plus les anciennes versions HTML/CSS/JS …) ;
- Disparition du besoin.
  Cependant, si le logiciel n'a pas de fin en soi, il peut jouer un rôle important dans la fin de vie des équipements sur lesquels il est exécuté. En effet, concevoir des logiciels de plus en plus gourmands en ressources CPU ou RAM par exemple pousse les utilisateurs et les entreprises à renouveler plus souvent le matériel pour suivre les évolutions. L'impact environnemental est dans ce cas très fort, car les déchets électroniques sont très peu recyclés : selon la plateforme d'opendata européenne Eurostat, seulement 37,1% des déchets d'équipements électriques et électroniques (DEEE) sont recyclés. Les autres finissent dans des décharges en Afrique ou en Asie.

On ne détaillera pas ici comment calculer tous ces impacts en détail : ce n'est pas le but de ce document, les ACV sont réalisées par des logiciels dédiés et spécialisés qui possèdent déjà de nombreux outils pour modéliser de nombreuses externalités (notamment pendant la phase conception/fabrication).

Néanmoins, la phase utilisation pose deux problèmes difficilement solvables, même par ces logiciels experts.

Premièrement, dans un contexte d'entreprise il peut être possible d'estimer la consommation de ressources matérielles induites par un logiciel ou service numérique. Dans certains cas, les équipements ne servent qu'à une, ou un nombre très restreint d'applications. Un exemple concret est les applications mobiles des opérateurs de maintenance en industrie qui ne servent qu'à scanner des QR codes. Dans ce cas, le service numérique consistant à scanner des QR codes sur les machines industrielles implique directement l'emploi de smartphones pour les opérateurs, smartphones qui seront dédiés à cette application. On peut donc facilement estimer les ressources matérielles que la mise en place de ce service va impliquer.

En revanche, dans un contexte grand public, ou dans certains cas en entreprise également, les supports matériels et logiciels nécessaires au bon fonctionnement du logiciel développé ne seront pas dédiés à ce dernier, mais auront de nombreux usages. Prenons le cas d'un site web par exemple : les supports requis tel que l'ordinateur (ou mobile), le navigateur et la connexion internet ne seront pas achetés par le consommateur pour la seule utilisation du site web en question. Notons tout de même que l'offre de service peut avoir une influence sur l'achat de ces supports par le consommateur, mais ne suffira pas à elle seule à motiver cet achat. Ce sera plutôt l'accumulation des offres de services qui poussera le consommateur à effectuer cet achat. Si l'analyse ci-dessus se restreint à un contexte socio-économique, ses implications environnementales sont pourtant bien réelles : la mobilisation de ressources matérielles et ses impacts écologiques (raréfaction métaux et terres rares, émission de GES pour extraction et transport, etc.) ne sont, dans un contexte grand public, pas imputable à un seul logiciel ou service numérique, mais à leur accumulation, et une quantification de ce phénomène semble extrêmement complexe, si bien qu'on ne peut pas de manière précise estimer l'impact en ressources matérielles induit par un logiciel ou service numérique.

Deuxièmement, comment estimer la consommation électrique du logiciel propre ?

La formule communément admise dans les études scientifiques pour la consommation énergétique d'un logiciel est la suivante :
$$E_{software} = E_{comp} + E_{com} + E_{infra}$$
où
$E_{software} = \text{énergie consommée par le logiciel}$
$E_{comp}=\text{coût additionnel de calcul (CPU, mémoire, disque, GPU, ...)}$
$E_{com}=\text{coût d'échange des données au travers du réseau}$
$E_{infra}=\text{coût additionnel pour l'OS et le système (exemple JVM)}$

Cependant, cette formule n'explique pas comment calculer les membres de l'équation ($E_{comp}$,$E_{com}$,$E_{infra}$).
L'approche la plus simple est de faire tourner l'équipement sans le logiciel (on parle alors de mode idle), puis avec le logiciel et de faire la différence pour attribuer au logiciel sa consommation.
Cependant, les solutions de mesure de la consommation sont diverses et présentent certains avantages et inconvénients.

Nous étudierons donc dans la prochaine partie quelles solutions choisir pour la mesure de la consommation énergétique des logiciels.

[^17]:
    Guide méthodologique pour l'ACV des logiciels, Marc Vautier & Elisabeth Dechenaux & Thierry Leboucq & Olivier Philippot, https://greenspector.com/downloads/GREENSPECTOR_Guide_Methodologique_ACV_des_Logiciels.pdf \*[ACV]: Analyse du cycle de vie

## 2 - Solutions pour la mesure de la consommation énergétique des logiciels

Réduire la consommation électrique des équipements informatiques et réseaux est un enjeu particulièrement crucial au regard de plusieurs facteurs :

- Les émissions de GES engendrées par la production électrique contribuent au réchauffement climatique ;
- Les batteries des différents appareils mobiles (laptop, tablette, téléphones mobiles) sont constituées de métaux rares dont l'extraction et l'acheminement sont très émettrice en GES ;
- Ces batteries ont une durée de vie qui se calcule en nombre de cycle de recharge (peut différer selon les technologies, certaines technologies telles que les batteries Li-Ion ont une durée de vie fixe), donc réduire la consommation, c'est réduire la fréquence de recharge et donc allonger la durée de vie de la batterie [^19]. Cela permet donc d'utiliser moins de ressources.

Plusieurs approches existent pour la mesure de la consommation des solutions logicielles : au niveau hardware, hybride ou software.

L'approche hardware, la plus triviale, consiste à mesurer la puissance utilisée par les composants ou l'ensemble des composants, à l'aide d'un équipement du type wattmètre. Efficace et précise, cette approche est très limitée au vu du coût d'installation de ces équipements de mesure et impossible à grande échelle. Par ailleurs, elle ne nous donne aucune indication sur lorigine de la consommation au point de vue software.

Les approches hybrides nous viennent des constructeurs de composants. Elles consistent à mesurer le taux et la nature d'utilisation du composant. Les données récoltées sont extrêmement fiables, mais sont rarement remontées à l'OS et ses applications. Elles restent souvent "internes" au composant en question, ne permettant alors seulement l'optimisation de ses propres ressources . Si ces approches sont efficaces, elle relèvent d'un périmètre trop restreint pour nous intéresser : seule une vision plus globale sur la consommation propre de tous les composants peut permettre une véritable démarche d'éco-conception. Encore plus, une approche où l'on remonterait jusqu'au code permettrait une analyse plus fine pour permettre aux développeurs d'optimiser énergétiquement leur code, ce que ne permet pas la mesure hybride, ni hardware.

Néanmoins, certains fabricants comme Intel par exemple mettent à des disposition des bibliothèques, en langage C notamment, pour permettre aux développeurs de récupérer ces informations. Si le système de surveillance reste à l'échelle du composant et interne, il permet tout de même à des acteurs externes de consulter ses résultats. En revanche, une approche de la sorte ne laisse aucun résultat intégré : c'est au développeur d'utiliser la bibliothèque fournie pour son besoin. Cela représente un certain coût, nécessite une fine connaissance du langage C et de la programmation système, ce que les développeurs d'aujourd'hui tendent de moins en moins à avoir (car le marché en a moins besoin qu'avant).

Microsoft fut assez précurseur dans l'estimation de la consommation énergétique par une approche software en lançant vers la fin des années 2000 le logiciel JouleMeter. JouleMeter propose une interface graphique permettant de constater en temps réel ou sur une période donnée la consommation électrique de la machine sur lequel il s'exécute, mais aussi d'une application particulière. En revanche, cette solution n'est disponible que sur Windows et ne s'intègre pas du tout avec d'autres composants (impossible de récupérer les données et d'interagir). C'est donc difficilement industrialisable.

Par la suite, Microsoft abandonna JouleMeter pour proposer une solution intégrée dans sa plateforme de développement Visual Studio. A partir de Visual Studio 2013, le profileur Consommation d'énergie fut ajouté à l'IDE . Il permet aux développeurs de tester leur application en local en monitorant les différentes utilisations des ressources tel que le CPU, le disque, l'écran ou encore le réseau. C'est un outil puissant qui pour la première fois s'intègre à un outil de développement, mais non open source, dont le fonctionnement est donc resté secret et disponible seulement pour les développements via l'IDE Visual Studio. Malheureusement cet outil sera abandonné à son tour par Microsoft, comme expliqué par un des responsables sur le forum StackOverflow suite à une question d'un membre du forum [^20]:

> We have deprecated the Energy Consumption profiler in VS 2015 and beyond. We found that it wasn’t broadly used and the information it provided wasn’t more of an rough approximation, which had limited usability for most developers.
> Kenneth Auchenberg, Program Manager, Microsoft.

Constatant cette absence d'offres efficaces pour la mesure de la consommation électrique des logiciels avec une approche software, une équipe de recherche de l'INRIA, Spirals (anciennement ADAM) [^22], a lancé des travaux de recherches sur ces sujets. Ils ont proposé des outils pour combler le manque.

L'équipe Spirals a également développé un framework baptisé PowerAPI[^25]. Ce framework marque une rupture dans les outils de mesure de la consommation électrique, et ce pour plusieurs raisons.
PowerAPI est construit de manière modulaire. On distingue 3 tiers dans son architecture : les capteurs, les formules et la base de données. Les capteurs sont des composants applicatifs qui ont pour fonction de monitorer les appels systèmes effectués sur un composant hardware donné. Ils doivent donc être installés sur la même machine que l'application que l'on évalue. Les données brutes récoltées par les capteurs sont ensuite envoyées dans une base de données mongoDB.
Un capteur est donc fortement couplé à l'OS et à un composant hardware, pour pouvoir communiquer avec ces derniers.
Les formules sont des composants applicatifs dont le but est de transformer les données brutes récupérées par les capteurs afin d'en estimer la consommation électrique. Ces composants calculent donc, grâce à des modèles, la consommation et ré-insèrent les données finales dans la base de données initiale (ou une autre selon le paramétrage). Deux modes de lecture existent : mode "Stream", en lecture continue au fur et à mesure que les capteurs insèrent des données, ou mode "Batch", où l'exécution est unique et sur un ensemble de données fixe.
Cette modularité permet donc d'adapter les capteurs où les formules selon le besoin. Les développeurs peuvent même contribuer à rajouter des capteurs spécifiques à certains composants ou OS.
PowerAPI peut s'installer simplement via le gestionnaire de paquet python "pip", ou via "docker" (recommandé).
Les différents modules sont disponibles sur le DockerHub (répertoire de conteneurs) de PowerAPI [^27].

PowerAPI, en tant que middleware, est à la base de nombreuses autres applications.

Jalen, par exemple, est une bibliothèque java qui calcule l'énergie consommée à l'échelle du code [^21], développée par un chercheur de l'université de Lille en partenariat avec l'équipe de l'INRIA. Concrètement, un agent java s'exécute dans la JVM (Java Virtual Machine : machine virtuelle permettant d'exécuter des programmes java) et monitore les applications java qui tournent également dans la même JVM. Jalen analyse les méthodes, threads (fils d'exécution), appels disques et appels CPU au runtime (phase d'exécution) dans la JVM. Elle utilise PowerAPI pour récupérer un profil de consommation d'énergie, puis effectue une association statistique entre la consommation et son analyse du code au sein de la JVM, pour en déduire la consommation d'énergie de chaque méthode utilisée. Les résultats sont eux émis dans un fichier CSV, donnant la consommation estimée par PID (Process Identifier, identifiant du processus système) et par méthode. Si l'initiative est intéressante, elle se limite néanmoins aux langages s'exécutant dans la JVM et présentent d'autre défauts, dans l'approche même, dont nous parlerons par la suite.

JalenUnit est une évolution de Jalen, permettant d'effectuer des tests unitaires énergétiques sur les méthodes d'une application. JalenUnit fonctionne de la même manière que Jalen, mais utilise un injecteur pour exécuter de nombreuses fois les méthodes en changeant les paramètres, et ce de façon automatisée. Il peut alors effectuer un benchmark des méthodes, et produire des graphes de consommation d'énergie selon les paramètres. On évolue donc vers un niveau d'automatisation supérieur, fournissant au développeur un service de plus en plus "clé en main".

Les buts finaux de ces initiatives sont de pouvoir montrer aux développeurs les "software energy hotspots", c'est à dire les parties de l'application qui sont sources de consommation d'énergie, qui pourraient donc être optimisées.

Enfin, WebEnergyArchive [^26] est un projet initié par l'association The Green Code Lab, qui oeuvre pour l'éco-conception web et le Green IT. Ce portail web permet d'attribuer un score aux sites web, en mesurant la consommation énergétique coté client. Ils utilisent pour cela un service de GreenSpector (la startup dont nous parlions dans la partie 1), lui même basé sur PowerAPI (entre autres).

On voit donc que des solutions émergent, bien que cela soit tout récent (à partir de 2010 globalement). Ces solutions, bien qu'imparfaites, fournissent aux équipes de développement des outils afin d'avoir des mesures énergétiques, première étape nécessaire pour pouvoir éco-concevoir les logiciels et services numériques.

Mais, comment ces outils peuvent-ils être utilisés par les équipes qui conçoivent et/ou réalisent les services numériques ? Nous tenterons d'explorer les options dans la prochaine partie.

[^19]: Batteryuniversity, 2010, https://batteryuniversity.com/index.php/learn/article/how_to_prolong_lithium_based_batteries
[^20]:
    Using the energy consumption profiler in Visual Studio 2015 Community Update 3, StackOverflow, https://stackoverflow.com/a/40185263 \*[JVM]: Java Virtual Machine : machine virtuelle permettant d'exécuter des programmes java

[^21]:
    Jalen 2.0, 2014, https://github.com/adelnoureddine/jalen/tree/master/2.0
    _[PID]: Process Identifier, identifiant du processus système
    _[INRIA]: Institut National de Recherche en Informatique et Automatique

[^22]: Equipe de recherche Spirals, https://team.inria.fr/spirals/
[^25]: Power API, http://powerapi.org/
[^26]: Web Energy Archive , https://wea.greencodelab.org/fr/
[^27]: Docker Hub of powerapi, https://hub.docker.com/u/powerapi

## Intégration dans les méthodes de conception et de déploiement

Les méthodes de développement des logiciels et services numériques ont beaucoup évoluées depuis l'essor de l'informatique. En effet, la taille et la complexité des projets informatiques ont explosé, et la réussite des projets informatiques est restée très faible, comme le montre une étude réalisée par l'entreprise The Standish Group en 2013 [^28] .

Selon eux, la réussite des projets informatiques sur la période 1995 - 2010 est bien en deçà des statistiques des autres industries :

|                                                        | Petits projets (< 1 M\$) | Gros projets (> 1 M\$) |
| :----------------------------------------------------: | :----------------------: | :--------------------: |
|                        Aboutis                         |           76%            |          10%           |
| Livrés avec retard, dépassement ou périmètre restreint |           20%            |          52%           |
|                         Echec                          |            4%            |          38%           |

Face à ce constat d'échec, de nouvelles méthodes de gestion de projets ont émergé au début des années 2000, à l'initiative d'experts du domaine plaidant pour une remise en question du secteur et la reconnaissance que l'informatique reste une industrie comme les autres et que son taux de réussite ne devrait donc pas être plus faible. Ils publient en 2001 le "Manifesto for Agile Software Development" [^29], dans lequel ils posent les bases de ce qui sera par la suite appelé les méthodes agiles (SCRUM, Kanban, etc). Aujourd'hui, la plupart des projets informatiques sont menés en suivant les méthodes agiles.

Un des principes phares des méthodologies agiles est la notion d'incrément : fini l'effet tunnel où le métier ne découvre la solution que lorsqu'elle est terminée, le développement s'effectue désormais de manière itérative, avec un retour permanent de la part du client et de ses équipes métiers. La collaboration de tous les acteurs à toutes les étapes du projet permet d'améliorer sa bonne conduite et sa réussite.

Un autre aspect qui s'est développé pour améliorer la réussite des projets est les tests : jusqu'alors relégués au second plan, les tests sont alors vu comme un moyen de s'assurer de la qualité et de la conformité des projets dont la complexité est grandissante. Couplés aux méthodes agiles, on devient alors en mesure de pouvoir, à chaque livrable, connaitre l'état de qualité de la solution (ou d'en faire une estimation).

L'approche DevOps, née à la fin des années 2000 a également fortement contribué à la pénétration des tests dans les projets informatiques. DevOps prône l'association des équipes de développement et d'exploitation, en posant 4 fondements : Culture, Automatisation, Mesures et Partage. Aujourd'hui très en vogue, l'approche DevOps, associées aux méthodes agiles, séduit par le dégré de qualité qu'elle suggère, via notamment le "Continuous Testing" : on teste la solution de manière automatisée, fréquente, avant chaque livraison, et de bout en bout. L’objectif est de faire des tests rapidement et fréquents, de vérifier et d'assurer la qualité du logiciel plus tôt dans le cycle de vie.

Il existe plusieurs types de tests, le Comité Français du Test Logiciel [^30] en identifie quatre niveaux : test unitaire, test d’intégration, test système et test d’acceptation.
Tous ces différents tests n'ont pas tous la même pénétration dans les projets informatiques : les tests unitaires, par exemple, sont désormais incontournables, tandis que les tests d'acceptation sont plus rarement intégrés dans les processus de développements .
Enfin, et toujours dans le but d'améliorer la qualité des logiciels, des outils de supervision de code comme le très populaire SonarQube, outil dit de "Continous Inspection", permettent de s'abstraire du contexte d'exécution en analysant seulement la syntaxe du code, donc d'avoir une analyse de la qualité plus fine et utile pour le développeur.

Un lecteur avisé aura remarqué qu'il n'est nulle part fait notion de test de performance énergétique.

Et c'est là tout l'enjeu qui se pose aujourd'hui : alors que l'on a des solutions qui émergent nous permettant de faire ces tests de performance énergétique (voir partie II), et que les conséquences environnementales du secteur numérique sont plus fortes que jamais (voir précédemment), l'intégration des questions de performance énergétiques est un véritable challenge que le secteur entier se doit de relever.
Si l'on a collectivement su développer les outils et méthodes permettant d'augmenter la qualité des logiciels, et que l'on voit désormais des tests automatisés dans tous les projets (ou presque), la notion de performance énergétique est quand à elle complètement absente.

D'autant qu'encore une fois, des acteurs engagés développent des solutions pour faciliter l'intégration de ces tests. On a vu à titre d'exemple dans la partie précédente JalenUnit, qui permet une analyse fine du code en effectuant des tests unitaires de performance énergétique. Ce type de tests est un premier pas vers l'intégration de la performance énergétiques en permettant aux équipes de développement d'évaluer de manière simple cet indicateur pour leur solution.
GreenSpector ont quand à eux développé une offre pour tester des applications mobiles en proposant une intégration avec Jenkins, outil aujourd'hui incontournable dans les approches DevOps, étant utilisé à très grande échelle. Cette offre permet donc d'automatiser les tests énergétiques sur les applications mobiles. Elle propose un suivi complet de l'évolution au fur et à mesure du cycle de vie de l'application (en se basant donc sur les Jobs et Pipelines Jenkins), en évaluant les composants les plus gourmands en énergie.

Mais ces solutions restent peu nombreuses et balbutiantes, rendant donc difficile leur adoption par le monde professionnel.

[^28]: CHAOS Research report, The Standish Group, https://www.projectsmart.co.uk/white-papers/chaos-report.pdf
[^29]: Manifesto for Agile Software Development, https://agilemanifesto.org/
[^30]: Comité Français du Test Logiciel, http://www.cftl.fr/

## Discussion

Nous avons tenté, dans ce document, de présenter succinctement les impacts du numériques et d'explorer pourquoi et comment la performance énergétique des logiciels doit être une indicateur à prendre en compte dans tout projet de développement.

Nous nous sommes focalisés dans ce document sur les aspects "techniques" de la conception des logiciels. Cependant, il est à noter que le volet le plus efficace pour l'éco-conception d'une solution numérique repose sur l'aspect fonctionnel : la conception fonctionnelle d'un logiciel a des impacts directs sur sa consommation énergétique, et le phénomène d'obésiciel que nous avons mentionné plus haut est sans nuls doutes le point le plus important à traiter si le secteur veut pouvoir contrôler l'énergie qu'il consomme.

Nous nous sommes concentrés sur la réduction de la consommation énergétique des logiciels à l'utilisation. Hors, cette consommation n'est pas le seul impact du secteur : une grosse partie du bilan C0<sup>2</sup>e du numérique repose sur l'extraction, la transformation et l'acheminement des ressources premières nécessaires à la construction des composants matériels, dont notamment les tristement célèbres "terres rares". Ces métaux, indispensables à la miniaturisation des composants, et dont les stocks s'épuisent de manière drastique, voient leur transformation du minerai en métal extrêmement polluante.

La performance énergétique ne doit donc pas être la seule piste à creuser pour adresser les menaces que le numérique fait peser sur l'environnement.

Enfin, on se doit également de souligner que le numérique, s'il a des impacts importants sur l'environnement, peut également participer à la réduction des externalités environnementales d'autres secteurs : citons par exemple les smarts-grid où le numérique peut permettre d'alléger le bilan environnemental des bâtiments, quartiers et villes.

## Conclusion

En guise de conclusion, nous avons parcouru donc dans ce document quels étaient les impacts actuels du secteur des TICs sur l'environnement, et plus particulièrement sur la consommation énergétique des équipements supports du numérique. Si des optimisations matérielles conséquentes ont été effectuées, la partie logicielle reste balbutiante sur la mise en place de mesures pour la réduction de la consommation énergétique du numérique. L'effet rebond que l'on observe suite aux avancées des technologies matérielles notamment font grimper l'addition énergétique du numérique dans le monde.
Les méthodes d'éco-conception traditionelles telles que l'ACV sont en l'état assez inadaptées aux services numériques, dont le couplage logiciel/matériel complique l'évaluation. C'est pourquoi des solutions pour la mesure de la consommation propre à un logiciel émergent, mais ne parviennent pas pour l'instant à s'offrir une place au sein des équipes de développements dans le milieu professionnel.
Il faut donc aujourd'hui, au regard des impacts environnementaux du numérique et à l'image de ce que certains acteurs essayent de faire, permettrent à ces solutions de s'intégrer facilement aux méthodes et outils actuellement utilisés, pour que la performance énergétique devienne une métrique primordiale dans l'évaluation de la qualité logicielle.
Des initiatives politiques se mettent en place, à l'image du Label Numérique Responsable[^31] lancé par le Ministère de la Transition Ecologique et Solidaire, dont l'axe 5.1 du référentiel traite d'éco-conception logicielle.

[^31]: Label Numérique Responsable, https://label-nr.fr/comment/#referentiel
