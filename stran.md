---
layout: single-page
title: Odtis spletne strani
co2: x
---

[Digitalni odtis](o-akciji.html) je kompleksna količina, ki jo lahko le ocenimo. Za spletne strani je to lažje,
saj obstajajo [uveljavljene metodologije](https://developers.thegreenwebfoundation.org/co2js/explainer/methodologies-for-calculating-website-carbon/#carbon-estimation-models)
in spletni testi.

Med njimi je najbolj znan [Website Carbon Calculator](https://www.websitecarbon.com/), ki ga pri razvoju uporabljamo tudi Ekologi brez meja. Upošteva energetsko intenzivnost podatkov, državo, vrsto vira energije v napravi in strežnikih. Ključni podatek pa je najbolj enostaven: **velikost (teža) spletne strani** — iz koliko podatkov je sestavljena?

Na srečo velikost strani bistveno vpliva tudi na hitrost nalaganja in na uporabniško izkušnjo, kar povzroča krajše brskanje, manj povratkov in [nižjo prodajo](https://www.websitebuilderexpert.com/building-websites/website-load-time-statistics/). Amazon je na primer ocenil, da bi sekundo daljše nalaganje za njih povzročilo letno izgubo v višini 1,6 milijarde dolarjev. Iz teh razlogov je na voljo več orodij za diagnostiko hitrosti nalaganja in izrisovanja spletnih strani, ki so uporabne tudi za zmanjševanje digitalnega odtisa.

Prijemov za zmanjšanje je več, v osnovi pa se moramo vprašati, kateri vsi elementi so nujno potrebni, v kakšni obliki in velikosti so ter kateri morajo biti naloženi takoj.
Tipične napake:
- **Prevelike in slabo stisnjene slike**, npr. v velikosti 900x300 pikslov, pri tem da bo na strani vedno prikazana v velikosti 300x100 (9x manjši). Uporaba modernih in vektorskih formatov lahko velikost še zmanjša.
- **Videi**, ki začnejo avtomatsko igrati ob prikazu strani lahko porabijo ogromno podatkov; že sam Youtoubov predvajalnik je vreden slabi megabajt, skoraj polovico povprečne velikosti spletnih strani v letu 2022. Način, kako se jih vgrajuje v spletne strani pomeni, da ta se ta strošek ponovi z vsakim dodatnim videom.
- Uporaba **neoptimizirane kode in ogrodij**. Večina spletnih strani v ozadju vsebuje precej balasta za redke vrste sistemov, redko obiskane podstrani, redke grafične elemente in redke interakcije. Ko ti deli niso naloženi po potrebi, le višajo odtis strani.

Nižji digitalni odtis spletne strani ne pomeni nujno odrekanja lepoti in funkcionalnosti. Podobno kot spletna varnost obstaja na spektru, kjer so na eni strani peresno lahke dvobarvne strani, na drugi pa pošasti, ki samo za drobno [ikono za brskalnik porabijo več megabajtov](https://iconmap.io/blog#speed-file-size--resolution). Vmes je polje, kjer se sprašujemo kakšno vrsto tehnologije uporabljati, koliko se nam mudi in ali sploh poznamo gradnike, s katerimi delamo.

Skozi čas postaja zavedanje in delo na nižanju odtisa lažje. Brskalniki se vedno bolj strinjajo glede funkcionalnosti, na voljo je vedno več namenskih orodij in nastajajo celo formalne [smernice za trajnostne strani](https://w3c.github.io/sustyweb/). Hkrati se še vedno viša zapletenost osnovnih tehnologij in ni redko, da spletne strani porabijo na stotine megabajtov pomnilnika (in več) za delovanje, kar zlahka upočasni celoten računalnik. Glede na primerjalno enostavnost spletnih strani in aplikacij napram navadnim namiznim, je to skoraj nerazumljivo. Pod črto ostaja še veliko dela na optimizaciji po celotni programski (in strojni!) vrednostni verigi.


### Zgodba naše strani

Ekologi brez meja verjamemo v vodenje z zgledom, zato smo že od začetka zasnovali to spletno stran z mislijo na nizek digitalni odtis in dostopnost. Ocena je na voljo v nogi posamezne strani, giblje pa se med 0,02 in 0,03 g CO2<sub>eq</sub> na obisk. To pomeni, da se uvršča v [razred učinkovitosti A+](https://sustainablewebdesign.org/digital-carbon-ratings/#toc-3) in je nižja od 95 % spletnih strani (v našem primeru 97 %).

gostovanje?

#### Tehnične podrobnosti

Stran je zgrajena s pomočjo Jekylla, kar pomeni, da so podstrani zgenerirane enkrat in neposredno postrežene uporabnikom. Tako odpadejo dodatni vmesni strežniki (npr. php in mysql za CMS), kar izboljša hitrost in učinkovitost. Markdown pomeni tudi lažje urejanje napram čistemu HTML-ju. Za grafične elemente sta uporabljena WEBP in SVG formata, čeprav ju ne podpirajo prav čisto vsi brskalniki. Oblikovanje je spisano iz nule, dodatni CSS pa je naložen po potrebi prek oznake v frontmatter.

yt

{%comment%}
https://www.labnol.org/internet/light-youtube-embeds/27941/

	Calculating what the CO2eqv impact is per GB (there's three models which vary depending on how much they assign to the network, end devices and data centres) - https://research.screen.is/net-zero/Digital%20CO2%20analysis?stackedPages=%2Fnet-zero%2FModelling)

	Crazy stat - ICT could amount to 14% of 2016 CO2eqv emissions by 2040 (aviation is 2%) https://www.sciencedirect.com/science/article/abs/pii/S095965261733233X?via%3Dihub. It's currently between 2.1% and 3.9% of global greenhouse gas (GHG) emissions – more than aviation or shipping.
	Website Carbon Calculator - https://www.websitecarbon.com/
	GWF's hosting directory is good as it helps separate hosts that actually use clean energy and those that claim to be green because they buy offsets https://www.thegreenwebfoundation.org/directory/
	Climate Action Tech has a very good Slack channel (as someone who doesn't like Slack) and good weekly newsletter - https://climateaction.tech/. Mix of FAANG workers trying to improve their products, FOSS, green energy startups, govt, etc
	Repair don't replace your kit "before you start using a piece of electronic equipment, it has already emitted 70% of its lifetime CO2" - https://research.screen.is/?stackedPages=%2Fnet-zero%2FNet-zero%20online%20video&stackedPages=%2Fnet-zero%2FLifecycle%20analysis
	Are your data centre's low emissions because it's water cooled? https://time.com/5814276/google-data-centers-water/

	Overall, the information and communication industry (ICT) makes up between 2.1% and 3.9% of global greenhouse gas emissions. https://www.sciencedirect.com/science/article/pii/S2666389921001884

	This includes electronic equipment and infrastructural facilities such as data centres, servers and networks. By 2040 ICT could amount to 14% of CO2 equivalent emissions - which ranks its contribution to global warming higher than aviation or shipping. https://www.sciencedirect.com/science/article/abs/pii/S095965261733233X?via%3Dihub

{%endcomment%}
