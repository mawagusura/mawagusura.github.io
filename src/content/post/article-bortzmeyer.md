---
title: Un bon article de S. Bortzmeyer
publishDate: "27 dec 2020"
updatedDate: 27 dec 2020
tags: ["ecodesign", "french", "energy"]
draft: false
description: "Reaction and commentary of an article on energetic consumption of IT"
---

Ce post est écrit en réaction à l'article de S. Bortzmeyer, disponible [ici](https://www.bortzmeyer.org/conso-electrique-moyenne.html)

Un bon article de S. Bortzmeyer, comme souvent d’ailleurs, sur la pertinence (ou son absence) d’utiliser les émissions de GES / requête comme indicateur des performances environnementales du numérique.
Si je partage le message principal de l’article, à savoir «la moyenne n'est pas forcément pertinente » lorsque l’on parle d’impact environnemental du numérique, je tenais tout de même à revenir dessus car il porte selon moi une vision malheureusement trop répandue, qui consiste à balayer tout appel à plus de sobriété et de modération dans les usages que nous faisons des outils numériques.

En effet, l’argument tout à fait valide que l’on entend souvent est que l’empreinte environnementale du numérique a un cout principalement fixe : les phases « amont » (correspondant aux phases de fabrication des équipements) des trois grands postes que sont les terminaux, le réseau et les centres de données sont responsables de 78% de l’empreinte carbone du secteur en France, et « seulement » 22% sont à imputer à la phase d’utilisation [^1]. Pire encore, la phase d’utilisation a elle-même un cout environnemental partiellement fixe (principalement pour le réseau, et partiellement pour les centres de données), qui ne suit donc pas strictement une fonction linéaire : en d’autres termes, cliquer ou ne pas cliquer sur la dernière vidéo Youtube « Best-of des meilleures grimaces de chatons » n’aurait presque aucun impact sur votre empreinte environnementale numérique.

[^1]: Rapport sur le numérique responsable du Sénat, https://www.senat.fr/rap/r19-555/r19-555-annexe.pdf

Si les chiffres cités ainsi que le raisonnement semble tout à fait juste, il est néanmoins à nuancer, et ce pour de nombreuses raisons. 
D’abord, si l’on se concentre purement sur la phase d’utilisation, effectuer des requêtes sur internet sollicite bien évidemment les équipements hardware de votre terminal, ce qui consomme donc l’énergie stockée dans votre batterie. D’après une brève revue de la littérature scientifique sur les postes de consommation des batteries de nos smartphones (que j’ai effectué moi-même et que vous pouvez trouver plus bas), le constat est sans appel. Il y a deux conclusions que l’on peut tirer de la littérature :
1)	l’utilisation du réseau représente le plus gros poste de consommation d’énergie d’un smartphone, sur un certain nombre de scénarios standards étudiés (le CPU et le display sont les deux autres gros postes). Cela est encore plus important lors de l’utilisation des réseaux mobiles (3G, 4G) en comparaison du WIFI.
2)	La consommation d’énergie du smartphone imputable aux échanges réseaux augmente de manière proportionnelle avec la quantité d’échanges.
Concrètement, cela veut dire que plus l’utilisateur échange des données avec internet, plus il consomme d’énergie sur son terminal, et plus sa batterie se vide.

Or, la durée de vie d’une batterie se mesure en cycles de recharges [^2]. Couplés au fait que les batteries sont malheureusement non amovibles sur l’immense majorité des smartphones récents, cela contribue directement à l’accélération du renouvellement des terminaux. L’utilisation des équipements (a minima mobiles) a donc bien un impact sur ce que l’on impute à la phase amont (= fabrication), n’en déplaise à certains.

[^2]: https://www.sciencedirect.com/science/article/abs/pii/S0378775310021269?via%3Dihub

