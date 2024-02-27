---
title: Cloud sustainability - Master's thesis
publishDate: "31 Aug 2020"
updatedDate: 31 August 2020
tags: ["university", "ecodesign", "french"]
draft: false
description: "My master's thesis on the sustainability of Cloud services"
---
# Mémoire de fin d'études

## Sujet

* Impacts environnementaux de l'usage du "Cloud" pour un SI
* Cloud & DSI : analyse du point de vue environnemental
* Cloud vs on-premise, quelle solution pour minimiser ses impacts environnementaux ?

## Remerciements

Je tiens à remercier toutes les personnes qui ont contribuées au succès de cette année.
J’adresse mes remerciements à:

* Mon maitre d’apprentissage Monsieur Boris LIGER,pour son soutien et son suivi tout au long de ces trois ans.
* Mon tuteur enseignant Monsieur Christian KHOURY, pour m’avoir suivi cette année, et pour ses conseils.
* Enfin, je remercie toute l’équipe pédagogique de l’EFREI, qui m’a enseigné les connaissances qui m’ont permis de mener à bien mes missions, ainsi que le CFA SACEF pour son suivi.

## Abstract

The ICT sector has been specifically targeted multiple times due to its growing environmental footprint. The Cloud, which has emerged in the last two decades, significantly contributed to the massive adoption of IT in the modern world and the raise of internet traffic. Hence, in this document we investigate on how does the Cloud impact electricity consumption and carbon emissions. We show that the Cloud, which represents 16% of the ICT global electricity consumption, has made huge efforts on optimizing its infrastructres, and specifically the servers power consumption. The virtualisation technology and the opportunity it offers in reducing the amount of equipment needed for a given numbers of applications has contributed to make the Cloud an optimised hosting option. On top of that, datacenters have significantly reduced the energy used to cool down the servers, and despite a massive raise in internet traffic, datacenters' electricity consumption only raised by 6% in the last decade. This is also due to datacenters being nowadays seen as public matter, and thus being subject to building eco-design and green innovations. Renewable energy is also a good opportunity in making datacenters even greener, especially in countries where the electricity is very carbon-intensive, such as the USA for instance. Studies are being conducted to match IT needs with the variable electricity that renewables generate.
Nevertheless, there are still issues that the sector, and more specifically Cloud providers and datacenters' owner will have to tackle, such as the bound effect that such optimized infrastructures provide, and the continuous raise in demand that optimization won't necessarily compensate. Hence, we can't conclude that Cloud is green by nature. It sure is an energy-optimized hosting solution, but there are also other parameters (carbon-intensive electricity, bad usage of Cloud technologies, frequent server replacement, etc) that can overcome this optimization and make it a not so sustainable option.

## Introduction
Le contexte environnemental actuel ne laisse que peu de place au doute quant à la nécessité d'une action commune tournée vers la préservation de l’environnement, et notamment la réduction des émissions de gaz à effets de serre (GES). Le secteur des technologies de l'information et des communications (TIC), longtemps épargné de ces considérations environnementales du fait de sa fausse réputation d'industrie immatérielle, ne dupe aujourd'hui plus personne, et se voit donc sommé à son tour de mettre en œuvre des mesures drastiques pour réduire les émissions de GES qui lui sont dues.

Les travaux préliminaires sur le sujet -ce que l'on a appelé initialement le "Green IT" - ont établi un modèle de ventilation de la consommation d'énergie ainsi que de l'impact environnemental. On retrouve donc ainsi les trois composantes physiques de que représente le numérique aujourd'hui : les terminaux (ordinateurs, smartphones, objets connectés), le réseau (FAI principalement), et la traditionnelle partie serveur (datacenters).

Parallèlement à cela, le secteur est toujours en très forte croissance, particulièrement grâce au "Cloud". En effet, derrière ce mot parfois mystérieux pour les profanes se cache un ensemble de technologies qui ont profondément modifié les usages du numérique. Mais le Cloud reste mal défini, de par la multiplicité des acteurs qui emploient le terme en lui attribuant différentes significations. Tous s'accordent tout de même sur une définition générique que l'on pourrait formuler comme tel :

>Le terme de "Cloud" fait référence aux technologies permettant d'accéder à des ressources informatiques distantes depuis un réseau.

