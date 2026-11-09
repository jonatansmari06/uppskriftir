/*
  Uppskriftir fyrir uppskriftabókina.

  Hver uppskrift:
    id          – stutt einkvæmt heiti, bara litlir stafir og bandstrik
    nafn        – heiti réttarins
    flokkur     – verður að passa við nafn í FLOKKAR
    timi        – heildartími í mínútum (notað í síunni)
    timiTexti   – (valfrjálst) hvernig tíminn birtist, t.d. "30 mín + 10 dagar"
    skammtar    – (valfrjálst) texti, t.d. "3–4" eða "30–50 bollur"
    lysing      – (valfrjálst) stutt lýsing
    hraefni     – listi; t = textinn sem birtist,
                  n = grunnheiti fyrir síuna (eitt eða fleiri),
                  g: 1 = grunnhráefni sem birtist ekki í síunni (salt, pipar, olía, hveiti, sykur, vatn)
                  v: 1 = valfrjálst (má sleppa) – telst ekki með þegar síað er eftir hráefnum
                  heiti = nafn á hópi þar sem eitt dugar, t.d. "Kryddjurtir" eða "Hakk"
                  sn = hvernig hvert grunnheiti birtist í hópnum (t.d. "kinda" fyrir kindahakk)
                  tengi = "eða" eða "og/eða" á milli síðustu tveggja (sjálfgefið "og/eða")
                  restin: 1 = sýna hin í hópnum undir „Vantar" þótt eitt sé til (kryddjurtir)
                  syna = texti undir „Vantar" ef ekkert af grunnheitunum er til
    skref       – listi; t = texti skrefsins,
                  h = hráefnin í þessu skrefi með magni (valfrjálst),
                  ab = "Gott að hafa í huga" (valfrjálst)
    athugasemdir – (valfrjálst) listi af athugasemdum
    tillaga     – (valfrjálst) t.d. hvað er gott að bera fram með
*/

var FLOKKAR = [
  { nafn: "Kjötréttir",             engin: "Enginn kjötréttur",      litur: "#7b4a2d" },
  { nafn: "Fiskréttir",             engin: "Enginn fiskréttur",      litur: "#2b6c9e" },
  { nafn: "Grænmetisréttir",        engin: "Enginn grænmetisréttur", litur: "#3f8a3a" },
  { nafn: "Súpur",                  engin: "Engin súpa",             litur: "#c2671f" },
  { nafn: "Grautar og morgunmatur", engin: "Enginn grautur",         litur: "#a67c12" },
  { nafn: "Sósur og meðlæti",       engin: "Ekkert meðlæti",         litur: "#c0392b", tillogur: false },
  { nafn: "Eftirréttir",            engin: "Enginn eftirréttur",     litur: "#c2577f", tillogur: false },
  { nafn: "Verkun og geymsla",      engin: "Engin verkun",           litur: "#4d7a99", tillogur: false, handahof: false }
];

/* Flokkar hráefna í síunni. Hráefni sem er ekki hér lendir í „Annað". */
var HRAEFNAFLOKKAR = [
  { nafn: "Grænmeti",                   litur: "#3f8a3a", hraefni: ["laukur", "rauðkál", "paprika", "hvítlaukur", "rófa"] },
  { nafn: "Ávextir",                    litur: "#c0392b", hraefni: ["epli"] },
  { nafn: "Kjöt og fiskur",             litur: "#8b3a2b", hraefni: ["kindahakk", "nautahakk", "kjúklingabringur", "lambakjöt", "saltkjöt"] },
  { nafn: "Mjólkurvörur og egg",        litur: "#2f6fa8", hraefni: ["egg", "mjólk", "rjómi", "sýrður rjómi", "grísk jógúrt", "kotasæla", "ostur", "mexíkóostur", "smjör", "smjörlíki"] },
  { nafn: "Pasta, hrísgrjón og baunir", litur: "#a67c12", hraefni: ["hrísgrjón", "haframjöl"] },
  { nafn: "Hnetur og fræ",              litur: "#8a5a2b", hraefni: ["graskersfræ", "hnetur", "hörfræ", "jarðhnetur", "kasjúhnetur", "möndluflögur", "sesamfræ"] },
  { nafn: "Krydd og jurtir",            litur: "#6b7d1e", hraefni: ["steinselja", "oregano", "tímían", "kanill", "vanilludropar", "lárviðarlauf", "negulnaglar", "dill", "graslaukur", "basil", "skessujurt", "laukduft", "kjúklingakraftur", "saltpétur"] },
  { nafn: "Sósur og vökvar",            litur: "#c45a1a", hraefni: ["edik", "hunang", "sinnep", "tómatpúrra"] },
  { nafn: "Brauð, rasp og kex",         litur: "#9a6a3a", hraefni: ["brauðrasp", "Ritz-kex"] },
  { nafn: "Annað",                      litur: "#6b7378", hraefni: [] }
];