C’est aussi la conclusion que font les chercheurs de cette étude [^3] : « Battery capacity has however failed to keep up with the rate at which smartphones have evolved in recent years, which has led to rapid battery drain and the need for users to discard and replace them very frequently. This inevitably leads to increased greenhouse gas emissions and harmful consequences the world over due to poor disposal and reuse practices among users.”

[^3]: https://eprints.leedsbeckett.ac.uk/id/eprint/4703/


Je n’ai pas eu le temps d’effectuer le même genre de revue de la littérature sur les équipements serveurs, à savoir: comment l’usage du réseau impacte-t-il la consommation électrique de la partie « serveur » ? Je ne peux donc pas tirer de conclusion.


Stéphane Bortzmeyer a rappelé à juste titre que l’utilisation d'un service numérique peut, de la même manière, avoir un impact sur la phase amont des autres postes (réseau et data centers), en incitant à augmenter les performances et / ou le nombre d’équipements nécessaires à la bonne utilisation d’un service numérique (communément appelée scalabilité verticale / horizontale).

Un autre point requiert une attention particulière puisque quasi toujours délaissé : l’empreinte environnementale ne se résume pas aux émissions de GES. Comme le rappelle brillament Gauthier Roussilhe [^4], on mesure un impact environnemental selon 4 critères : GHG emissions (CO2eq), water consumption (Liters), abiotic resources consumption (Sbeq. Or Antimony equivalent) and primary energy consumption (MJ). En France, la production de 1kWh consomme 4 litres d’eau par exemple. 

Enfin, il y a l’inévitable effet rebond, source de débats houleux sur Twitter et ailleurs. C’est en effet toujours délicat de trouver la nuance, entre ceux qui nient purement et simplement la possibilité de son existence, et ceux qui voient dans chaque gain d’efficacité énergétique la perspective systématique d’une hausse de la consommation. Je ne vais pas m’étendre sur le sujet, cela mériterait une analyse plus fine et détaillée, si tant est qu’elle puisse être réalisée. Néanmoins, il me parait tout bonnement malhonnête que de balayer cet argument du revers de la main, tout comme il me parait malhonnête de garantir qu’un effet rebond sera présent à coup sûr. Par sa nature incertaine, l’effet rebond constitue un risque qui doit être pris en compte et géré : l’intégrer aux analyses de risques ainsi qu’à la politique de gestion des risques apparait comme une mesure de bon sens.
EDIT: on peut une fois de plus remercier Gauthier Roussilhe qui s'est penché plus en détails sur le sujet et a publié un article excellent sur les effets environnementaux indirects de la numérisation, où il couvre les effets rebonds. Allez le lire, c'est limpide (une fois de plus). [^5] 

[^4]: https://gauthierroussilhe.com/en/articles/digital-sustainability-french
[^5]: https://gauthierroussilhe.com/articles/comprendre-et-estimer-les-effets-indirects-de-la-numerisation#les-effets-rebond

## Sources sur les postes de consommation d'un smartphone

Voici un ensemble d'articles explorant les postes de consommation des smartphones. 
Cette liste n'est pas exhaustive, et réalisée par moi meme sur mon temps libre du weekend, donc ne constitue aucunement une revue de littérature de qualité scientifique.

Articles directement liés au sujet :
- https://www.mdpi.com/2071-1050/10/7/2494
- https://core.ac.uk/download/pdf/234896285.pdf
- https://www.researchgate.net/publication/224092718_On_the_impact_of_2G_and_3G_network_usage_for_mobile_phones%27_battery_life
- https://dl.acm.org/doi/abs/10.1145/2494232.2466586
- https://eprints.leedsbeckett.ac.uk/id/eprint/4703/
- https://www.researchgate.net/publication/318574812_Smart_mobile_device_power_consumption_measurement_for_video_streaming_in_wireless_environments_WiFi_vs_LTE
- https://www.usenix.org/legacy/event/atc10/tech/full_papers/Carroll.pdf

Articles indirectement liés au sujet : 
- https://ieeexplore.ieee.org/abstract/document/7972717