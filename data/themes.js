// OrdKompis - Practical Thematic Vocabulary
// Groups words into real-life everyday situations with Swedish context, type, and example.

window.ORDKOMPIS_THEMES = [
  {
    id: "fika-mat",
    title: "Fika & Restaurang",
    icon: "☕",
    description: "Beställa kaffe, mat och handla på kafé eller restaurang",
    words: [
      { sv: "en fika", en: "a coffee break with a pastry / social coffee", type: "substantiv", example: "Ska vi ta en fika tillsammans?" },
      { sv: "en påtår", en: "a free second cup of coffee refill", type: "substantiv", example: "Ingår påtår här?" },
      { sv: "en kanelbulle", en: "cinnamon bun", type: "substantiv", example: "En kaffe och en kanelbulle, tack." },
      { sv: "en kaffe latte", en: "latte", type: "substantiv", example: "Jag tar en havrelatte." },
      { sv: "dagens lunch", en: "dish of the day / lunch special", type: "substantiv", example: "Vad är dagens lunch idag?" },
      { sv: "notan", en: "the bill / check", type: "substantiv", example: "Kan vi få notan, tack?" },
      { sv: "att beställa", en: "to order", type: "verb", example: "Är ni redo att beställa?" },
      { sv: "att bjuda", en: "to treat / pay for someone", type: "verb", example: "Jag bjuder idag!" },
      { sv: "smaklig måltid", en: "bon appétit / enjoy your meal", type: "fras", example: "Varsågoda och smaklig måltid!" },
      { sv: "vegetariskt", en: "vegetarian", type: "adjektiv", example: "Finns det några vegetariska alternativ?" },
      { sv: "laktosfri", en: "lactose-free", type: "adjektiv", example: "Har ni laktosfri mjölk?" },
      { sv: "glutenfri", en: "gluten-free", type: "adjektiv", example: "Är brödet glutenfritt?" }
    ]
  },
  {
    id: "arbete",
    title: "Jobb & Kontor",
    icon: "💼",
    description: "Svenskt arbetsliv, möten, fika på jobbet och anställning",
    words: [
      { sv: "ett möte", en: "a meeting", type: "substantiv", example: "Jag sitter i ett möte fram till elva." },
      { sv: "en kollega", en: "a colleague", type: "substantiv", example: "Mina kollegor är trevliga och hjälpsamma." },
      { sv: "en chef", en: "a manager / boss", type: "substantiv", example: "Jag har ett samtal med min chef idag." },
      { sv: "en anställning", en: "an employment", type: "substantiv", example: "Hon fick en fast anställning." },
      { sv: "en provanställning", en: "probationary employment (usually 6 months)", type: "substantiv", example: "Kontraktet inleds med sex månaders provanställning." },
      { sv: "en lön", en: "a salary", type: "substantiv", example: "Lönen betalas ut den 25:e varje månad." },
      { sv: "ett fackförbund", en: "a trade union (det fackliga)", type: "substantiv", example: "Är du med i facket?" },
      { sv: "att vabba", en: "stay home to care for a sick child with state compensation", type: "verb", example: "Jag kan inte komma idag, jag måste vabba." },
      { sv: "att sjukanmäla sig", en: "to report sick", type: "verb", example: "Kom ihåg att sjukanmäla dig före klockan åtta." },
      { sv: "en friskvård", en: "wellness / health allowance", type: "substantiv", example: "Vi har 3000 kr i friskvårdsbidrag per år." },
      { sv: "ett personligt brev", en: "cover letter", type: "substantiv", example: "Bifoga CV och personligt brev." },
      { sv: "en intervju", en: "an interview", type: "substantiv", example: "Jag ska på anställningsintervju imorgon." }
    ]
  },
  {
    id: "bostad",
    title: "Bostad & Vardag",
    icon: "🏠",
    description: "Lägenhet, hyra, tvättstuga och återvinning",
    words: [
      { sv: "en hyra", en: "rent", type: "substantiv", example: "Hyran ska betalas i förskott." },
      { sv: "ett hyreskontrakt", en: "tenancy contract / lease", type: "substantiv", example: "Har du förstahandskontrakt eller andrahand?" },
      { sv: "en bostadsrätt", en: "housing cooperative apartment (owned condominium)", type: "substantiv", example: "De köpte en fin bostadsrätt i centrum." },
      { sv: "en tvättstuga", en: "communal laundry room", type: "substantiv", example: "Jag har bokat tvättstugan mellan 14 och 18." },
      { sv: "en tvättid", en: "laundry time slot", type: "substantiv", example: "Boka en tvättid på bokningstavlan." },
      { sv: "ett förråd", en: "storage unit / basement cage", type: "substantiv", example: "Cykeln står i källarförrådet." },
      { sv: "en källsortering", en: "waste sorting / recycling", type: "substantiv", example: "Källsortera plast och kartong i miljörummet." },
      { sv: "att panta", en: "return bottles and cans for deposit refund", type: "verb", example: "Vi pantar alltid alla läskburkar." },
      { sv: "ett trapphus", en: "stairwell / entrance hallway", type: "substantiv", example: "Ställ inte barnvagnar i trapphuset." },
      { sv: "ett miljörum", en: "recycling room", type: "substantiv", example: "Miljörummet är låst med portkoden." },
      { sv: "en granne", en: "a neighbour", type: "substantiv", example: "Hälsa på dina grannar i hissen." },
      { sv: "en portkod", en: "door entry code", type: "substantiv", example: "Vad är portkoden till porten?" }
    ]
  },
  {
    id: "halsa",
    title: "Hälsa & Sjukvård",
    icon: "🏥",
    description: "Vårdcentralen, apoteket och vanliga krämpor",
    words: [
      { sv: "en vårdcentral", en: "primary health care clinic", type: "substantiv", example: "Jag måste lista mig på en vårdcentral." },
      { sv: "1177 Vårdguiden", en: "the Swedish 24/7 health hotline and portal", type: "fras", example: "Ring 1177 om du behöver medicinska råd." },
      { sv: "ett recept", en: "prescription; recipe", type: "substantiv", example: "Läkaren skickade ett e-recept till apoteket." },
      { sv: "ett apotek", en: "pharmacy", type: "substantiv", example: "Hämta medicinen på närmaste apotek." },
      { sv: "en högkostnadsskydd", en: "high-cost protection ceiling (cap on medical/drug fees)", type: "substantiv", example: "När du når taket får du ett frikort." },
      { sv: "ett frikort", en: "free health care card once maximum fee is reached", type: "substantiv", example: "Jag har frikort resten av året." },
      { sv: "att ha ont i", en: "to hurt / have pain in", type: "verb/fras", example: "Jag har ont i halsen och huvudet." },
      { sv: "en feber", en: "fever", type: "substantiv", example: "Har du tagit tempen? Har du feber?" },
      { sv: "en förkylning", en: "a common cold", type: "substantiv", example: "Det är bara en vanlig förkylning." },
      { sv: "en remiss", en: "referral to a specialist", type: "substantiv", example: "Läkaren skrev en remiss till ögonkliniken." },
      { sv: "en tandläkare", en: "dentist", type: "substantiv", example: "Jag går till tandläkaren en gång om året." },
      { sv: "en bedövning", en: "anaesthesia / numbing injection", type: "substantiv", example: "Vill du ha lokalbedövning?" }
    ]
  },
  {
    id: "samhalle",
    title: "Svenska Myndigheter & Samhälle",
    icon: "🏛️",
    description: "Skatteverket, BankID, Försäkringskassan och Migrationsverket",
    words: [
      { sv: "ett personnummer", en: "personal identity number (YYMMDD-XXXX)", type: "substantiv", example: "Personnumret är nyckeln till det svenska samhället." },
      { sv: "ett BankID", en: "Swedish electronic mobile ID", type: "substantiv", example: "Logga in säkert med Mobilt BankID." },
      { sv: "en Swish", en: "instant mobile payment app", type: "substantiv", example: "Jag kan swisha dig pengarna direkt." },
      { sv: "Skatteverket", en: "Swedish Tax Agency", type: "substantiv", example: "Folkbokför dig hos Skatteverket när du flyttar." },
      { sv: "Försäkringskassan", en: "Social Insurance Agency", type: "substantiv", example: "Ansök om föräldrapenning hos Försäkringskassan." },
      { sv: "Migrationsverket", en: "Swedish Migration Agency", type: "substantiv", example: "Förnya uppehållstillståndet i god tid." },
      { sv: "ett uppehållstillstånd", en: "residence permit", type: "substantiv", example: "Hon fick permanent uppehållstillstånd." },
      { sv: "en folkbokföring", en: "population registration / official address register", type: "substantiv", example: "Du måste anmäla flytt för rätt folkbokföring." },
      { sv: "en deklaration", en: "tax return declaration", type: "substantiv", example: "Godkänn deklarationen med BankID." },
      { sv: "en legitimation", en: "ID card / identification document", type: "substantiv", example: "Kan jag få se legitimation?" },
      { sv: "ett medborgarskap", en: "citizenship", type: "substantiv", example: "Efter fem år kan man ofta ansöka om medborgarskap." },
      { sv: "ett ombud", en: "representative; pickup point (e.g. postombud)", type: "substantiv", example: "Paketet ligger hos ditt lokala postombud." }
    ]
  }
];