Cette définition générique est en réalité très imparfaite car elle n'explique pas pourquoi la notion de Cloud a émergé ces dernières années, alors même que l'accession à des ressources informatiques distantes est bien plus ancienne que le terme lui même (c'est d'ailleurs la base et le but même de l'Internet).
En réalité, on distingue deux grandes définitions du Cloud selon les interlocuteurs. 

Les premiers sont les usagers de services numériques dits "Cloud" à destination du grand public, et font référence au traitement et stockage de leurs données par un prestataire de service. Prenons l'exemple de M. Michu, fraîchement rentré de vacances, qui décide de mettre en ligne ses photos sur son espace personnel Google Drive : il dira alors que ses photos sont stockées dans le Cloud.
(Ce document utilisera l'acronyme de M. Michu pour illustrer les exemples. Cette pratique est empruntée à Stéphane Bortzmeyer)

Les seconds sont les professionnels du numérique, qui lorsqu'ils emploient le terme de Cloud font référence aux nouveaux services d'hébergement distants. Ces services tirent parti de technologies diverses, mais ayant toutes les caractéristiques suivantes :

* Elles sont fluides et permettent la configuration et reconfiguration dynamique de ressources informatiques
* Elles sont disponibles en permanence et de manière universelle depuis le Web
* Elles sont élastiques et permettent l'allocation dynamique de ressources
* Elles mettent en place la mutualisation des ressources informatiques

Ces technologies Cloud ont été très largement adoptées par l'industrie, comme le montre une enquête réalisée par Flexera : selon elle, 94% des professionnels du numérique interrogés utilisent des services Cloud en 2019. [^1] 
Cela s'explique de différentes manières, qui nécessiteraient une analyse détaillée qu'on ne réalisera pas ici. Néanmoins, une de ces raisons justifie qu'on s'y arrête : l'adoption du Cloud s'inscrit dans la tendance de servicisation du numérique, observée depuis le début du siècle. On définit sommairement la servicisation comme le passage d'une logique de prestation de fourniture d'un produit à une logique de prestation de services. Dans le cas du Cloud, ce sont les équipements informatiques (serveurs, équipements réseaux) dont il est question.

On distingue traditionnellement plusieurs types de services Cloud.

Cet essor extraordinaire du Cloud ces dernières années n'a été possible que grâce aux infrastructures, toujours plus impressionnantes, des fournisseurs de services Cloud : les fameux datacenters (ou datacentres en français). Ce sont souvent de grands bâtiments concentrant en leur sein des centaines, voire des milliers, de serveurs informatiques. Ces serveurs consomment de l'électricité, et chauffent pendant leur utilisation. C'est la raison pour laquelle les datacenters disposent d'équipements de climatisation, afin de maintenir une température idéale pour le bon fonctionnement des machines.
Or ces datacenters ont concentré les critiques qui ont été faites du Cloud, lorsque le grand public a commencé à ouvrir les yeux sur l'imposante matérialité du numérique.

Ces critiques sont compréhensibles et légitimes, quand on sait que les datacenters représentaient à eux seuls entre 1,1 et 1,5% de la consommation d’électricité mondiale en 2010.[^2]
La fabrication et la fin de vie des équipements informatiques nécessaires aux datacenters contribuent eux aussi à alourdir le bilan environnemental.

Mais la critique ne peut pas s'adresser qu'aux gestionnaires des datacenters : c'est l'usage, en tant que finalité, qui doit être questionné. Reprenons l'exemple de M. Michu qui stocke ses photos de vacances sur son espace Google Drive. Peut-il uniquement blâmer Google pour la pollution générée par le stockage de ses photos ? C'est lui qui en premier lieu a choisi d'utiliser ce service.
*NB: en aucun cas ici je ne prétends que Google est exempt de tout reproche. Il s'agit simplement de souligner le fait que M. Michu détient aussi une part de responsabilité : il aurait du se renseigner sur l'impact de l'utilisation du service de stockage Google Drive.*

Dans un contexte professionnel, et dans l'optique de minimiser l'impact du système d'information sur l'environnement, l'usage de services Cloud doit par conséquent faire l'objet d'un questionnement sur le plan environnemental.

Mais comment l'usage de services Cloud impacte t-il le bilan environnemental des systèmes d'informations des entreprises ? Le Cloud est-il vraiment l'ennemi de l'environnement, et son adoption massive est-elle à condamner ?

## Problématique
Quelle stratégie d'hébergement privilégier pour minimiser l'impact de son SI sur l'environnement ? 


**Introduction & Définition du Cloud**

Dans cette première partie, nous définissons la performance énergétique des TICs comme objectif actuel de la filière et rappelons les impacts environnementaux toujours grandissants dûs à la production, l'utilisation et la fin de vie des équipements du numérique.
Nous introduirons également la notion de Cloud, telle qu'habituellement définie par les acteurs scientifiques et industriels, en la présentant à la fois sous l'angle fonctionnel, mais également technique en déclinant les infrastructures nécessaires à son fonctionnement (datacenters / réseaux).

**Performance énergétique des datacenters**

Dans cette seconde partie, nous analyserons la performance énergétique des datacenters, éléments centraux du Cloud, en montrant que ces infrastructures sont de plus en plus optimisées, tant du point de vue de l'utilisation des équipements informatiques (haut taux d'utilisation des serveurs) que du point de vue des infrastructures externes (systèmes de refroidissement notamment). 
On en conclura que lorsque l'on axe l'analyse sur l'énergie consommée par unité de calcul, le Cloud est effectivement très efficace et peu gourmand en énergie.

**Pondération par les usages**

Dans cette troisième partie on nuancera les résultats précédents en prenant en compte les usages qui sont faits du Cloud.
En effet, l'efficience énergétique présumée du Cloud est à mettre au regards de ses usages : le PaaS par exemple profite complètement des optimisations du Cloud, alors que le IaaS peut être contre-productif.
Il faut par conséquent penser le Cloud non pas comme un mode d'hébergement uniquement, mais comme un contexte d'exécution qui influe sur l'architecture des systèmes applicatifs du SI (si l'on souhaite en tirer son plein potentiel d'optimisation énergétique). 
On souhaite ici appuyer le fait qu'une migration vers le Cloud implique l'ensemble des composantes du SI, et pas seulement le département des opérations (administrateurs systèmes).

**Intégration des Datacenters dans leur environnement**

Dans cette partie, nous poursuivrons l'analyse en étudiant cette fois l'intégration des datacenters au sein de leur environnement (géographique, réseau internet, réseau électrique). En effet, les datacenters, en tant que centres physiques, sont indissociables de leur environnement. On s'intéressera donc d'abord à l'impact des datacenters sur la consommation électrique du territoire où ils sont installés, et à la carbonation de l'énergie électrique du territoire (qui contribue directement au bilan environnemental des datacenters).

Un aspect sociétal est également à prendre en compte : le datacenter utilise massivement des ressources physiques via ses équipements informatiques et réseau. Nous étudierons aussi les possibilités qu'offrent les énergies renouvelables dans la performance énergétique des datacenters, particulièrement lorsqu'ils sont implantés dans des territoires où le mix électrique est fortement carboné.


**X- Effets rebond et limites à l'efficience énergétique du Cloud**

Dans cette cinquième partie, nous analyserons les limites et menaces à la performance énergétique du Cloud, qu'elles soient fonctionnelles, organisationnelles ou techniques. On mettra notamment en exergue les conséquences qu'une utilisation massive du Cloud peut avoir. L'approvisionnement en matériel et la gestion de la fin de vie de ce même matériel est un axe à ne pas négliger, tant ces ressources alourdissent l'impact des datacenters sur l'environnement (souvent bien plus que la seule consommation électrique).

## Performance énergétique des datacenters

Le Cloud est indissociable du datacenter : il constitue la couche matérielle et physique permettant le bon fonctionnement des services proposés. Néanmoins, les datacenters ne sont pas exclusivement dédiés au Cloud : de nombreuses entreprises disposent de leur propre datacenters, ou sous-traitent, mais sans nécessairement tirer parti des technologies du Cloud. 

> La définition du datacenter est détaillée dans les normes EN 50600 et IEC30164, un datacenter comporte :
>
> * Des espaces dédiés à l’hébergement, l’interconnexion et l’utilisation d’équipements informatiques et de télécommunication. Ces équipements délivrent des services de calcul, stockage et transport de données.
> * Des espaces dédiés aux infrastructures techniques associées aux process suivants
>    
>   + Transformation et sécurisation de l’électricité
>   + Climatisation (production de froid et traitement d’air)
>   + Sécurité et sûreté
>   + Secours électrique
>        
> * Des espaces tertiaires dédiés à l’accueil, et quelques bureaux dédiés au Data center
> * Des espaces dédiés à la logistique (quai de livraison, déballage, préparation, stockage, déchets)


Contrairement aux idées reçues et au nom trompeur, le datacenter n'a pas pour seul rôle de stocker des données. En effet, il sert aussi et surtout à exécuter des applications, qui nécessitent des ressources physiques telles que de la mémoire vive ou de la puissance de calcul (CPU) principalement. 
Les datacenters sont régulièrement pointés du doigts en raison de leur consommation énergétique. Selon une étude de Andrae & Edler [^3], actualisée par le think tank The shift project en 2018, la consommation des datacenters représente 19% de la consommation énergétique totale de la filière des TICs, et près de 1% de la consommation énergétique mondiale. Ironiquement, c'est grâce à la prolifération des datacenters que la prise de conscience de l'impact du numérique sur l'environnement s'est initiée.

Deux raisons majeures expliquent les raisons qui ont poussé les propriétaires de datacenters à mettre en œuvre des optimisations  ces dernières années afin d'améliorer la performance énergétique : 
- les critiques émises à l'égard de ces centres de données, qui ont concentré longtemps les reproches faits aux TICs sur le plan énergétique et environnemental
- l'avantage économique que les optimisations énergétiques représentent pour les gérants des datacenters. La consommation d'électricité représente en effet 49% du budget annuel d'un datacenter ([^1]), et constitue donc un poste important de réduction des coûts.


Afin de pouvoir quantifier et mesurer la performance énergétique de ces datacenters, des indicateurs ont été mis au point, et parmi eux le désormais célèbre PUE, pour Power Usage Effectiveness. Cet indicateur correspond au rapport entre l'énergie totale consommée par le datacenter et l'énergie totale consommée par les équipements informatiques qui le composent. En effet, de nombreux équipements annexes sont responsables d'une partie de la consommation énergétique des datacenters, tel que les systèmes de refroidissement utilisés pour compenser la chaleur dégagée par les serveurs et garder une température globale optimale à la performance de ces mêmes serveurs. D'autres équipements propres aux infrastructures (Luminaires, systèmes de chauffage, systèmes de sécurité, etc) participent également à la facture énergétiques de ces centres. 

![Figure 1. Indicateur d'efficacité énergétique, différents points de mesure. Source[^1]](./figure_PUE.png)


En 2016 un groupement d'acteurs composé de l'ATEE, Enr'CERT, l'ADEME et le ministère de l'environnement a recueilli des données sur 87 datacenters français, en particulier sur les critères énergétiques et environnementaux, et ont analysés ces données pour en tirer des conclusions disponibles dans le rapport de l'étude [^1]. On remarque que le PUE moyen sur les centres sondés s'élevait à 1,8 : cela signifie donc que pour 1kWh d'énergie consommée pour les équipements informatiques (serveurs et équipements réseaux), l'énergie consommée par le datacenter sera de 1,8 kWh.
En effet la combinaison de la concentration des équipements dans un seul et même endroit, les problématiques de sécurité et de résilience en relation avec la QoS (Quality of Service) que les gérants de ces datacenters promettent à leurs clients, ainsi que d'autres éléments annexes n'apparaissant qu'à l'échelle de ces centres, expliquent donc ce rapport moyen de 1,8, qui pourrait surprendre un usager lambda d'équipements informatiques étranger à ces problématiques. Il est intéressant de noter que les équipements servant au refroidissement alourdissent considérablement la facture énergétique : ils représentent à eux seuls 40% de la consommation d'électricité de ces centres, selon ce même rapport, contre 50% pour les équipements informatiques.

En revanche, le PUE ne renseigne pas sur la consommation générale du datacenter, mais seulement sur sa répartition. Il est donc à associer à d'autres indicateurs pour pouvoir tirer une vision d'ensemble de la consommation énergétique de ces centres. 
C'est ce qu'ont donc fait deux chercheurs de l'université de Stanford, dans des séries d'études régulièrement mises à jour avec de nouvelles données, et dont la plus populaire fut sans doutes celle publié en 2016[^2]. Les résultats sont équivoques : tous les indicateurs d'efficacité énergétiques ont progressé dans les datacenters sur la période 2000 - 2016.
Voyons plus en détails quels sont ces indicateurs et ce qu'ils traduisent de l'évolution du hardware sur le plan énergétique.

Nous avons déjà parlé du PUE - l'étude montre qu'il a  été divisé par 2 depuis 2000 : il est passé de 3 à 1,5. Néanmoins le PUE ne renseigne que sur la part d'énergie consommée qui est imputable aux équipements informatiques, et ne suffit donc pas seul à pouvoir conclure sur les tendances énergétiques des datacenters.

Il existe différentes façons de mesurer l'efficacité des ordinateurs, mais l'une des plus parlantes et des plus faciles à calculer est le "Peak Output Efficiency" (l'efficacité énergétique du calcul à la puissance computationnelle maximale) généralement mesuré en calculs par kilowattheure. 
Cet indicateur est pertinent car l'essentiel de la consommation énergétique d'un ordinateur ou serveur provient de ses processeurs CPU & GPU.
Il se calcule de la manière suivante : 

$$
POE = \frac{O^{max}}{E^{max}}
$$

Avec 
* $POE$ : Peak Output Efficiency
* $O^{max}$ : nombre d'opération effectuées à puissance computationnelle maximale sur 1heure 
* $E^{max}$ : électricité consommée à puissance computationnelle maximale sur 1 heure (kWh)

Pendant longtemps, les performances des processeurs et l'efficacité énergétique de la puissance de calcul ont progressé conjointement à un rythme rapide. Les gains ont commencé bien avant 1965, l'année où Gordon Moore a publié sa première projection . Le rendement de pointe a doublé environ tous les 1,6 ans depuis l'aube de l'ère informatique [^7]. En conséquence, le POE s'est amélioré d'environ dix ordres de grandeur entre le milieu des années 1940 et l'an 2000 - un facteur de plus de dix milliards sur plus de cinq décennies.

Au tournant du millénaire, les difficultés physiques conséquentes à la miniaturisation des circuits ont ralenti la croissance du Peak Output Efficiency, de sorte qu'il ne doublait que tous les 2,6 ans environ, comme le montre la figure 2 ci dessous. Les fabricants de processeurs se sont alors tournés vers des changements d'architecture pour compenser le ralentissement, tels que l'utilisation de plusieurs cœurs pour les unités centrales, mais ils n'ont pas pu maintenir les taux de croissance historiques de performance et d'efficacité. La différence entre ces deux taux de croissance est importante : en doublant tous les un an et demi, on multiplie par cent l'efficacité tous les dix ans, alors qu'un doublement tous les deux ans et demi se traduit par une multiplication par seize seulement (facteur 6).


![Figure 2. Evolution du POE entre 1985 et 2020. [^3]](./processor-efficiency.png)


Heureusement, les gains d'efficacité déjà obtenus au cours du dernier demi-siècle ont été plus que suffisants pour lancer le numérique dans une nouvelle ère : dans une large mesure, l'innovation concernant le matériel informatique est passée de la construction des processeurs les plus rapides à
la construction de processeurs à très faible consommation, qui peuvent être utilisés non seulement dans les smartphones, les tablettes et les appareils portables, mais aussi dans des environnements informatiques à grande échelle tels que les datacenters. Par conséquent, la maximisation du POE n'est plus l'objectif : le secteur s'est davantage concentré sur la réduction de la consommation moyenne d'électricité.

Peu d'appareils informatiques fonctionnent en permanence à pleine puissance computationnelle (à quelques rares exceptions près). Au contraire, la plupart des ordinateurs sont utilisés de manière intermittente, et fonctionnent généralement à leur puissance de calcul maximale pendant 1-2 % du temps [^8]. Une étude de 2007 s'est penché sur les patrons de conception permettant aux équipements de tendre vers la  "proportionnalité énergétique". Cela implique que la consommation d'électricité et la puissance de calcul deviennent corrélées, et la consommation d'électricité devient idéalement nulle (ou presque) lorsque l'appareil est inactif [^9]. On assiste alors à un rapport linéaire entre l'énergie et la puissance de calcul. Néanmoins, en pratique, le rapport suit plutôt une fonction affine, avec une consommation électrique minimale atteignant tout de même 20% de la consommation électrique maximale, et non 0, selon cette même étude.

C'est donc tout naturellement qu'entre en jeu la nécessité d'un indicateur qui reflète mieux cette consommation "moyenne" des équipements. J. Koomey, un des deux chercheurs publiant cette série d'études et considéré comme l'expert mondial de l'efficacité énergétique des datacenters et équipements informatiques, a donc proposé le "Typical-Use Energy Efficiency" (TUEE), qui se calcule comme suit : 

$$
TUEE = \frac{O^{typ}}{E^{typ}}
$$

Avec 
* $TUEE$ : Typical-Use Energy Effiiciency
* $O^{typ}$ : nombre d'opérations effectuées à puissance computationnelle typique sur 1an 
* $E^{typ}$ : électricité consommée à puissance computationnelle typique sur 1 an (kWh)

J. Koomey propose une comparaison de l'évolution de ces deux indicateurs sur la période 2008-2020, présenté en figure 3.


![Figure 3. Evolution du POE et TUEE sur la période 2008-2020.[^3]](./poe-tuee-evolution.png)

On observe donc bien que lorsque la croissance du POE s'est vue ralentie, celle du TUEE s'est quand à elle accélérée. Globalement, l'étude conclue que l'efficience énergétique des serveurs s'est considérablement améliorée, en particulier sur ces deux dernières décennies, mais que si historiquement le POE était le moteur de cette efficience énergétique, c'est désormais la croissancedu  TUEE qui l'explique en grande partie.

Cependant, tous ces indicateurs cités ci-dessus ne nous renseignent que sur l'efficacité, et pas sur la consommation globale. Or, la quantité de données échangées ces dernières années a explosé. L'adoption massive de l'informatique par le grand public et les organisations, ajouté au foisonnement des équipements mobiles, à l'arrivée de l'Internet des objets ... ont fait basculer le numérique dans une autre dimension.
Le rapport "Digitalization and energy" de l'IEA (International agency of Energy) publié en 2017 [^10] montre que le traffic internet mondial a été mutiplié par 2 000 entre 2007 et 2017. L'année 2017 marque aussi le tournant où plus de la moitié de la population mondiale utilise désormais internet. Cette hausse du traffic entraine également logiquement une hausse du traffic entrant dans les datacenters, une hausse du nombre de datacenters, une hausse du nombre de serveur par datacenter … c'est une véritable explosion.

En 2020, ces mêmes chercheurs de l'université de Stanford ont publié une nouvelle étude intitulée "Recalibrating global data center
energy-use estimates" [^3], et dont les conclusions sont partagées par le rapport "Data Centres and Data Transmission Networks" de l'IEA publié en juin 2020 : sur la période 2010-2020, et malgré l'explosion du traffic, la consommation énergétique des datacenters est restée stable (hausse de seulement 6% sur la période).

Alors comment cela est-ce possible ? Le graphique présenté en figure 4, issue de l'étude de J.Koomey et al. [^3], résume particulièrement bien les forces en jeu dans cette équation.

![Figure 3. Trends in global data center energy-use drivers [^3]](./trend-global-data-center-energy.png)

On retrouve sur ce graphique l'explosion du traffic auquel les datacenters font face, ainsi que les optimisation énergétiques du matériel et des infrastructures effectués (drivers "Average PUE" et "Typical server energy intensity"). Néanmoins, les deux postes les plus impactants en ce qui concerne la maitrise de la consommation d'énergie ne sont pas expliqués par les seuls gains d'efficacité du matériel.

Pour pouvoir comprendre ce phénomène, il faut s'intéresser plus en particulier à ce que le Cloud signifie du point de vue du logiciel et de l'architecture. 

## Pondération par les usages

Nous avons brièvement défini en introduction ce que l'on entendait par le terme "Cloud". 

Il existe principalement 2 facteurs qui ont contribué à l'émergence du Cloud ces dernières années : 

* L'augmentation du débit réseau disponible qui a permit l'émergence de la servicisation
* L'arrivée puis le développement des technologies de virtualisation et d'orchestration

Attardons nous un peu plus sur ce deuxième point fait référence. On considère aujourd'hui trois types de provisionnement d'environnement informatique pour l'exécution et le stockage des applications dans le Cloud. Ces trois unités d'hébergement sont definies ci dessous :

*1 - Machine physique*

Une machine physique, aussi appelé serveur dédié, est une machine (ordinateur) qui est entièrement allouée en termes de ressources physiques (RAM, CPU, ROM, etc.) aux applications qu’elle héberge. Elle est par conséquent plus performante que les autres types de serveurs car elle n’embarque pas de couche de virtualisation. Néanmoins, une place physique plus importante est nécessaire avec ce type d'hébergement : en effet, une carte mère, un processeur et tous les composants informatiques peuvent prendre une grande place si le nombre de serveurs est important (avec par conséquent un plus grand système de refroidissement au sein du datacenter). Par ailleurs, pour augmenter ou diminuer les performances d’un serveur, il est  nécessaire d’avoir un technicien qui fasse l’ajout ou le retrait d’un composant : l'absence de virtualisation empêche toute élasticité. On retrouve le principe de machine physique dans le cloud sous le nom de «bare metal», toujours utilisé pour ses hautes performances.

*2 - Machine virtuelle *

Popek et Goldberg, dans une étude publiée en 1974, ont défini pour la première fois le terme «machine virtuelle» comme "une copie efficace et isolée d'une machine informatique réelle"[^6]. Les machines virtuelles n'ont aucune dépendance directe avec le matériel physique. Le matériel physique qui fait tourner la machine virtuelle est généralement appelé "hôte", et la machine virtuelle émulée sur cette machine est généralement appelée "invité". Un hôte peut émuler plusieurs invités, chacun d'entre eux pouvant émuler différents systèmes d'exploitation et plates-formes matérielles. La motivation pour créer des machines virtuelles provient du désir de faire fonctionner plusieurs systèmes d'exploitation, afin de permettre le partage du temps entre plusieurs systèmes d'exploitation mono-tâches. À mesure que la technologie évolue en matière de mémoire virtuelle à des fins de virtualisation, de nouveaux systèmes de sur-engagement de la mémoire peuvent être appliqués pour gérer le partage de la mémoire entre plusieurs machines virtuelles sur un système d'exploitation informatique. Il peut être possible de partager des pages de mémoire (mémoire virtuelle) dont le contenu est identique entre plusieurs machines virtuelles fonctionnant sur la même machine physique. Cela peut aboutir à leur mise en correspondance avec la même page physique par une technique appelée "kernel same-page merging" (KSM). Cette technique est particulièrement utile pour les pages(unité de mémoires de même taille en mémoire virtuelle) en lecture seule, telles que celles contenant des segments de code, ce qui est le cas de plusieurs machines virtuelles exécutant des logiciels identiques ou similaires, des bibliothèques logicielles, des serveurs web, des composants d'intergiciels, etc. Les systèmes d'exploitation invités n'ont pas besoin d'être compatibles avec le matériel hôte, ce qui permet d'exécuter différents systèmes d'exploitation sur le même ordinateur (par exemple, Windows, Linux ou des versions antérieures d'un système d'exploitation) pour prendre en charge de futurs logiciels. La virtualisation implique par nature une consommation de ressources informatiques moindre de par la plus grande part d'utilisation des équipements informatiques sous-jacents.

*3 - Conteneur*

Un conteneur d’application est une méthode de virtualisation qui permet de regrouper le code d’une application et toutes ses dépendances dans une seule et même unité indépendante. Les applications deviennent ainsi indépendantes de l’environnement dans lequel elles s’exécutent. La virtualisation se fait donc au niveau de l’application et non au niveau de l’infrastructure ce qui leur permet d’être déployée correctement sur n’importe quel environnement. Cette indépendance vis-à-vis de l’environnement permet également d’obtenir une application aux comportements prévisibles. Ce niveau d’abstraction est possible grâce à deux caractéristiques:

* L’espace de noms (namespace) est une caractéristique du noyau Linux (système d'exploitation sur lequel l'immense majorité des serveurs tournent). Elle consiste à partitionner les ressources du noyau de telle sorte qu'un ensemble de processus ne peut accéder qu’à certaines ressources. Cette caractéristique fonctionne en ayant le même espace de noms pour un ensemble de ressources et de processus, mais ces espaces de noms font référence à des ressources distinctes. Les ressources peuvent exister dans plusieurs espaces.
* En 2006, des ingénieurs de Google initialisent des travaux sur les "control-group" (cgroups) qui seront intégrés à la version 2.6.24 du noyau Linux.Cette fonctionnalité du kernel linux permet de limiter, de comptabiliser et d’isoler l'utilisation de ressources (CPU, mémoire) d'un ensemble des processus. Ces processus peuvent être mis dans des namespaces, afin que des ensembles de processus partagent les mêmes limites de ressources. Une machine peut avoir plusieurs namespaces, chacun avec les propriétés des ressources imposées par le noyau. L'allocation des ressources par namespaces peut être gérée de manière à limiter la quantité globale de CPU, de RAM qu'un ensemble de processus peut utiliser. Bien que ce ne soit pas une fonctionnalité originale, les cgroups sous Linux ont finalement été retravaillés pour inclure une fonctionnalité appelée isolation de cgroups. L'idée de l'isolation de namespaces n'est pas nouvelle en soi, et Linux disposait déjà de plusieurs types d'isolation de namespaces. L'isolation des cgroups est un niveau supérieur d'isolation qui assure que les processus au sein d’un cgroup dans un namespace soient indépendants des processus des autres namespaces. Concètement, un namespace est associé par conteneur au niveau de la machine hôte, pour les isoler entre eux.



*Comparaison VM vs Conteneur*

* Isolation : les VM permettent l’isolation matérielle, et chaque VM (cadre violet) nécessite quand même de contenir un OS complet. Les conteneurs quant à eux font de l’isolation au niveau du processus, avec le partage de l’OS, ce qui permet d’avoir une taille de conteneur bien moindre par rapport à une VM.

* Scalability : une VM peut évoluer facilement en termes de ressources mais doit comprendre dans tous les cas l’OS ce qui alourdit la taille et ne permet pas une mise à l'échelle rapide. Alors que les conteneurs eux contiennent uniquement l’application et ses dépendances, qui sont par nature prêts à être optimisé. Leur faible taille permet également une bonne vélocité.

* Portabilité : les VM sont fortement couplées avec l’hyperviseur ce qui ne permet pas une portabilité à travers n’importe quel hyperviseur et ne fournit pas de packaging portable pour les applications. Les conteneurs n’étant pas dépendants à un hyperviseur, ils sont fortement portables. Que ce soit sur un serveur physique, une VM ou dans le cloud; l’infrastructure n’empêche pas le fonctionnement d’un conteneur


Bien que le provisionnement de machine physique (bare-metal) soit parfois possible chez les fournisseurs de services Cloud, l'immense majorité des environnements reposent sur des VMs ou container, donc sur de la virtualisation. Cette virtualisation permet des économies d'échelles conséquentes, à travers la mutualisation, l’optimisation et donc la diminution des moyens physiques (serveurs, disques etc..) pour gérer une quantité équivalente
de données. Selon les opérateurs, la consolidation des serveurs permettrait de réduire les coûts en matériel et exploitation de 50%, et les coûts énergétiques jusqu’à 80%. C'est cette virtualisation qui explique le driver "Average number of servers per workload" de l'étude précédemment citée. 

Par ailleurs, les fournisseurs de Cloud proposent de plus en plus des service dits "managés" au sein de leurs plateformes de services aussi appelées PaaS (plateformes as a service), à l'inverse du plus traditionnel IaaS (Infrastructure as a Service).

L'IaaS, ou Infrastructure-as-a-Service, est la solution la plus proche d'une infrastructure sur site. Les services d'infrastructure, tels que le stockage et la virtualisation, sont fournis par un tiers lorsque le client en a besoin par l'intermédiaire d'un cloud sur Internet. Ces services sont facturés selon l'utilisation. En tant qu'utilisateur, vous êtes responsable du système d'exploitation ainsi que des données, applications, solutions de middleware et environnements d'exécution. Le fournisseur, quant à lui, gère le réseau, les serveurs, les fonctions de virtualisation ainsi que le stockage, et y donne accès en fonction des besoins. 

Le modèle PaaS, ou Platform-as-a-Service, s'éloigne un peu plus de la gestion d'infrastructure entièrement sur site. Le fournisseur héberge le matériel et les logiciels sur sa propre infrastructure et met à disposition de l'utilisateur une plateforme via Internet, sous la forme d'une solution intégrée, d'une pile de solutions ou d'un service. D'abord destiné aux développeurs et aux programmeurs, le PaaS permet à l'utilisateur de développer, d'exécuter et de gérer ses propres applications, sans avoir à créer ni entretenir l'infrastructure ou la plateforme généralement associée au processus.

L'adoption de plus en plus grande des solutions dites "managées", c'est à dire où le fournisseur de service est responsable de la gestion de l'infrastructure, mais surtout de son dimensionnement, permet aujourd'hui à ces mêmes fournisseurs de réaliser des économies importantes en ajustant au plus juste le dispositif au besoin, tout ceci en temps réel. On peut notamment citer les bases de données, qui sont aujourd'hui massivement mutualisées par ces services managés, et qui permettent donc encore une fois d'énormes économies d'échelle. C'est enfin ce qui explique le dernier driver "Average storage drive energy use" de l'étude de J.Koomey et al.

C'est ainsi que Microsoft, dans une étude publiée en 2018, ont pu montrer que l'adoption du Cloud peut permettre de réduire considérablement les externalités négatives liées au numérique, comme le montre la figure 4.

![Figure 4, The carbon benefits of Cloud Computing. []](./microsoft-energy-savings.png)

Néanmoins, le Cloud en lui même ne garantit pas une consommation de ressources plus faible : c'est l'usage qui en est fait qui le garantit. Ainsi, un usage du Cloud identique à celui que l'on pourrait avoir sur un hébergement on-premise traditionnel, sans profiter des innovations technologiques qu'il propose (comme le PaaS), peut être contre productif car ne bénéficiant pas de la réduction des ressources informatiques consommées. Il est en effet important que noter que les avantages que le Cloud offre ne sont accessibles que si l'architecture logicielle des applications qui y seront hébergée est adaptée en conséquence.

Enfin, la délégation d'hébergement aux fournisseurs de Cloud implique par nature une perte de contrôle sur le datacenter, et donc sur ses externalités environnementales. Car rappelons le : si la consommation de ressources informatique (CPU, RAM, ROM etc) est un indicateur intéressant car facile à calculer pour une application donnée, il ne traduit en rien les émissions de GES qui lui sont dues. Cela dépend fortement de comment le datacenter s'intègre dans son environnement, notamment géographique.

## Intégration des Datacenters dans leur environnement

Les datacenters sont désormais considérés comme des infrastructures urbaines dont la planification, la construction et l'intégration sont des enjeux qui nous touchent tous, et pas seulement leur gestionnaire.

En effet, que ce soit sur les plans spatiaux, énergétiques, urbains ou du point de vue du réseau, les datacenters ont des implications réelles et non négligeables sur la vie des citoyens. Cette prise de conscience a permis d'intégrer la gestion de projet urbains aux projets de datacenter, et donc d'intégrer dès la conception de ces infrastructures les problématiques qu'ils soulèvent. 

On l'a vu précédemment, le PUE moyen a baissé. Cette baisse se traduit par l'optimisation des systèmes de refroidissement, comme le très populaire datacenter de GreenMountain en Norvège, refroidi en partie à l'eau de mer et installé dans des souterrains pour profiter de la température [^4]. Microsoft quand à eux expérimentent au travers de leur projet Natick un datacenter directement immergé dans la mer [^14].

Mais la baisse du PUE s'explique également par l'optimisation énergétique des bâtiments eux même (isolation, exposition par exemple) ainsi que par leur intégration au seins des systèmes urbains ! Et il ne faut pas aller bien loin pour trouver des innovations dans ce domaine : dans le cadre de son plan Climat, la Mairie de Paris a lancé en 2015 un appel d’offres pour chauffer une partie des bassins de la capitale à partir de chaleur fatale issue des serveurs informatiques. Depuis mai 2017, la piscine de la Butte-aux-Cailles (Paris) est en partie chauffée grâce aux chaudières numériques de [Stimergy](http://www.stimergy.com). Créée en 2013, Stimergy a conçu un procédé permettant de recycler la chaleur fatale dissipée par les composants électroniques et autres alimentations électriques (sous l’effet Joule) pour préchauffer de l’eau. Ainsi, 100 % de l’électricité qui entre dans la chaudière est utilisée. La majorité des électrons servent à réaliser des traitements informatiques. Proche de la logique de l’économie circulaire, cette innovation permet au territoire parisien de faire de réaliser d’importantes économies d’énergie et d’émission de gaz à effet de serre (45 t équivalent CO2 par an), mais elle évite également l’utilisation de climatisation énergivore pour refroidir les serveurs.On retrouve des initiatives de ce genre un peu partout dans le monde.

Nous avons surtout parlé d'énergie électrique jusqu'ici, puisque les datacenters s'alimentent en énergie électrique. Cependant, l'électricité ne pollue pas en soi : c'est bien sûr le mode de production électrique qui engendre les externalités négatives (éolien, photovoltaïque, nucléaire, charbon, gaz, fuel, etc). Or, c'est le mix électrique d'un pays qui permet d'établir la relation entre électricité consommée et Gaz équivalents effets de serres émis (GES). Par conséquent, deux datacenters identiques placés en France et aux USA par exemple n'auront pas les mêmes émissions de GES : la France a une électricité fortement décarbonée (~70g/kWh), alors que les USA rejettent beaucoup de GES par kWh consommé (~200-600g/kWh selon les états).
Les Etats-Unis étant le pays concentrant le plus grand nombre de datacenters du monde selon l'IEA [^10], de nombreux géants du numérique, Google & Microsoft en tête [^12], certifient utiliser des énergies renouvelables pour alimenter leurs infrastructures numériques. Si l'intention est louable, cela signifie souvent qu'il injectent un montant correspondant à leur consommation dans le développement des énergies renouvelables (ENR). Néanmoins, la nature du réseau électrique ne permet pas de choisir de quelle électricité bénéficier. Il s'agit donc plus d'un élément marketing pour atténuer l'image négative des datacenters auprès du grand public.

En revanche, de plus en plus d'acteurs réfléchissent à intégrer directement des infrastructures de production d'électricité au sein ou à proximité des datacenters, en reliant via un réseau électrique direct et privé  le moyen de production à l'équipement d'utilisation. De cette manière, un gestionnaire de datacenter peut donc s'extraire des contraintes inhérente au réseau électrique du pays en question, et donc aux politiques de gestion de l'énergie (ou à leur absence). Parmi les modes de production électrique facilement installables, les seuls pertinents sur le plan climatique sont les ENR. Mais si les ENR produisent bien une électricité bas-carbone, et donc contribuant très peu au réchauffement climatique, elles présentent un défaut majeur : l'intermittence. Derrière ce terme on entend une production variable, discontinue et non programmable, car dépendantes des conditions météorologiques et du cycle jour/nuit.

Cela pose bien évidemment un problème aux gestionnaires des datacenters : dans un contexte d’électricité variable et relativement peu prévisible, comment garantir une certaine qualité de service (QoS) conformément aux SLA (service level agreement) contractés avec ses clients ?
C'est la question à laquelle un projet de recherche européen coordonnée par le laboratoire LIRIT de l'université de Toulouse a tenté de répondre depuis 2015 : le projet DATAZERO [^13].

La principale originalité du projet est de proposer un module de négociation, entre la demande en ressources informatiques et la production/stockage de l'énergie, qui vise à trouver un compromis entre les objectifs et les contraintes des deux parties au lieu d'essayer de résoudre un problème d'optimisation globale. Un schéma de ce processus de négociation est proposé en figure 5.

![Figure 5. Schéma de la négocation entre demande IT et production électrique. [^13]](./negotation-demande-conso.png)


Pour rendre cette négociation possible, les chercheurs proposent des modèles électriques et informatiques précis en détaillant les besoins nécessaires pour le profilage des sources électriques, ainsi que des caractéristiques informatiques avancées comme le vieillissement et la fin de vie des applications, les phases d'application dans le Cloud et les modes de dégradation, la modélisation et l'analyse des serveurs informatiques et des performances. L'optimisation d'une telle infrastructure peut être en effet abordée à la fois du point de vue électrique et du point de vue informatique, ainsi que  comment ces deux aspects interagissent tout au long du processus de négociation. DATAZERO propose pour cela un intergiciel basé sur ActiveMQ et capable de combiner à la fois des simulations complètes (utilisant un simulateur de charge de travail de centre de données et un simulateur de puissance), des expériences sur des plates-formes réelles (sources d'énergie réelles et serveurs informatiques exécutant Openstack) et des émulations
(PHIL).

Enfin, un des derniers aspects concernant le Cloud et ses datacenters concerne le réseau. En effet, la déportation des ces centres de la puissance de calcul, on l'a vu, contribue à l'augmentation massive du traffic ces dernières années. Et cette augmentation n'aura de cesse de continuer dans les prochaines années, avec notamment l'arrivée de la 5G. 
Or, le réseau, en tant qu'infrastructure de connexion entre les datacenters et les terminaux, consomme lui aussi de l'énergie : il est responsable de 16% de la consommation d'énergie des TICs en 2015 [^15]. On peut donc s'attendre à ce qu'une augmentation du débit entraine également une augmentation de la consommation d'énergie globale. Pourtant, cela n'est pas le cas : une étude finlandaise[^16] a tenté d’estimer, pour la téléphonie mobile, la consommation électrique du réseau par rapport au volume de données, autrement dit le nombre de kWh par gigaoctet transféré (kWh/Go).

Pour effectuer de telles estimations d’impact environnemental, les méthodes dites d'”analyse du cycle de vie” (ACV) évaluent l’ensemble des coûts imputés par une activité. Ainsi, l’évaluation de l’empreinte de la téléphonie mobile intègre la fabrication des terminaux, la consommation personnelle (recharge quotidienne du téléphone), etc. Pour évaluer l’empreinte d’un opérateur mobile, on prend en compte la consommation des antennes, mais également la climatisation et chauffage des bureaux, etc. En divisant ce chiffre de consommation électrique totale par le volume échangé total, on peut obtenir une estimation de l’empreinte électrique du volume de données échangées.
Ce chiffre est intéressant pour évaluer l’empreinte totale des opérateurs, mais trompeur : il laisse entendre que la consommation électrique d’un opérateur mobile est totalement dépendante du volume échangé, ce qui est faux. Si du jour au lendemain tous les abonnés mobiles de France divisent leur consommation de données par 2, la consommation électrique des opérateurs ne va pas se réduire du même facteur : leurs antennes resteront allumées, leurs bureaux continueront à être climatisés et éclairés, etc.
L’étude finlandaise citée ci-dessus est intéressante à cet égard : on voit que la consommation électrique des opérateurs finlandais est restée à peu près stable pendant la décennie 2010, malgré une légère croissance tendancielle, comme le montre la figure 6.

![Figure 6. Evolution de la consommation du réseau internet mobile finlandais sur la période 2010-2017. [^16]](./finnish-mobile-network-energy.png)

Sur ce point, on voit donc que le réseau tel qu'il existe aujourd'hui reste relativement indépendant du volume de données échangées. En, revanche, la hausse massive du traffic mets en tension le débit disponible aujourd'hui, si bien que de nouvelles génération (5G en tête), font leur apparition. Le déploiement de ce nouveau réseau va engendrer d'importantes émissions de GES directes ou indirectes. En cela, le Cloud a sa part de responsabilité puisqu'il contribue à la hausse massive du traffic.

On voit donc que l'intégration du Cloud dans son environnement technico-culturel est en constante évolution à mesure que ses infrastructures sous-jacentes sont prises en compte par les politiques publiques, les citoyens et les acteurs du secteur.


## Effets rebond et limites à l'efficience énergétique du Cloud

Un des dangers face à l'optimisation énergétique constante du Cloud réside dans les potentiels conséquence d'un effet rebond :  : l’augmentation de consommation liée à la réduction des limites à l’utilisation d’une technologie. On peut donc potentiellement s'attendre à une accélération encore plus forte de la consommation de ressources de Cloud et, avec celles ci, de bande passante réseau.

Le Cloud et ses datacenters sont certes de plus en plus optimisés, que ce soit du point de vue matériel ou logiciel, mais la question d'une limite à ces optimisations se pose cependant. On l'a vu avec la miniaturisation des processeurs qui s'est fortement ralentie ces dernières années. 
La filière saura t-elle maintenir sa consommation électrique malgré l'explosion de la demande prévue ? Aujourd'hui, rien ne nous permet de l'affirmer.

Cela sera d'autant plus crucial que du point de vue social, aujourd'hui les pays occidentaux sont responsables de la quasi-totalité des externalités environnementale des TICs puisqu'ils en sont les principaux consommateurs et commanditaires. En revanche, on voit d'ores et déjà les pays en voie de développement mettre en œuvre des politiques ambitieuses de connexion à Internet, et c'est un marché en pleine explosion. Comment piloter de manière durable l'accès au numérique pour les pays émergents ? 

Enfin, dans ce document nous nous sommes principalement focalisé sur l'aspect de consommation électrique (et donc d'émission de GES associées) des infrastructures sous-jacentes permettant le bon fonctionnement du numérique actuel. Néanmoins, une grande partie des émissions de GES sont issues de la fabrication de tous ces équipements. Or, les gestionnaires de datacenters et fournisseurs de services Cloud ne sont aujourd'hui pas transparents sur le renouvellement des équipements informatiques, le réemploi, ou les politiques de matériel durable. 

## Conclusion

Nous avons donc tout d'abord rappelé dans ce document la nécessité pour le secteur des TICs de maitriser son empreinte environnementale et avec elle sa consommation d'énergie. face à l'émergence du Cloud. 
Ce nouveau paradigme, qui représente en théorie l'accès a des ressources informatiques depuis un réseau distant, désigne en pratique des nouvelles technologies de virtualisation et de mutualisation qui, conjointement à la hausse du débit des réseaux d'accès à internet, ont favorisé la croissance et l'adoption de "services clouds", soutenus physiquement par d'énormes centres appelés datacenter. Ces centres rassemblent d'innombrables équipements informatiques permettant l'exécution et le stockage d'applications et données, qui s'accompagnent de systèmes de refroidissement très consommateurs en énergie. Face à la prolifération des datacenters, des critiques se sont fait entendre sur la consommation d'énergie et les externalités environnementales dont ils étaient responsables. C'est une des raisons pour laquelle, avec l'argument économique, les gestionnaires et professionnels ont mis en place des optimisations énergétiques graduelles, transformant aujourd'hui les datacenters en centre ultra-optimisés en ce qui concerne non seulement les équipements (comme l'amélioration des indicateurs tels que le PUE, le POE ou le TUEE le montre) mais également l'orchestration des ressources selon le besoin, avec un taux de mutualisation en hausse constante, et une performance énergétique globale qui leur a permis de ne pas consommé plus qu'il y a 10 ans, et ce malgré l'explosion de la demande et du traffic internet.
Ces centres sont aujourd'hui également de plus en plus intégrés dans leur environnement technico-culturel : sur les plans spatiaux, énergétiques, urbains ou encore en ce qui concerne le réseau, les datacenters font aujourd'hui l'objet de l'implication de tous pour permettre une gestion plus durable. Que ce soit en réutilisant la chaleur des datacenters pour chauffer d'autres infrastructures, ou en les installant dans des sites particuliers comme des anciennes mines, les bâtiments eux mème font l'objet d'innovations. Des projets cherchent même à faire coïncider demande de ressource informatique et production variable d'électricité en provenance des ENR pour diminuer encore leur impact sur l'environnement et pouvoir de s'abstraire des réseaux électriques parfois très polluants comme aux USA.
Néanmoins, l'optimisation a t-elle une limite ? Le secteur saura t-il gérer la hausse massive attendue du traffic, résultante de l'arrivée de la 5G, par effet rebond, ainsi que des nouveaux pays émergents comme l'Inde ou l'Afrique ? Qu'en est-il de la gestion du matériel (production et recyclage notamment) ? Ce sont autant de question qui restent en suspend et de challenges que l'industrie numérique aura à relever dans les prochaines années.
On ne peut donc affirmer d'une manière générale que le Cloud est un mode d'hébergement plus efficace du point de vue environnemental. S'il offre de nombreuses optimisation permettant la réduction de consommation de ressources informatiques, d'autres aspects sont à prendre en jeu tel que le réseau électrique, le mode de production d'énergie, le PUE, la politique de renouvellement/réemploi/approvisionnement du matériel sous-jacent, etc ... Il faut donc, lors de ce choix, bien prendre en compte tous ces paramètres pour pouvoir conclure, ce que nous ne saurions faire ici en l'absence de contexte. Cependant, il offre un fort potentiel quand à la réduction des externalités environnementales du numérique, tant les innovations sont nombreuses. 



[^1]: ENR'CERT & ATEE & ADEME, "L'efficacité énergétique dans les datacenters". 2016.
[Lien](https://www.actu-environnement.com/media/pdf/news-27968-data-center-atee.pdf)

[^2]: Koomey et al. , "Energy efficiency of computing, What's next ?". 2016.
[Lien](https://www.electronicdesign.com/technologies/microprocessors/article/21802037/energy-efficiency-of-computing-whats-next)

[^3]: Masanet et al. , "Recalibrating Global Data Center Energy-Use Estimates". 2020.
[Lien](https://science.sciencemag.org/content/367/6481/984)

[^4]: Green Mountain Datacenter
[Lien](https://greenmountain.no/)

[^5]: "Définition Data Center : qu’est-ce qu’un centre de données ?", 2017
[Lien](https://www.lebigdata.fr/definition-data-center-centre-donnees)

[^6]: Popek, Gerald J.; Goldberg, Robert P, "Formal requirements for virtualizable third generation architectures", 1974

[^7]: Koomeyet al. 2011."Implications of Historical Trends in The Electrical Efficiency of Computing." IEEE Annals of the History of Computing. vol. 33, no. 3. July-September. pp. 46-54. [Lien](http://doi.ieeecomputersociety.org/10.1109/MAHC.2010.28)

[^8]: BAPCO, "MobileMark battery and performance benchmark", 2014
[Lien](https://bapco.com/products/mobilemark-2014/)

[^9]: Barrosoet al. 2007. "The Case for Energy-Proportional Computing." IEEE Computer. vol. 40, no. 12. December. pp. 33-37.
[Lien](http://www.barroso.org/)

[^10]: International Energy Agency (IEA), 2017, "Digitalization & Energy"
[Lien](https://www.iea.org/reports/digitalisation-and-energy)

[^11]: International Energy Agency (IEA), 2020, "# Data Centres and Data Transmission Networks"
[Lien](https://www.iea.org/reports/data-centres-and-data-transmission-networks)

[^12]: Google, 2016, "100 % renouvelable, et ce n'est que le début"
[Lien](https://www.google.fr/about/values-in-action/renewable/)

[^13]: IRIT, 2015, DATAZERO
[Lien](https://www.irit.fr/datazero/index.php/fr/)

[^14]: Microsoft, 2018, Natick Project
[Lien](https://natick.research.microsoft.com/)

[^15]: On Global Electricity Usage of Communication Technology: Trends to 2030, Andrae & Edler, 2015, [Lien](https://www.mdpi.com/2078-1547/6/1/117/htm](https://www.mdpi.com/2078-1547/6/1/117/htm) [↩︎](https://mawagusura.github.io/posts/memoire-m1/#fnref:4)

[^16]: Pihkola et al. , 2018, "Evaluating the Energy Consumption of Mobile Data Transfer—From Technology Development to Consumer Behaviour and Life Cycle Thinking"
[Lien](https://www.researchgate.net/publication/326470455_Evaluating_the_Energy_Consumption_of_Mobile_Data_Transfer-From_Technology_Development_to_Consumer_Behaviour_and_Life_Cycle_Thinking)


[^17]: Microsoft,2018, "The carbon benefits of cloud computing"
[Lien]()