var UPPSKRIFTIR = [
  {
    id: "salatsosa",
    nafn: "Salatsósa",
    flokkur: "Sósur og meðlæti",
    timi: 5,
    skammtar: "1 meðalstórt salat",
    hraefni: [
      { n: "ólífuolía", t: "3–4 msk ólífuolía", g: 1 },
      { n: "edik", t: "1 msk edik" },
      { n: "salt", t: "½ tsk salt", g: 1 },
      { n: "sykur", t: "2 tsk sykur (má sleppa)", g: 1 },
      { n: ["rjómi", "sýrður rjómi", "grísk jógúrt"], syna: "Rjómi (sýrður rjómi eða grísk jógúrt)", t: "3–4 msk rjómi (ef vill)" },
      { n: "sinnep", t: "1 msk hunangssinnep eða sinnep (má sleppa)" },
      { n: ["skessujurt", "dill", "steinselja", "graslaukur", "laukduft", "basil"],
        heiti: "Kryddjurtir", restin: 1,
        t: "Kryddjurtir eftir smekk: skessujurt, dill, steinselja, graslaukur, laukduft, basil o.fl." }
    ],
    skref: [
      { t: "Hrærðu saman olíu, ediki, salti, sykri og sinnepi.",
        h: ["3–4 msk ólífuolía", "1 msk edik", "½ tsk salt", "2 tsk sykur", "1 msk hunangssinnep eða sinnep"],
        ab: "Ef þú notar ferskar kryddjurtir, saxaðu þær núna. Þær fara út í í næsta skrefi." },
      { t: "Hrærðu kryddjurtunum og rjómanum út í.",
        h: ["Kryddjurtir eftir smekk", "3–4 msk rjómi"],
        ab: "Ef tími gefst, leyfðu sósunni að standa í 10–15 mínútur. Þá tekur hún betur í sig bragðið af kryddjurtunum." },
      { t: "Blandaðu sósunni saman við salatið rétt áður en það er borið fram.",
        ab: "Hrærðu sósuna aftur rétt áður en hún fer á salatið, því olían og edikið skilja sig þegar hún stendur." }
    ],
    athugasemdir: [
      "Það má nota sýrðan rjóma eða gríska jógúrt í staðinn fyrir rjómann.",
      "Notaðu ferskar kryddjurtir ef þær eru til, annars þurrkaðar.",
      "Best er að nota rauð- eða hvítvínsedik, annars borðedik."
    ]
  },

  {
    id: "raudkal",
    nafn: "Rauðkál",
    flokkur: "Sósur og meðlæti",
    timi: 60,
    timiTexti: "um 1 klst",
    skammtar: "4–6",
    hraefni: [
      { n: "rauðkál", t: "1 kg rauðkál" },
      { n: "smjörlíki", t: "50 g smjörlíki" },
      { n: "laukur", t: "1 laukur" },
      { n: "epli", t: "2 epli, afhýdd" },
      { n: "sykur", t: "3 msk sykur", g: 1 },
      { n: "edik", t: "2–4 msk edik" },
      { n: "vatn", t: "250 ml vatn", g: 1 },
      { n: "salt", t: "Salt eftir smekk", g: 1 },
      { n: "lárviðarlauf", t: "1 lárviðarlauf" },
      { n: "negulnaglar", t: "2–3 negulnaglar" }
    ],
    skref: [
      { t: "Steiktu smáskorinn lauk, epli og sykur í smjörlíkinu þar til allt er mjúkt.",
        h: ["50 g smjörlíki", "1 laukur", "2 epli, afhýdd", "3 msk sykur"],
        ab: "Saxaðu eða rífðu rauðkálið (1 kg) meðan laukurinn og eplin mýkjast. Það fer út í í næsta skrefi." },
      { t: "Bættu rauðkálinu út í og strax á eftir edikinu. Lokaðu pottinum og láttu malla í 10 mínútur.",
        h: ["1 kg rauðkál", "2–4 msk edik"],
        ab: "Mældu vatnið (250 ml) og taktu lárviðarlaufið (1) og negulnaglana (2–3) fram meðan kálið mallar." },
      { t: "Bættu vatninu, lárviðarlaufinu, negulnöglunum og salti við og láttu malla á lágum hita í 30–45 mínútur.",
        h: ["250 ml vatn", "1 lárviðarlauf", "2–3 negulnaglar", "Salt eftir smekk"],
        ab: "Taktu lárviðarlaufið og negulnaglana upp úr áður en þú berð kálið fram." }
    ],
    athugasemdir: [
      "Notaðu borðedik. Það má líka nota hvít- eða rauðvínsedik."
    ]
  },

  {
    id: "grjonagrautur",
    nafn: "Grjónagrautur í ofni",
    flokkur: "Grautar og morgunmatur",
    timi: 100,
    timiTexti: "um 1 klst 40 mín",
    skammtar: "3–4",
    hraefni: [
      { n: "mjólk", t: "1,5 l nýmjólk" },
      { n: "hrísgrjón", t: "3–4 dl hrísgrjón" },
      { n: "smjör", t: "3–4 smjörklípur" },
      { n: "kanill", t: "1 tsk kanill (má sleppa)", v: 1 },
      { n: "salt", t: "½ tsk salt", g: 1 },
      { n: "vanilludropar", t: "2–3 tsk vanilludropar" }
    ],
    skref: [
      { t: "Hitaðu ofninn í 180°C." },
      { t: "Blandaðu öllu saman í eldföstu móti og settu álpappír yfir.",
        h: ["1,5 l nýmjólk", "3–4 dl hrísgrjón", "3–4 smjörklípur", "1 tsk kanill (má sleppa)", "½ tsk salt", "2–3 tsk vanilludropar"] },
      { t: "Bakaðu í 90 mínútur.",
        ab: "Taktu til það sem þú berð grautinn fram með á meðan." },
      { t: "Hrærðu í grautnum og smakkaðu hrísgrjónin til að gá hvort þau séu soðin. Ef mjólkin hefur ekki gufað að mestu upp, leyfðu grautnum að vera lengur í ofninum." }
    ],
    athugasemdir: [
      "Mamma sleppti kanilnum alltaf."
    ],
    tillaga: "Berðu grautinn fram með kanilsykri, rúsínum eða slátri."
  },

  {
    id: "musli",
    nafn: "Müsli",
    flokkur: "Grautar og morgunmatur",
    timi: 40,
    timiTexti: "15–33 mín í ofni",
    skammtar: "um 15",
    hraefni: [
      { n: "haframjöl", t: "5 dl haframjöl (tröllahafrar)" },
      { n: ["hnetur", "möndluflögur"], t: "1 dl hnetur eða möndluflögur" },
      { n: "graskersfræ", t: "1 dl graskersfræ" },
      { n: "sesamfræ", t: "1 dl sesamfræ" },
      { n: "hörfræ", t: "1 dl hörfræ" },
      { n: "kasjúhnetur", t: "1 dl kasjúhnetur, saxaðar" },
      { n: "jarðhnetur", t: "1 dl jarðhnetur (má sleppa)", v: 1 },
      { n: "hunang", t: "4 msk hunang" },
      { n: "kókosolía", t: "2 kúfaðar msk kókosolía", g: 1 },
      { n: ["vanilludropar", "kanill"], t: "Vanilludropar eða kanill ef vill", v: 1 }
    ],
    skref: [
      { t: "Hitaðu ofninn í 160°C.",
        ab: "Saxaðu kasjúhneturnar (1 dl) meðan ofninn hitnar." },
      { t: "Hitaðu hunangið og kókosolíuna aðeins saman, þar til olían er bráðin.",
        h: ["4 msk hunang", "2 kúfaðar msk kókosolía", "Vanilludropar eða kanill ef vill"] },
      { t: "Blandaðu öllu saman í skál.",
        h: ["5 dl haframjöl", "1 dl hnetur eða möndluflögur", "1 dl graskersfræ", "1 dl sesamfræ", "1 dl hörfræ", "1 dl kasjúhnetur", "1 dl jarðhnetur"] },
      { t: "Dreifðu blöndunni á bökunarpappír á ofnplötu." },
      { t: "Bakaðu í 15–33 mínútur og hrærðu af og til á meðan.",
        ab: "Fylgstu vel með síðustu mínúturnar, því hnetur og fræ brenna fljótt." }
    ],
    athugasemdir: [
      "Geymist í lokaðri krukku."
    ]
  },

  {
    id: "hakkbollur",
    nafn: "Hakkbollur í ofni",
    flokkur: "Kjötréttir",
    timi: 40,
    timiTexti: "um 40 mín",
    skammtar: "30–50 bollur",
    hraefni: [
      { n: ["kindahakk", "nautahakk"], heiti: "Hakk", sn: ["kinda", "nauta"], tengi: "eða", t: "1 kg lamba- eða nautahakk" },
      { n: "egg", t: "2 egg" },
      { n: "kotasæla", t: "200 g kotasæla" },
      { n: "ostur", t: "30 g rifinn ostur" },
      { n: "mexíkóostur", t: "30 g rifinn mexíkóostur" },
      { n: ["brauðrasp", "Ritz-kex"], t: "30 g brauðrasp eða mulið Ritz-kex" },
      { n: "hvítlaukur", t: "2 hvítlauksrif, kramin" },
      { n: "steinselja", t: "1 tsk steinselja" },
      { n: "oregano", t: "1 tsk oregano" },
      { n: "tímían", t: "1 tsk tímían" },
      { n: "salt", t: "2 tsk salt", g: 1 },
      { n: "laukur", t: "Smá saxaður laukur ef vill", v: 1 }
    ],
    skref: [
      { t: "Hitaðu ofninn í 180°C á yfir- og undirhita, eða á blæstri ef þú bakar á mörgum plötum í einu.",
        ab: "Kremdu hvítlaukinn (2 rif) og saxaðu laukinn meðan ofninn hitnar." },
      { t: "Blandaðu öllu vel saman í skál.",
        h: ["1 kg lamba- eða nautahakk", "2 egg", "200 g kotasæla", "30 g rifinn ostur", "30 g rifinn mexíkóostur", "30 g brauðrasp eða mulið Ritz-kex", "2 hvítlauksrif", "1 tsk steinselja", "1 tsk oregano", "1 tsk tímían", "2 tsk salt", "Smá saxaður laukur ef vill"] },
      { t: "Mótaðu bollur og raðaðu þeim á bökunarpappír á ofnplötu. Fín stærð er að taka skammtinn með matskeið.",
        ab: "Settu kartöflurnar í pott núna, svo þær verði tilbúnar á sama tíma og bollurnar." },
      { t: "Bakaðu í 20–25 mínútur, eða þar til bollurnar eru vel brúnar. Stærð bollanna hefur áhrif á bökunartímann." }
    ],
    athugasemdir: [
      "Ef þú átt ekki brauðrasp eða kex má nota hafragrjón.",
      "Gott að frysta afganginn."
    ],
    tillaga: "Berðu bollurnar fram með kartöflum og brúnni sósu. Einnig er hægt að hafa baunir, kartöflumús, rauðrófur og/eða súrar gúrkur."
  },

  {
    id: "kjuklingur-paprika",
    nafn: "Kjúklinga- og paprikuhrísgrjónaréttur í ofni",
    flokkur: "Kjötréttir",
    timi: 70,
    timiTexti: "um 1 klst 10 mín",
    skammtar: "3–4",
    hraefni: [
      { n: "hrísgrjón", t: "120 g ósoðin parboiled hrísgrjón" },
      { n: "paprika", t: "2 rauðar paprikur" },
      { n: "kjúklingabringur", t: "400 g gróft skornar kjúklingabringur" },
      { n: "rjómi", t: "250 ml rjómi" },
      { n: "kjúklingakraftur", t: "200 ml kjúklingasoð (1 teningur í vatni)" },
      { n: "salt", t: "Salt eftir þörfum", g: 1 },
      { n: "tímían", t: "Pipar og tímían", v: 1 },
      { n: "hvítlaukur", t: "1–2 hvítlauksrif, kramin" },
      { n: "tómatpúrra", t: "2 msk tómatpúrra úr dós" },
      { n: "ostur", t: "Rifinn ostur eftir smekk" }
    ],
    skref: [
      { t: "Hitaðu ofninn í 180°C.",
        ab: "Skerðu paprikurnar (2) og kjúklinginn (400 g) meðan ofninn hitnar." },
      { t: "Settu hrísgrjónin neðst í eldfast mót og saltaðu aðeins.",
        h: ["120 g hrísgrjón", "Salt"] },
      { t: "Dreifðu paprikunni yfir.",
        h: ["2 rauðar paprikur"] },
      { t: "Leggðu kjúklinginn yfir paprikuna og kryddaðu eftir smekk.",
        h: ["400 g kjúklingabringur", "Salt, pipar og tímían"],
        ab: "Leystu kjúklingateninginn (1) upp í heitu vatni (200 ml) núna. Soðið á að vera volgt í næsta skrefi." },
      { t: "Blandaðu volga soðinu saman við tómatpúrruna og rjómann og helltu yfir allt.",
        h: ["200 ml kjúklingasoð", "2 msk tómatpúrra", "250 ml rjómi"] },
      { t: "Rífðu hvítlaukinn yfir og stráðu rifnum osti vel yfir allt.",
        h: ["1–2 hvítlauksrif", "Rifinn ostur eftir smekk"] },
      { t: "Bakaðu í 45–55 mínútur, eða lengur ef þarf.",
        ab: "Athugaðu hvort hrísgrjónin séu orðin mjúk áður en þú tekur réttinn út." }
    ],
    athugasemdir: [
      "Enginn álpappír þegar ostur er settur ofan á."
    ]
  },

  {
    id: "kjotfars",
    nafn: "Kjötfars",
    flokkur: "Kjötréttir",
    timi: 15,
    timiTexti: "15 mín",
    hraefni: [
      { n: ["kindahakk", "nautahakk"], heiti: "Hakk", sn: ["kinda", "nauta"], tengi: "eða", t: "500 g feitt hakk, allt nema svínahakk (helst rollu- eða hrútshakk)" },
      { n: "laukur", t: "1 laukur, hakkaður" },
      { n: "hveiti", t: "85 g hveiti", g: 1 },
      { n: "lyftiduft", t: "½ tsk lyftiduft", g: 1 },
      { n: "egg", t: "1 egg" },
      { n: "salt", t: "1½ tsk salt", g: 1 },
      { n: "pipar", t: "¼ tsk pipar", g: 1 },
      { n: "tímían", t: "1 tsk tímían" },
      { n: "vatn", t: "150 ml ískalt vatn", g: 1 }
    ],
    skref: [
      { t: "Hrærðu hakkið og laukinn saman í hrærivél með hrærara í nokkrar mínútur.",
        h: ["500 g hakk", "1 laukur, hakkaður"] },
      { t: "Bættu hveiti, lyftidufti og eggi út í og hrærðu lengi saman, um 5 mínútur.",
        h: ["85 g hveiti", "½ tsk lyftiduft", "1 egg"] },
      { t: "Bættu salti og kryddi út í.",
        h: ["1½ tsk salt", "¼ tsk pipar", "1 tsk tímían"] },
      { t: "Láttu vélina ganga áfram og helltu ísköldu vatninu hægt og rólega saman við.",
        h: ["150 ml ískalt vatn (kalt vatn úr krana dugar)"] }
    ],
    athugasemdir: [
      "Farsið er fryst sem búðingur og svo steikt eða soðið sem bollur."
    ]
  },

  {
    id: "saltkjot-suda",
    nafn: "Matreiðsla saltkjöts",
    flokkur: "Kjötréttir",
    timi: 70,
    timiTexti: "1–2 klst",
    skammtar: "Magn eftir þörfum",
    hraefni: [
      { n: "saltkjöt", t: "Saltkjöt, eftir þörfum" },
      { n: "vatn", t: "Vatn", g: 1 },
      { n: "rófa", t: "Rófa (ef vill)", v: 1 }
    ],
    skref: [
      { t: "Láttu suðuna koma upp á nýju vatni í stórum potti. Það þarf ekki að salta vatnið." },
      { t: "Settu saltkjötið út í sjóðandi vatnið, án þess að fituhreinsa það. Hafðu nóg vatn til að fljóti yfir kjötið.",
        h: ["Saltkjöt"] },
      { t: "Sjóddu lambakjöt í 1 klst og rollukjöt í 2 klst. Rófan má fara út í hvenær sem er, en í síðasta lagi þegar korter er eftir.",
        h: ["Rófa (ef vill)"],
        ab: "Byrjaðu á kartöflu- og rófustöppunni og baununum meðan kjötið sýður." }
    ],
    athugasemdir: [
      "Bannað að fituhreinsa kjötið áður en það er soðið."
    ],
    tillaga: "Berðu fram með kartöflu- og rófustöppu og baunum."
  },

  {
    id: "saltkjot",
    nafn: "Saltkjöt Gumma",
    flokkur: "Verkun og geymsla",
    timi: 14430,
    timiTexti: "30 mín + 10 dagar",
    skammtar: "10 kg kjöt",
    hraefni: [
      { n: "lambakjöt", t: "10 kg kjöt í stórum bitum" },
      { n: "salt", t: "600 g salt", g: 1 },
      { n: "saltpétur", t: "u.þ.b. ⅕ tsk saltpétur" },
      { n: "sykur", t: "2 msk sykur (ekki sleppa)", g: 1 }
    ],
    skref: [
      { t: "Blandaðu öllum þurrefnunum saman.",
        h: ["600 g salt", "⅕ tsk saltpétur", "2 msk sykur"] },
      { t: "Sáldraðu smá af blöndunni á botninn á kútnum." },
      { t: "Veltu kjötbitunum upp úr blöndunni.",
        h: ["10 kg kjöt"] },
      { t: "Raðaðu öllu þétt í kútinn. Afgangssaltið fer allt ofan í kútinn." },
      { t: "Helltu blóðvatninu sem varð eftir í fötunni sem kjötið var geymt í út í kútinn. Sveinn gamli sagði að það skipti máli!" },
      { t: "Ef blóðvatnið nær ekki upp að brún kútsins, bættu við vatni." },
      { t: "Settu þungt farg ofan á og lok yfir, þannig að kjötið komist ekki í snertingu við loft. Geymdu kútinn í kuldanum." }
    ],
    athugasemdir: [
      "Tilbúið eftir 10 daga.",
      "Suða: lambakjöt í 1 klst, rollukjöt í 2 klst. Gott er að bæta rófu út í.",
      "Bannað að fituhreinsa kjötið áður en það er soðið."
    ]
  }
];
