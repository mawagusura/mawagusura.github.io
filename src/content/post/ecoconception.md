---
title: "Eco-conception"
publishDate: "27 dec 2020"
updatedDate: 27 dec 2020
tags: ["ecodesign", "french", "opinion"]
draft: true
description: "Elements d'opinion : eco conception et d'autres choses aussi"
---


On commence à avoir l'habitude du cherry-picking sur les sujets numérique et environnements, donc essayons de remettre un peu de contexte et de prendre un peu de hauteur.

Y a t-il du green-washing sur l'éco-conception logicielle ? Certainement, et c'est à condamner. Mais a aucun moment ce green-washing ne saurait justifier un rejet de l'éco-conception logicielle en elle-meme. Il faut différencier la communication qui en est faite de la pratique en soi.

Surtout, ce qui me dérange dans ces propos, c'est de vouloir réduire des questions complexes à des actions simples, et de mettre en concurrence des actions qui ne devraient pas l'etre.
Est-ce mieux d'heberger son site en France qu'en Pologne ou en Estonie ? Oui, bien sur. Mais on ne peut pas résumer la performance environnementale des sites webs à cela, et encore moins celle du numérique dans son ensemble.
Par ailleurs, les démarches sérieuses de numérique responsable s'attachent à améliorer tout ce qui peut l'etre, dans toutes les composantes d'un service / produit numérique (design, développement, stratégie, contenus, hébergement, etc) et dans toutes ses phases du cycle de vie (spécification, conception, réalisation, production, utilisation, support / maintenance, fin de vie). Se concentrer sur un seul élément n'a pas de sens, il s'agit au contraire d'avoir une approche holistique du problème pour en tirer des conclusions.

Pour ceux que ça intéresse, plus de détails dans les tweets qui suivent

Commencons d'abord par dire que l'éco-conception ne se resume pas a réduire la taille d'un site web (de la meme maniere que le numérique ne se résume pas aux sites web).
Ici il est mention de l'éco-conception en général, mais la description qui en est faite ne concerne que la partie logicielle. Soit, concentrons nous sur cette dernière (l'éco-conception logicielle).

De quoi parle t-on ? L'éco-conception, c'est prendre en compte les impacts environnementaux lors de la conception d'un produit / service. En l'occurence, les principaux impacts environnementaux du numérique sont les suivants :
- émissions de gaz à effet de serre (kg CO2eq)
- épuisement des ressources abiotiques naturelles (métaux et minerais)
- épuisement des ressources abiotiques naturelles fossiles
- les radiations ionisantes

Donc, éco-concevoir un site web, par exemple, ça signifie prendre en compte tous ces indicateurs et essayer de les réduire au minimum. Pour cela il faut savoir d'où ces externalités environnementales proviennent. Il s'agit, pour la majorité, de la phase de fabrication des terminaux utilisateurs.

Donc éco-concevoir un site web, c'est d'abord faire en sorte qu'il tourne bien sur des vieux terminaux, poru éviter leur renouvellement : compatibilité avec de vieux OS / navigateurs en première ligne. Il y a des impacts non-directs mais pour autant non-négligeables de certains choix de conception, qui ne se résument pas å un indicateur (quel qu'il soit).

En ce qui concerne l'énergie, rappelons que la durée de vie d'une batterie (smartphone ou ordinateur portable) se mesure en cycles de recharge. Autrement dit, moins d'énergie consommée signifie moins de cycles de recharge, donc une durée de vie allongée. Comment moins consommer d'énergie ? Et bien, pour faire simple, il faut moins mobiliser l'écran et le processeur ==> des thèmes sombres permettent un gain significatif sur des écrans OLED, et servir un site statique plutot que dynamique mobilise également moins le processeur coté utilisateur (le SSR est un bon exemple). Ce ne sont que des exemples, dont le but est de montrer que les impacts de l'éco-conception ne se résument pas à l'énergie évitée pendant le transport. Cela montre aussi que si la distinction fabrication / utilisation est pertinente pour certains cas d'analyses, cela ne veut pas dire que ces deux segments sont imperméables : le renouvellement matériel n'est pas un fait inévitable, il est aussi largement motivé par l'utilisation des dits équipements.

On voit donc bien que l'éco-conception ne se résume pas à regarder la taille du DOM ou le poids de la page web. Baser une critique d'un site éco-conçu sur ces memes métriques serait malhonnete.

Mais, attardons nous tout de meme sur l'énergie consommée par les autres composantes du système en phase d'utilisation, puisque la critique se porte majoritairement dessus.
Que faire de l'argument de la localisation du data center ? Bon déjà commençons par rappeler que les serveurs en phase d'utilisation ne représentent qu'une petite partie de l'énergie globale consommée par le système (en phase d'utilisation toujours). Quand bien meme ils seraient alimentés par de l'énergie carbonée, les émissions de CO2eq globales de l'utilisation n'augmenteraient pas linéairement.
Je passe sur le fait que le marché de l'énergie européen est interconnecté et que, par conséquent, il est fallacieux de raisonner en silot par pays (là encore ce n'est pas si simple ...), ou encore sur le fait que la majorité des fournisseurs de cloud offrent des garanties d'origine sur l'électricité qui alimente leurs DC (bien qu'il y aurait des choses à dire sur ces systèmes de garanties).


