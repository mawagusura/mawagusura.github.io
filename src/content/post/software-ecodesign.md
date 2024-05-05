---
title: "Software ecodesign: dodging the bullshit"
publishDate: "2 apr 2024"
updatedDate: "5 may 2024"
tags: ["ecodesign", "english", "opinion"]
draft: true
description: "My story with software ecodesign, and where I stand now"
---

## Background

My personal story with software ecodesign dates back to my student days in university. Back then, I was still relatively new to IT, and was trying to read a lot on IT good practices in general. I started following blogs and people on social networks, and eventually came across an article talking about the environmental impact of IT product and services. 

This was news to me, I hadn't really thought about the physical externalities that the IT industry could have, and to my great surprise (at the time), I learnt that its impacts were far from negligeable : the sector is estimated to be responsible for ~2-4% of the global CO2eq emissions.

As a student in software engineering, and as a person committed to minimize my impact on the environment, I naturally started to read up on the topic. I built my own bibliography database (thanks to zotero and sci-hub), and once I had gained more knowledge, it became evident to me that we, as software developers, had to do something about it. I was working part-time for IBM at the time, and had previously had an internship in a medium-sized e-commerce french company. Never had I heard about potential impacts the code we were shipping could have, and resources on software ecodesign were scarced at the time.

**What is software ecodesign anyway ?**

Ecodesign has been around for a while, and is a well-known objective and method to minimize the impact of a product or service on the environment in many industries. It's important here to remember that these impacts are not measured in MWh (quantity of electric energy consumed): electricity consumed during usage is not a final indicator. In order to get an holistic view on global impacts of a software product, we must take a step back and analyze it through its whole lifecycle, including all the dependencies required for this product to emerge (not talking about node_modules here!).
We measure environmental footprints by specific KPIs : greenhouse gaz emissions, water consumption, abiotic resources consumption, contributions to acidification ...

Software ecodesign designates all the method and practices used to mitigate some of its footprints. 

## Early days & Volunteering

Back to my student days, the french resources were mainly centered around [greenit.fr](https://greenit.fr), a media / working group (it's a bit more complex than that, but let's not deep into this now), and the green code lab.
These resources, while generally pretty good, were not necessarily easy to find and to use, and there wasn't any ready-to-use framework for companies to pick.

The green code lab wasn't very active anymore when it came to editing resources, and greenit had a pretty weird governance, which made it pretty hard to get involved and help.

To tackle this, a group of people founded the sustainable IT institute [^1], a NGO focused on building knowledge, resources, gathering professionals, and influence the IT industry towards a greener future. I became a member, and jumped on the opportunity to contribute to building more resources for professionals to use.

[^1]: (website here)[https://isit-europe.org/]

The volunteering work at the sustainable IT institute was centered around work groups. After I joined, several work groups were created, among which the ecodesign reference guide working group, which I joined. For several months, we met weekly in specialized teams, to review the litterature and try and summarize the best practices for applying ecodesign when developing an IT service or product. This resulted in the [Handbook of Sustainable Design of Digital Services](https://gr491.isit-europe.org/en/).
This resource is useful to whoever wants to get some basic knowledge, with tips and tricks, on how to successfully implement ecodesign principles in a software project. It was later used as a base to produce the [RGESN](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/), a national repository of software ecodesign practices, put together by the french national digital agency (DINUM) along with the sustainable IT institute, among others.

## The greenwashing machine

All of this sounds good so far : driven people group together and try to craft resources for the whole industry to go greener, and that effort gets supported by the french national authorities. So where's the catch ?

Sustainable IT is not regulated whatsoever, and despite the efforts of many individuals, there isn't any framework nor tools to easily assess the claims made by companies and organizations.

Private companies quickly realised that it was a zero-effort investment for them to jump on the sustainable and ecodesign train for their IT departments: you can just claim to be sustainable, no questions asked. We saw training programs and workshops flourish, driven by the wish of big businesses to quickly market their "transformation" into sustainability leaders.

This is also the time when we started to witness big corporations like banks, insurance companies, or even Airbus (plane manufacturer), hiring sustainable IT managers and adopting green policies and methods in their IT departments.
It only takes one look at [this page](https://institutnr.org/nos-adherents) to realise that sustainable IT and ecodesign have become the new gold mine of big corps to improve their public image.

Where's the problem, you may ask ? Isn't it nice that companies are willing to challenge their processes, in order to become more sustainable ?

Not if it's just the tree hiding the forest. BNP Paribas, the second biggest european bank, invested ~50 billion euros in fossil fuels projects between 2016 and 2020, while being a proud member of the sustainable IT institute. And that's just one example, you can find plenty more. Ecodesign and sustainable IT practices have become the ultimate greenwashing argument for these big companies, while the extreme majority of their emissions lied elsewhere.

Even worse: all this big-corp communication around sustainable IT contribute to making the responsibility of IT in the environmental crisis bigger than it actually is, in the eyes of the public.
Surely, if an oil company talks about its effort to make IT more sustainable, that must represent a significant share of its environmental impact, no ?
Any advised reader will know that it's not the case, at least for these companies. But this trick allows them to continue the business-as-usual polluting routine, while exagerating the environmental impacts of IT, and at the same time claiming that they're operating a shift, which most likely consists of a few workshops here and there, slightly longer life for equipments, and maybe some software eco-design principles applied sporadically on internal projects.

## Separating the wheat from the chaff

I'm a big sustainable IT advocate, don't get me wrong. I believe we all have a role to play in reducing the global carbon emissions. But we should also put our focus where it matters the most: if IT is a significant share of a company's emissions, then it makes a ton of sense to implement sustainable IT practices, and I have no problem with communicating around that.
But for some companies, there is a huge gap between the claims and the reality of avoided emissions (usually the only metric communicated).

And even if IT is indeed a significant portion of a company's CO2 emissions, sustainability cannot be reduced to how many good practices can you tick off of the list.
One must ask oneself what is the purpose of the company. What business does it do ? To who is that valuable ? What is the end impact on society and the environment ?
If your clients are all fossil fuel companies, it does not matter at all if you implement ecodesign in your software delivery projects.

Ecodesign is meaningless without purpose.

## My take now

After all this time, I've narrowed down my approach to software ecodesign to a few, pragmatic core principles : 

- ecodesign is useless if you work for an oil company (for example)
- use physical resources more efficiently, on both servers and clients : you will end up implementing ecodesign practices without even knowing it
- think twice about the size of the feature set, and center around the core value proposition
- use automation(s) and abstraction(s) with care and discernment : they always come at a cost (overhead & maintenance)
- don't prioritize DX (Developer Experience) over everything else: make compromises, with UX and performance having the biggest weights in the technical decision

If you start considering the environmental impact(s) while developing software, you've already done 80% of the job. The last 20% consists of a lot of common sense, and good technical expertise on the technologies involved.

