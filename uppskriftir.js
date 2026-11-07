/*
  Uppskriftir fyrir uppskriftabókina.
  Hver uppskrift:
    id        – stutt einkvæmt heiti, bara litlir stafir og bandstrik
    nafn      – heiti réttarins
    flokkur   – verður að passa við nafn í FLOKKAR hér fyrir neðan
    timi      – heildartími í mínútum
    skammtar  – fyrir hve marga
    lysing    – stutt lýsing
    hraefni   – listi; n = grunnheiti fyrir síuna, t = textinn sem birtist,
                g: 1 = grunnhráefni (salt, olía o.þ.h.) sem birtist ekki í síunni
    skref     – listi; t = texti skrefsins, ab = "gott að hafa í huga" (valfrjálst)
*/

var FLOKKAR = [
  { nafn: "Kjötréttir",      engin: "Enginn kjötréttur" },
  { nafn: "Fiskréttir",      engin: "Enginn fiskréttur" },
  { nafn: "Grænmetisréttir", engin: "Enginn grænmetisréttur" },
  { nafn: "Súpur",           engin: "Engin súpa" },
  { nafn: "Eftirréttir",     engin: "Enginn eftirréttur", tillogur: false }
];

var UPPSKRIFTIR = [
  {
    id: "plokkfiskur",
    nafn: "Plokkfiskur",
    flokkur: "Fiskréttir",
    timi: 40,
    skammtar: 4,
    lysing: "Klassískur heimilismatur úr soðinni ýsu, kartöflum og hvítri sósu. Bestur með rúgbrauði og smjöri.",
    hraefni: [
      { n: "ýsa", t: "600 g ýsa eða þorskur, roð- og beinlaus" },
      { n: "kartöflur", t: "800 g kartöflur" },
      { n: "laukur", t: "1 laukur" },
      { n: "smjör", t: "50 g smjör" },
      { n: "hveiti", t: "3 msk hveiti", g: 1 },
      { n: "mjólk", t: "4–5 dl mjólk" },
      { n: "graslaukur", t: "Graslaukur til að strá yfir" },
      { n: "rúgbrauð", t: "Rúgbrauð til að bera fram" },
      { n: "salt", t: "Salt og hvítur pipar", g: 1 }
    ],
    skref: [
      { t: "Sjóddu kartöflurnar í saltvatni þar til þær eru mjúkar, um 20 mínútur.",
        ab: "Settu fiskinn í pott með léttsöltuðu vatni á meðan, hann á að sjóða í næsta skrefi." },
      { t: "Sjóddu fiskinn í 5–7 mínútur. Taktu hann upp úr og losaðu hann í flögur.",
        ab: "Saxaðu laukinn meðan fiskurinn sýður." },
      { t: "Flysjaðu kartöflurnar og skerðu þær í bita." },
      { t: "Bræddu smjörið í stórum potti og mýktu laukinn í því í 3–4 mínútur.",
        ab: "Mældu mjólkina núna. Í næsta skrefi þarftu að hella henni jafnt og þétt út í og hræra á meðan." },
      { t: "Stráðu hveitinu yfir laukinn og hrærðu. Helltu mjólkinni út í smátt og smátt þar til sósan er þykk og slétt." },
      { t: "Bættu fiskinum og kartöflunum út í og stappaðu gróft saman. Kryddaðu með salti og pipar og stráðu graslauk yfir." }
    ]
  },
  {
    id: "lax-i-ofni",
    nafn: "Lax í ofni með sítrónu",
    flokkur: "Fiskréttir",
    timi: 40,
    skammtar: 3,
    lysing: "Lax, kartöflur og spergilkál bakað saman í einni ofnskúffu. Lítið uppvask.",
    hraefni: [
      { n: "lax", t: "500 g lax" },
      { n: "kartöflur", t: "600 g smáar kartöflur" },
      { n: "spergilkál", t: "1 spergilkálshaus" },
      { n: "sítróna", t: "1 sítróna" },
      { n: "hvítlaukur", t: "2 hvítlauksrif" },
      { n: "dill", t: "Ferskt dill" },
      { n: "ólífuolía", t: "3 msk ólífuolía", g: 1 },
      { n: "salt", t: "Salt og pipar", g: 1 }
    ],
    skref: [
      { t: "Hitaðu ofninn í 200°C. Skerðu kartöflurnar í tvennt.",
        ab: "Taktu laxinn úr kæli núna svo hann sé ekki ískaldur þegar hann fer í ofninn í skrefi 3." },
      { t: "Veltu kartöflunum upp úr helmingnum af olíunni, salti og pipar. Bakaðu í 20 mínútur.",
        ab: "Skerðu spergilkálið og sítrónuna og saxaðu hvítlaukinn og dillið meðan kartöflurnar bakast." },
      { t: "Leggðu laxinn og spergilkálið á milli kartaflanna. Dreifðu hvítlauk, sítrónusneiðum og restinni af olíunni yfir." },
      { t: "Bakaðu í 12–15 mínútur, þar til laxinn flagnar auðveldlega. Stráðu dilli yfir og kreistu sítrónusafa yfir allt." }
    ]
  },
  {
    id: "kjotbollur",
    nafn: "Kjötbollur í brúnni sósu",
    flokkur: "Kjötréttir",
    timi: 50,
    skammtar: 4,
    lysing: "Heimagerðar kjötbollur í rjómalagaðri brúnni sósu, með kartöflum og sultu.",
    hraefni: [
      { n: "hakk", t: "500 g nauta- eða svínahakk" },
      { n: "egg", t: "1 egg" },
      { n: "laukur", t: "1 laukur" },
      { n: "brauðrasp", t: "1 dl brauðrasp" },
      { n: "mjólk", t: "1 dl mjólk" },
      { n: "kjötkraftur", t: "1 kjötkraftsteningur í 5 dl af heitu vatni" },
      { n: "hveiti", t: "2 msk hveiti", g: 1 },
      { n: "rjómi", t: "1 dl rjómi" },
      { n: "smjör", t: "Smjör til steikingar" },
      { n: "kartöflur", t: "800 g kartöflur" },
      { n: "sulta", t: "Rifsberjasulta til að bera fram" },
      { n: "salt", t: "Salt og pipar", g: 1 }
    ],
    skref: [
      { t: "Settu kartöflurnar í pott með köldu vatni og sjóddu í um 20 mínútur.",
        ab: "Leggðu raspið í bleyti í mjólkinni núna. Það þarf að mýkjast áður en það fer í hakkið í næsta skrefi." },
      { t: "Saxaðu laukinn mjög smátt og blandaðu honum saman við hakkið, eggið, bleytta raspið, salt og pipar." },
      { t: "Mótaðu bollur á stærð við golfkúlur.",
        ab: "Leystu kjötkraftinn upp í heita vatninu núna. Hann fer í sósuna í skrefi 5." },
      { t: "Brúnaðu bollurnar í smjöri á pönnu, í nokkrum skömmtum. Taktu þær til hliðar." },
      { t: "Stráðu hveitinu á pönnuna og hrærðu. Helltu kraftinum út í smátt og smátt og bættu rjómanum við." },
      { t: "Settu bollurnar aftur út í sósuna og láttu malla undir loki í 10–15 mínútur. Berðu fram með kartöflum og sultu." }
    ]
  },
  {
    id: "bolognese",
    nafn: "Spagettí bolognese",
    flokkur: "Kjötréttir",
    timi: 45,
    skammtar: 4,
    lysing: "Hakk og tómatsósa sem fær að malla í rólegheitum, borin fram með spagettíi og parmesan.",
    hraefni: [
      { n: "hakk", t: "500 g nautahakk" },
      { n: "laukur", t: "1 laukur" },
      { n: "hvítlaukur", t: "2 hvítlauksrif" },
      { n: "gulrót", t: "1 gulrót" },
      { n: "tómatar í dós", t: "1 dós niðursoðnir tómatar" },
      { n: "tómatpúrra", t: "2 msk tómatpúrra" },
      { n: "oregano", t: "1 tsk oregano", g: 1 },
      { n: "spagettí", t: "400 g spagettí" },
      { n: "parmesan", t: "Parmesan til að bera fram" },
      { n: "ólífuolía", t: "Ólífuolía", g: 1 },
      { n: "salt", t: "Salt og pipar", g: 1 }
    ],
    skref: [
      { t: "Saxaðu laukinn, hvítlaukinn og gulrótina smátt." },
      { t: "Hitaðu olíu í potti og steiktu grænmetið í um 5 mínútur." },
      { t: "Bættu hakkinu við og brúnaðu það vel.",
        ab: "Settu stóran pott af vatni á helluna fyrir spagettíið núna. Það tekur tíma að ná suðu." },
      { t: "Bættu tómötunum, púrrunni og oregano við. Saltaðu, pipraðu og láttu malla í 20 mínútur." },
      { t: "Sjóddu spagettíið í söltuðu vatni samkvæmt leiðbeiningum á pakkanum meðan sósan mallar." },
      { t: "Helltu vatninu af spagettíinu og berðu fram með sósunni og rifnum parmesan." }
    ]
  },
  {
    id: "kokoskarri",
    nafn: "Kjúklingur í kókoskarríi",
    flokkur: "Kjötréttir",
    timi: 35,
    skammtar: 4,
    lysing: "Mildur og rjómakenndur kjúklingaréttur með rauðu karríi og kókosmjólk, borinn fram með hrísgrjónum.",
    hraefni: [
      { n: "kjúklingur", t: "600 g kjúklingabringur" },
      { n: "laukur", t: "1 laukur" },
      { n: "hvítlaukur", t: "2 hvítlauksrif" },
      { n: "engifer", t: "2 cm ferskt engifer" },
      { n: "karrímauk", t: "2 msk rautt karrímauk" },
      { n: "kókosmjólk", t: "1 dós kókosmjólk" },
      { n: "paprika", t: "1 rauð paprika" },
      { n: "spínat", t: "2 lúkur spínat" },
      { n: "límóna", t: "½ límóna" },
      { n: "hrísgrjón", t: "3 dl hrísgrjón" },
      { n: "olía", t: "Olía til steikingar", g: 1 }
    ],
    skref: [
      { t: "Skolaðu hrísgrjónin og sjóddu þau í 6 dl af vatni í um 15 mínútur." },
      { t: "Skerðu kjúklinginn í bita og saxaðu laukinn, hvítlaukinn og engiferið.",
        ab: "Skerðu paprikuna líka núna. Hún fer út í pottinn í skrefi 4." },
      { t: "Steiktu laukinn, hvítlaukinn og engiferið í olíu í 2–3 mínútur. Bættu karrímaukinu við og steiktu í 1 mínútu í viðbót." },
      { t: "Bættu kjúklingnum við og brúnaðu hann. Helltu kókosmjólkinni yfir, settu paprikuna út í og láttu malla í 12–15 mínútur." },
      { t: "Hrærðu spínatinu út í og kreistu límónusafa yfir. Berðu fram með hrísgrjónunum." }
    ]
  },
  {
    id: "graenmetislasagna",
    nafn: "Grænmetislasagna",
    flokkur: "Grænmetisréttir",
    timi: 75,
    skammtar: 6,
    lysing: "Lasagna með sveppum, kúrbít og papriku í tómatsósu, kotasælu og bræddum osti.",
    hraefni: [
      { n: "kúrbítur", t: "1 kúrbítur" },
      { n: "paprika", t: "1 rauð paprika" },
      { n: "sveppir", t: "250 g sveppir" },
      { n: "laukur", t: "1 laukur" },
      { n: "hvítlaukur", t: "2 hvítlauksrif" },
      { n: "tómatar í dós", t: "2 dósir niðursoðnir tómatar" },
      { n: "oregano", t: "1 tsk oregano", g: 1 },
      { n: "lasagnablöð", t: "9 lasagnablöð" },
      { n: "kotasæla", t: "250 g kotasæla" },
      { n: "rifinn ostur", t: "200 g rifinn ostur" },
      { n: "ólífuolía", t: "Ólífuolía", g: 1 },
      { n: "salt", t: "Salt og pipar", g: 1 }
    ],
    skref: [
      { t: "Hitaðu ofninn í 200°C og skerðu allt grænmetið í litla bita." },
      { t: "Steiktu laukinn og hvítlaukinn í olíu. Bættu sveppum, kúrbít og papriku við og steiktu í um 8 mínútur." },
      { t: "Bættu tómötunum og oregano við. Saltaðu, pipraðu og láttu malla í 10 mínútur.",
        ab: "Taktu eldfasta mótið, lasagnablöðin, kotasæluna og ostinn fram núna. Þú þarft allt í næsta skrefi." },
      { t: "Raðaðu í eldfast mót: sósa, lasagnablöð, kotasæla. Endurtaktu þrisvar og endaðu á sósu og rifnum osti." },
      { t: "Bakaðu í 35–40 mínútur, þar til blöðin eru mjúk og osturinn gylltur. Láttu standa í 10 mínútur áður en þú skerð." }
    ]
  },
  {
    id: "linsubaunasupa",
    nafn: "Linsubaunasúpa",
    flokkur: "Súpur",
    timi: 40,
    skammtar: 4,
    lysing: "Matarmikil og ódýr súpa úr rauðum linsubaunum með mildu karríi.",
    hraefni: [
      { n: "linsubaunir", t: "2 dl rauðar linsubaunir" },
      { n: "laukur", t: "1 laukur" },
      { n: "gulrót", t: "2 gulrætur" },
      { n: "hvítlaukur", t: "2 hvítlauksrif" },
      { n: "karríduft", t: "1 msk karríduft", g: 1 },
      { n: "tómatar í dós", t: "1 dós niðursoðnir tómatar" },
      { n: "grænmetiskraftur", t: "1 grænmetisteningur í 1 l af vatni" },
      { n: "kókosmjólk", t: "1 dl kókosmjólk" },
      { n: "olía", t: "Olía til steikingar", g: 1 },
      { n: "salt", t: "Salt", g: 1 }
    ],
    skref: [
      { t: "Saxaðu laukinn, gulræturnar og hvítlaukinn.",
        ab: "Skolaðu linsubaunirnar í sigti núna. Þær fara út í súpuna í skrefi 3." },
      { t: "Steiktu grænmetið í olíu í 5 mínútur. Bættu karríduftinu við og steiktu í 1 mínútu í viðbót." },
      { t: "Bættu linsubaunum, tómötum og grænmetiskrafti við og láttu sjóða í 20–25 mínútur." },
      { t: "Maukaðu súpuna með töfrasprota, hrærðu kókosmjólkinni út í og smakkaðu til með salti." }
    ]
  },
  {
    id: "kjotsupa",
    nafn: "Íslensk kjötsúpa",
    flokkur: "Súpur",
    timi: 90,
    skammtar: 6,
    lysing: "Lambakjöt og rótargrænmeti sem fær að malla lengi. Enn betri daginn eftir.",
    hraefni: [
      { n: "lambakjöt", t: "1 kg lambasúpukjöt" },
      { n: "súpujurtir", t: "1 dl þurrkaðar súpujurtir", g: 1 },
      { n: "hrísgrjón", t: "3 msk hrísgrjón" },
      { n: "rófur", t: "400 g rófur" },
      { n: "kartöflur", t: "400 g kartöflur" },
      { n: "gulrót", t: "3 gulrætur" },
      { n: "laukur", t: "1 laukur" },
      { n: "hvítkál", t: "¼ hvítkálshaus" },
      { n: "salt", t: "Salt og pipar", g: 1 }
    ],
    skref: [
      { t: "Settu kjötið í stóran pott með 2 lítrum af köldu vatni og láttu suðuna koma upp. Fleyttu froðuna ofan af." },
      { t: "Bættu salti, súpujurtum og hrísgrjónum við og láttu malla undir loki í 40 mínútur.",
        ab: "Flysjaðu og skerðu rófurnar, kartöflurnar, gulræturnar og laukinn núna. Það tekur sinn tíma og þarf að vera tilbúið í næsta skrefi." },
      { t: "Bættu rófum, kartöflum, gulrótum og lauk út í og láttu malla í 25 mínútur.",
        ab: "Skerðu hvítkálið í strimla meðan súpan mallar." },
      { t: "Bættu hvítkálinu við og sjóddu í 10 mínútur í viðbót. Smakkaðu til með salti og pipar." }
    ]
  },
  {
    id: "skuffukaka",
    nafn: "Skúffukaka",
    flokkur: "Eftirréttir",
    timi: 50,
    skammtar: 12,
    lysing: "Mjúk súkkulaðikaka í ofnskúffu með súkkulaðikremi og kókosmjöli.",
    hraefni: [
      { n: "hveiti", t: "5 dl hveiti", g: 1 },
      { n: "sykur", t: "4 dl sykur", g: 1 },
      { n: "kakó", t: "1 dl kakó + 3 msk í kremið" },
      { n: "lyftiduft", t: "2 tsk lyftiduft og 1 tsk matarsódi", g: 1 },
      { n: "egg", t: "2 egg" },
      { n: "mjólk", t: "2½ dl mjólk" },
      { n: "smjör", t: "250 g smjör (200 g í deigið, 50 g í kremið)" },
      { n: "flórsykur", t: "400 g flórsykur" },
      { n: "kaffi", t: "4 msk uppáhellt kaffi" },
      { n: "kókosmjöl", t: "Kókosmjöl til að strá yfir" }
    ],
    skref: [
      { t: "Hitaðu ofninn í 180°C og smyrðu ofnskúffu.",
        ab: "Bræddu öll 250 g af smjörinu núna svo það verði orðið volgt þegar þú þarft það í skrefi 3." },
      { t: "Blandaðu hveiti, sykri, kakói, lyftidufti og matarsóda saman í skál." },
      { t: "Hrærðu eggjunum, mjólkinni og 200 g af brædda smjörinu út í þar til deigið er slétt." },
      { t: "Helltu deiginu í skúffuna og bakaðu í 20–25 mínútur.",
        ab: "Gerðu kremið meðan kakan bakast, það er næsta skref." },
      { t: "Hrærðu saman flórsykri, 3 msk af kakói, restinni af brædda smjörinu og kaffinu í krem." },
      { t: "Láttu kökuna kólna aðeins. Smyrðu kreminu yfir og stráðu kókosmjöli yfir." }
    ]
  },
  {
    id: "ponnukokur",
    nafn: "Pönnukökur",
    flokkur: "Eftirréttir",
    timi: 35,
    skammtar: 4,
    lysing: "Þunnar íslenskar pönnukökur með sykri, eða sultu og rjóma.",
    hraefni: [
      { n: "hveiti", t: "3 dl hveiti", g: 1 },
      { n: "lyftiduft", t: "½ tsk matarsódi og ½ tsk salt", g: 1 },
      { n: "egg", t: "2 egg" },
      { n: "mjólk", t: "5 dl mjólk" },
      { n: "smjör", t: "50 g smjör" },
      { n: "vanilla", t: "1 tsk vanilludropar", g: 1 },
      { n: "sykur", t: "Sykur til að strá yfir", g: 1 }
    ],
    skref: [
      { t: "Bræddu smjörið á pönnukökupönnunni og helltu því í skál.",
        ab: "Taktu eggin og mjólkina úr kæli núna svo deigið verði ekki of kalt." },
      { t: "Blandaðu þurrefnunum saman. Hrærðu eggin og helminginn af mjólkinni út í þar til deigið er slétt." },
      { t: "Bættu restinni af mjólkinni, smjörinu og vanillunni við. Láttu deigið standa í 10 mínútur ef tími gefst." },
      { t: "Hitaðu pönnuna vel og steiktu þunnar pönnukökur, um 30 sekúndur á hvorri hlið. Stráðu sykri yfir og rúllaðu upp." }
    ]
  }
];
