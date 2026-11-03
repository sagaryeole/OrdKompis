// OrdKompis - Interface languages (learner's language for meanings and UI helper text)
// Swedish learning labels (tabs, grammar headings) stay in Swedish on purpose.
window.ORDKOMPIS_I18N = {
  defaultLang: "en",
  languages: [
    { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
    { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
    { code: "pt", name: "Português (Brasil)", flag: "🇧🇷", dir: "ltr" },
    { code: "ru", name: "Русский", flag: "🇷🇺", dir: "ltr" },
    { code: "uk", name: "Українська", flag: "🇺🇦", dir: "ltr" }
  ],
  strings: {
    languageLabel: {
      en: "Language", ar: "اللغة", pt: "Idioma", ru: "Язык", uk: "Мова"
    },
    hintVerb: {
      en: "Sök på grundform (skriva), böjd form (skrev) eller engelska (write).",
      ar: "ابحث بالمصدر (skriva) أو بصيغة مصرّفة (skrev) أو بالإنجليزية (write).",
      pt: "Pesquise pela forma de base (skriva), pela forma conjugada (skrev) ou em inglês (write).",
      ru: "Ищите по инфинитиву (skriva), по форме прошедшего времени (skrev) или по-английски (write).",
      uk: "Шукайте за інфінітивом (skriva), за відмінюваною формою (skrev) або англійською (write)."
    },
    hintNoun: {
      en: "Sök singular, plural, bestämd form eller engelska för att se alla 4 formerna.",
      ar: "ابحث بالمفرد أو الجمع أو المعرّف أو بالإنجليزية لرؤية الأشكال الأربعة.",
      pt: "Pesquise o singular, o plural, a forma definida ou o inglês para ver as 4 formas.",
      ru: "Ищите единственное или множественное число, определённую форму или английское слово, чтобы увидеть все 4 формы.",
      uk: "Шукайте однину, множину, означену форму або англійське слово, щоб побачити всі 4 форми."
    },
    hintAdj: {
      en: "Sök grundform, böjd form eller engelsk betydelse.",
      ar: "ابحث بالصيغة الأساسية أو بالصيغة المصرّفة أو بالمعنى الإنجليزي.",
      pt: "Pesquise a forma básica, a forma flexionada ou o significado em inglês.",
      ru: "Ищите основную форму, словоформу или английское значение.",
      uk: "Шукайте основну форму, відмінювану форму або англійське значення."
    },
    nextVerb: {
      en: "Nästa verb →", ar: "الفعل التالي ←", pt: "Próximo verbo →", ru: "Следующий глагол →", uk: "Наступне дієслово →"
    },
    nextNoun: {
      en: "Nästa substantiv →", ar: "الاسم التالي ←", pt: "Próximo substantivo →", ru: "Следующее существительное →", uk: "Наступний іменник →"
    },
    nextAdjective: {
      en: "Nästa adjektiv →", ar: "الصفة التالية ←", pt: "Próximo adjetivo →", ru: "Следующее прилагательное →", uk: "Наступний прикметник →"
    },
    showAll: {
      en: "Visa alla {n}", ar: "عرض الكل ({n})", pt: "Mostrar todas ({n})", ru: "Показать все ({n})", uk: "Показати всі ({n})"
    },
    hideList: {
      en: "Dölj lista", ar: "إخفاء القائمة", pt: "Ocultar lista", ru: "Скрыть список", uk: "Сховати список"
    },
    showMore: {
      en: "Visa fler ({n})", ar: "عرض المزيد ({n})", pt: "Mostrar mais ({n})", ru: "Показать ещё ({n})", uk: "Показати ще ({n})"
    },
    wordsToExplore: {
      en: "{n} ord att utforska", ar: "{n} كلمة للاستكشاف", pt: "{n} palavras para explorar", ru: "слов для изучения: {n}", uk: "слів для вивчення: {n}"
    },
    showingOf: {
      en: "Visar {a} av {b} ord", ar: "عرض {a} من {b} كلمة", pt: "Mostrando {a} de {b} palavras", ru: "Показано {a} из {b} слов", uk: "Показано {a} з {b} слів"
    },
    englishTranslation: {
      en: "In English", ar: "الترجمة الإنجليزية", pt: "Tradução para o inglês", ru: "Перевод на английский", uk: "Переклад англійською"
    },
    translationLabel: {
      en: "Translation", ar: "الترجمة", pt: "Tradução", ru: "Перевод", uk: "Переклад"
    },
    tabVerbs: {
      en: "Verbs", ar: "أفعال", pt: "Verbos", ru: "Глаголы", uk: "Дієслова"
    },
    tabNouns: {
      en: "Nouns", ar: "أسماء", pt: "Substantivos", ru: "Существительные", uk: "Іменники"
    },
    tabAdjectives: {
      en: "Adjectives", ar: "صفات", pt: "Adjetivos", ru: "Прилагательные", uk: "Прикметники"
    },
    tabPrepositions: {
      en: "Prepositions", ar: "حروف الجر", pt: "Preposições", ru: "Предлоги", uk: "Прийменники"
    },
    tabWordOrder: {
      en: "Word Order", ar: "ترتيب الكلمات", pt: "Ordem das palavras", ru: "Порядок слов", uk: "Порядок слів"
    },
    tabPronouns: {
      en: "Pronouns", ar: "الضمائر", pt: "Pronomes", ru: "Местоимения", uk: "Займенники"
    },
    tabNumbers: {
      en: "Numbers & Time", ar: "الأرقام والوقت", pt: "Números e tempo", ru: "Числа и время", uk: "Числа та час"
    },
    tabPhrases: {
      en: "Everyday Phrases", ar: "عبارات يومية", pt: "Frases do dia a dia", ru: "Повседневные фразы", uk: "Щоденні фрази"
    },
    tabIdioms: {
      en: "Idioms & Expressions", ar: "الأمثال والتعبيرات", pt: "Expressões idiomáticas", ru: "Идиомы и выражения", uk: "Ідіоми та вирази"
    },
    tabFalseFriends: {
      en: "False Friends", ar: "أصدقاء زائفون", pt: "Falsos cognatos", ru: "Ложные друзья переводчика", uk: "Хибні друзі перекладача"
    },
    tabCollocations: {
      en: "Collocations", ar: "متلازمات لفظية", pt: "Colocações", ru: "Словосочетания", uk: "Сполучуваність слів"
    },
    tabPrepositionalVerbs: {
      en: "Verb + Preposition", ar: "فعل + حرف جر", pt: "Verbo + preposição", ru: "Глагол + предлог", uk: "Дієслово + прийменник"
    },
    tabCommonMistakes: {
      en: "Common Mistakes", ar: "أخطاء شائعة", pt: "Erros comuns", ru: "Типичные ошибки", uk: "Поширені помилки"
    },
    tabSubordinators: {
      en: "Subordinators", ar: "أدوات الربط الفرعية", pt: "Conjunções subordinativas", ru: "Подчинительные союзы", uk: "Підрядні сполучники"
    },
    prepositionsTitle: {
      en: "Prepositions", ar: "حروف الجر", pt: "Preposições", ru: "Предлоги", uk: "Прийменники"
    },
    prepositionsDesc: {
      en: "Learn common meanings, expressions and differences between Swedish and English.", ar: "تعلم المعاني الشائعة والتعبيرات والاختلافات بين السويدية والإنجليزية.", pt: "Aprenda significados comuns, expressões e diferenças entre sueco e inglês.", ru: "Изучите распространённые значения, выражения и отличия от английского.", uk: "Вивчіть поширені значення, вирази та відмінності від англійської."
    },
    tabPronouns: {
      en: "Pronouns", ar: "ضمائر", pt: "Pronomes", ru: "Местоимения", uk: "Займенники"
    },
    tabNumbers: {
      en: "Numbers & Time", ar: "الأرقام والوقت", pt: "Números e Tempo", ru: "Числа и время", uk: "Числа та час"
    },
    tabPhrases: {
      en: "Phrases", ar: "عبارات", pt: "Frases", ru: "Фразы", uk: "Фрази"
    },
    tabIdioms: {
      en: "Idioms", ar: "مصطلحات", pt: "Expressões", ru: "Идиомы", uk: "Ідиоми"
    },
    tabFalseFriends: {
      en: "False Friends", ar: "كلمات مزيفة", pt: "Falsos cognatos", ru: "Ложные друзья", uk: "Хідні слова"
    },
    tabCollocations: {
      en: "Collocations", ar: "عبارات شائعة", pt: "Colocações", ru: "Сочетаемость слов", uk: "Сочетання слів"
    },
    tabPrepositionalVerbs: {
      en: "Prepositional Verbs", ar: "أفعال حرفية", pt: "Verbos preposicionais", ru: "Предложные глаголы", uk: "Прийменні дієслова"
    },
    tabCommonMistakes: {
      en: "Common Mistakes", ar: "أخطاء شائعة", pt: "Erros comuns", ru: "Распространенные ошибки", uk: "Поширені помилки"
    },
    tabSubordinators: {
      en: "Subordinators", ar: "أدوات ربط", pt: "Subordinadores", ru: "Союзы", uk: "Зв’язкові слова"
    },
    tabThemes: {
      en: "Themes", ar: "موضوعات", pt: "Temas", ru: "Темы", uk: "Теми"
    },
    enForm: {
      en: "1. En-form", ar: "1. En-form", pt: "1. En-form", ru: "1. En-форма", uk: "1. En-форма"
    },
    ettForm: {
      en: "2. Ett-form", ar: "2. Ett-form", pt: "2. Ett-form", ru: "2. Ett-форма", uk: "2. Ett-форма"
    },
    pluralDefinite: {
      en: "3. Plural / Definite", ar: "3. جمع / معرف", pt: "3. Plural / Definido", ru: "3. Множ. / Определ.", uk: "3. Множ. / Означ."
    },
    comparative: {
      en: "Comparative", ar: "مفضل", pt: "Comparativo", ru: "Сравнительная", uk: "Споріднена"
    },
    superlative: {
      en: "Superlative", ar: "أفضل", pt: "Superlativo", ru: "Превосходная", uk: "Найвища"
    },
    nextAdjectiveBtn: {
      en: "Next adjective →", ar: "الصفة التالية ←", pt: "Próximo adjetivo →", ru: "Следующее прилагательное →", uk: "Наступний прикметник →"
    },
    nounSingularIndef: {
      en: "1. Singular Indefinite (a / an)", ar: "1. مفرد غير محدد (a / an)", pt: "1. Singular Indefinido (um / uma)", ru: "1. Единственное неопределённое", uk: "1. Однина неозначена"
    },
    nounSingularIndefDesc: {
      en: "One item (general)", ar: "شيء واحد (عام)", pt: "Um item (geral)", ru: "Один предмет (вообще)", uk: "Один предмет (загалом)"
    },
    nounSingularDef: {
      en: "2. Singular Definite (the)", ar: "2. مفرد محدد (الـ)", pt: "2. Singular Definido (o / a)", ru: "2. Единственное определённое", uk: "2. Однина означена"
    },
    nounSingularDefDesc: {
      en: "A specific item", ar: "شيء محدد", pt: "Um item específico", ru: "Конкретный предмет", uk: "Конкретний предмет"
    },
    nounPluralIndef: {
      en: "3. Plural Indefinite", ar: "3. جمع غير محدد", pt: "3. Plural Indefinido", ru: "3. Множественное неопределённое", uk: "3. Множина неозначена"
    },
    nounPluralIndefDesc: {
      en: "Several items (general)", ar: "عدة أشياء (عام)", pt: "Vários itens (geral)", ru: "Несколько предметов (вообще)", uk: "Кілька предметів (загалом)"
    },
    nounPluralDef: {
      en: "4. Plural Definite (the)", ar: "4. جمع معرف", pt: "4. Plural Definido", ru: "4. Множественное определённое", uk: "4. Множина означена"
    },
    nounPluralDefDesc: {
      en: "Specific items", ar: "أشياء محددة", pt: "Itens específicos", ru: "Конкретные предметы", uk: "Конкретні предмети"
    },
    listenNoun: {
      en: "Listen to noun", ar: "استمع للاسم", pt: "Ouvir substantivo", ru: "Прослушать существительное", uk: "Прослухати іменник"
    },
    searchLabelVerbs: {
      en: "Search Swedish verb", ar: "ابحث عن الفعل السويدي", pt: "Pesquisar verbo sueco", ru: "Поиск шведского глагола", uk: "Пошук шведського дієслова"
    },
    searchPlaceholderVerbs: {
      en: "skriva, gå, arbeta, write…", ar: "skriva, gå, arbeta, write…", pt: "skriva, gå, arbeta, write…", ru: "skriva, gå, arbeta, write…", uk: "skriva, gå, arbeta, write…"
    },
    hintVerb: {
      en: "Search by infinitive (skriva), conjugated form (skrev) or English (write).", ar: "ابحث بالمصدر (skriva) أو بصيغة مصرّفة (skrev) أو بالإنجليزية (write).", pt: "Pesquise pela forma de base (skriva), pela forma conjugada (skrev) ou em inglês (write).", ru: "Ищите по инфинитиву (skriva), по форме прошедшего времени (skrev) или по-английски (write).", uk: "Шукайте за інфінітивом (skriva), за відмінюваною формою (skrev) або англійською (write)."
    },
    sectionTitleVerbs: {
      en: "Common verbs to explore", ar: "أفعال شائعة للاستكشاف", pt: "Verbos comuns para explorar", ru: "Распространенные глаголы для изучения", uk: "Поширені дієслова для вивчення"
    },
    ariaLabelVerbs: {
      en: "Search verbs in Swedish or English", ar: "ابحث عن أفعال بالسويدية أو الإنجليزية", pt: "Pesquisar verbos em sueco ou inglês", ru: "Искать глаголы по-шведски или по-английски", uk: "Шукайте дієслова шведською або англійською"
    },
    searchLabelNouns: {
      en: "Search nouns (En / Ett & Plural)", ar: "ابحث عن الأسماء (En / Ett & الجمع)", pt: "Pesquisar substantivos (En / Ett & Plural)", ru: "Поиск существительных (En / Ett & множественное)", uk: "Пошук іменників (En / Ett & множина)"
    },
    searchPlaceholderNouns: {
      en: "bil, flicka, äpple, hus, book…", ar: "bil, flicka, äpple, hus, book…", pt: "bil, flicka, äpple, hus, book…", ru: "bil, flicka, äpple, hus, book…", uk: "bil, flicka, äpple, hus, book…"
    },
    hintNoun: {
      en: "Search singular, plural, definite form or English to see all 4 forms.", ar: "ابحث بالمفرد أو الجمع أو المعرّف أو بالإنجليزية لرؤية الأشكال الأربعة.", pt: "Pesquise o singular, o plural, a forma definida ou o inglês para ver as 4 formas.", ru: "Ищите единственное или множественное число, определённую форму или английское слово, чтобы увидеть все 4 формы.", uk: "Шукайте однину, множину, означену форму або англійське слово, щоб побачити всі 4 форми."
    },
    sectionTitleNouns: {
      en: "Common nouns & declension groups", ar: "أسماء شائعة ومجموعات التصريف", pt: "Substantivos comuns e grupos de declinação", ru: "Распространенные существительные и группы склонения", uk: "Поширені іменники та групи відмінювання"
    },
    ariaLabelNouns: {
      en: "Search nouns in Swedish or English", ar: "ابحث عن أسماء بالسويدية أو الإنجليزية", pt: "Pesquisar substantivos em sueco ou inglês", ru: "Искать существительные по-шведски или по-английски", uk: "Шукайте іменники шведською або англійською"
    },
    searchLabelAdjectives: {
      en: "Search adjectives", ar: "ابحث عن الصفات", pt: "Pesquisar adjetivos", ru: "Поиск прилагательных", uk: "Пошук прикметників"
    },
    searchPlaceholderAdjectives: {
      en: "stor, större, beautiful…", ar: "stor, större, beautiful…", pt: "stor, större, beautiful…", ru: "stor, större, beautiful…", uk: "stor, större, beautiful…"
    },
    hintAdj: {
      en: "Search by base form, inflected form or English meaning.", ar: "ابحث بالصيغة الأساسية أو بالصيغة المصرّفة أو بالمعنى الإنجليزي.", pt: "Pesquise a forma básica, a forma flexionada ou o significado em inglês.", ru: "Ищите основную форму, словоформу или английское значение.", uk: "Шукайте основну форму, відмінювану форму або англійське значення."
    },
    sectionTitleAdjectives: {
      en: "Adjectives to explore", ar: "صفات للاستكشاف", pt: "Adjetivos para explorar", ru: "Прилагательные для изучения", uk: "Прикметники для вивчення"
    },
    ariaLabelAdjectives: {
      en: "Search adjectives in Swedish or English", ar: "ابحث عن صفات بالسويدية أو الإنجليزية", pt: "Pesquisar adjetivos em sueco ou inglês", ru: "Искать прилагательные по-шведски или по-английски", uk: "Шукайте прикметники шведською або англійською"
    },
    quizTitle: {
      en: "Practice", ar: "تدرب", pt: "Pratique", ru: "Практика", uk: "Тренування"
    },
    quizSubtitle: {
      en: "Choose a quiz mode to practice.", ar: "اختر وضع اختبار للتدرب.", pt: "Escolha um modo de teste para praticar.", ru: "Выберите режим теста для практики.", uk: "Оберіть режим тренування."
    },
    quizModeEnEtt: {
      en: "En / Ett", ar: "En / Ett", pt: "En / Ett", ru: "En / Ett", uk: "En / Ett"
    },
    quizModeEnEttDesc: {
      en: "Guess the correct article", ar: "تخمين المحدد الصحيح", pt: "Adivinhe o artigo correto", ru: "Угадайте правильный артикль", uk: "Вгадайте правильний артикль"
    },
    quizModeSvEn: {
      en: "Swedish → English", ar: "السويدية → الإنجليزية", pt: "Sueco → Inglês", ru: "Шведский → Английский", uk: "Шведська → Англійська"
    },
    quizModeSvEnDesc: {
      en: "Translate to English", ar: "ترجم إلى الإنجليزية", pt: "Traduza para o inglês", ru: "Переведите на английский", uk: "Перекладіть англійською"
    },
    quizModeEnSv: {
      en: "English → Swedish", ar: "الإنجليزية → السويدية", pt: "Inglês → Sueco", ru: "Английский → Шведский", uk: "Англійська → Шведська"
    },
    quizModeEnSvDesc: {
      en: "Find the Swedish word", ar: "أعثر على الكلمة السويدية", pt: "Encontre a palavra sueca", ru: "Найдите шведское слово", uk: "Знайдіть шведське слово"
    },
    quizStats: {
      en: "Correct:", ar: "صحيح:", pt: "Correto:", ru: "Правильно:", uk: "Правильно:"
    },
    nextQuiz: {
      en: "Next →", ar: "التالي ←", pt: "Próximo →", ru: "Следующий →", uk: "Наступне →"
    },
    backToMenu: {
      en: "Back to quiz menu", ar: "العودة إلى قائمة الاختبار", pt: "Voltar ao menu do teste", ru: "Назад к меню теста", uk: "Назад до меню тренування"
    },
    collocationsDesc: {
      en: "Words that often appear together. Learn whole phrases to sound more natural.", ar: "كلمات تظهر معًا غالبًا. تعلم الجمل الكاملة لتتحدث بطبيعية.", pt: "Palavras que aparecem juntas. Aprenda frases inteiras para soar mais natural.", ru: "Слова, которые часто идут вместе. Изучайте целые фразы, чтобы говорить естественнее.", uk: "Слова,які частіше йдуть разом. Вивчайте цілі фрази, щоб говорити природніше."
    },
    prepositionalVerbsDesc: {
      en: "The preposition goes with the verb and affects meaning. Learn the combination with the example.", ar: "حرف الجر يرتبط بالفعل ويؤثر على المعنى. تعلم التركيبة مع المثال.", pt: "A preposição vai com o verbo e afeta o significado. Aprenda a combinação com o exemplo.", ru: "Предлог идет с глаголом и влияет на значение. Изучайте комбинацию с примером.", uk: "Прийменник йде з дієсловом і впливає на значення. Вивчайте поєднання з прикладом."
    },
    commonMistakesDesc: {
      en: "Common mistakes that Swedish speakers often make and how to avoid them.", ar: "أخطاء شائعة يرتكبها الناطقون بالسويدية وكيفية تجنبها.", pt: "Erros comuns que falantes de sueco cometem e como evitá-los.", ru: "Распространенные ошибки, которые часто делают носители шведского языка, и как их избегать.", uk: "Поширені помилки, які роблять носії шведської мови, і як їх уникнути."
    },
    subordinatorsDesc: {
      en: "Subordinators used to join sentences and give context.", ar: "أدوات الربط المستخدمة لربط الجمل وإعطاء السياق.", pt: "Subordinadores usados para juntar frases e dar contexto.", ru: "Союзы, используемые для соединения предложений и придания контекста.", uk: "Зв’язкові слова, які використовуються для поєднання речень та надання контексту."
    },
    noItems: {
      en: "No items added yet.", ar: "لم تتم إضافة عناصر بعد.", pt: "Nenhum item adicionado ainda.", ru: "Записей пока нет.", uk: "Записів ще немає."
    },
    listenPhrase: {
      en: "Listen to phrase", ar: "استمع للعبارة", pt: "Ouvir frase", ru: "Прослушать фразу", uk: "Прослухати фразу"
    },
    notes: {
      en: "Notes", ar: "ملاحظات", pt: "Notas", ru: "Примечания", uk: "Примітки"
    },
    listenExample: {
      en: "Listen to example", ar: "استمع للمثال", pt: "Ouvir exemplo", ru: "Прослушать пример", uk: "Прослухати приклад"
    },
    mistakeLabel: {
      en: "Common mistake", ar: "خطأ شائع", pt: "Erro comum", ru: "Распространенная ошибка", uk: "Поширена помилка"
    },
    naturalSwedish: {
      en: "Natural Swedish", ar: "السويدية الطبيعية", pt: "Sueco natural", ru: "Живой шведский", uk: "Жива шведська"
    },
    listenCorrectSentence: {
      en: "Listen to correct sentence", ar: "استمع للجملة الصحيحة", pt: "Ouvir frase correta", ru: "Прослушать правильное предложение", uk: "Прослухати правильне речення"
    },
    rules: {
      en: "Rules", ar: "القواعد", pt: "Regras", ru: "Правила", uk: "Правила"
    },
    subordinatorsExamples: {
      en: "Subordinators with examples", ar: "أدوات الربط مع أمثلة", pt: "Subordinadores com exemplos", ru: "Союзы с примерами", uk: "Зв’язкові слова з прикладами"
    },
    cardinals: {
      en: "Cardinal Numbers", ar: "الأرقام الأساسية", pt: "Números cardinais", ru: "Количественные числительные", uk: "Кількісні числівники"
    },
    ordinals: {
      en: "Ordinal Numbers", ar: "الأرقام الترتيبية", pt: "Números ordinais", ru: "Порядковые числительные", uk: "Порядкові числівники"
    },
    time: {
      en: "Time", ar: "الوقت", pt: "Tempo", ru: "Время", uk: "Час"
    },
    timeLabel: {
      en: "Time", ar: "الوقت", pt: "Tempo", ru: "Время", uk: "Час"
    },
    looksLike: {
      en: "Looks like", ar: "تبدو مثل", pt: "Parece", ru: "Похоже на", uk: "Виглядає як"
    },
    actuallyMeans: {
      en: "Actually means", ar: "تعني بالفعل", pt: "Na verdade significa", ru: "На самом деле означает", uk: "Насправді означає"
    },
    explanation: {
      en: "Explanation", ar: "توضيح", pt: "Explicação", ru: "Пояснение", uk: "Пояснення"
    },
    literal: {
      en: "Literally", ar: "حرفيًا", pt: "Literalmente", ru: "Буквально", uk: "Буквально"
    },
    pattern: {
      en: "Pattern", ar: "نمط", pt: "Padrão", ru: "Шаблон", uk: "Шаблон"
    },
    usage: {
      en: "Usage", ar: "الاستخدام", pt: "Uso", ru: "Употребление", uk: "Вживання"
    },
    collocationsDesc: {
      en: "Words that often go together. Learn the whole expression to sound more natural in Swedish.", ar: "كلمات غالبًا ما تأتي معًا. تعلم التعبير كاملًا لتبدو أكثر طبيعية بالسويدية.", pt: "Palavras que costumam aparecer juntas. Aprenda a expressão inteira para soar mais natural em sueco.", ru: "Слова, которые часто употребляются вместе. Изучите выражение целиком, чтобы говорить естественнее.", uk: "Слова, що часто вживаються разом. Вивчіть вираз цілком, щоб говорити природніше."
    },
    prepositionalVerbsDesc: {
      en: "The preposition belongs with the verb and affects meaning. Learn the combination with the example.", ar: "حرف الجر مرتبط بالفعل ويؤثر على المعنى. تعلم التركيبة مع المثال.", pt: "A preposição pertence ao verbo e afeta o significado. Aprenda a combinação com o exemplo.", ru: "Предлог связан с глаголом и влияет на значение. Изучите сочетание вместе с примером.", uk: "Прийменник пов'язаний із дієсловом і впливає на значення. Вивчіть поєднання разом із прикладом."
    },
    noItemsYet: {
      en: "No items added yet.", ar: "لم تتم إضافة أي عناصر بعد.", pt: "Nenhum item adicionado ainda.", ru: "Элементы ещё не добавлены.", uk: "Елементи ще не додано."
    },
    falseFriendsDesc: {
      en: "Words that look English but mean something different in Swedish.", ar: "كلمات تبدو إنجليزية ولكن معناها مختلف في السويدية.", pt: "Palavras que parecem inglesas, mas significam algo diferente em sueco.", ru: "Слова, которые выглядят как английские, но означают что-то другое на шведском.", uk: "Слова, що виглядають як англійські, але мають інше значення на шведській."
    },
    idiomsDesc: {
      en: "Common Swedish idioms with meaning and examples.", ar: "مصطلحات سويدية شائعة مع المعنى والمثال.", pt: "Expressões suecas comuns com significado e exemplos.", ru: "Распространенные шведские идиомы со значением и примерами.", uk: "Поширені шведські ідиоми зі значенням та прикладами."
    },
    wordOrderDesc: {
      en: "Main clauses, subordinate clauses, V2 rule and BIFF with examples.", ar: "الجمل الرئيسية، الجمل الفرعية، قاعدة V2 و BIFF مع أمثلة.", pt: "Oras principais, orações subordinadas, regra V2 e BIFF com exemplos.", ru: "Главные и придаточные предложения, правило V2 и BIFF с примерами.", uk: "Головні та примітні речення, правило V2 та BIFF з прикладами."
    },
    commonCombinations: {
      en: "Common combinations", ar: "تركيبات شائعة", pt: "Combinações comuns", ru: "Распространенные комбинации", uk: "Поширені поєднання"
    },
    listenWord: {
      en: "Listen to word", ar: "استمع للكلمة", pt: "Ouvir palavra", ru: "Прослушать слово", uk: "Прослухати слово"
    },
    phrasesDesc: {
      en: "Everyday phrases organized by situation.", ar: "عبارات يومية منظمة حسب الحالة.", pt: "Frases cotidianas organizadas por situação.", ru: "Повседневные фразы, организованные по ситуациям.", uk: "Щоденні фрази, організовані за ситуаціями."
    },
    quizEnEttQuestion: {
      en: "En eller ett? · Guess the correct article:", ar: "En eller ett؟ · خمن المحدد الصحيح:", pt: "En eller ett? · Adivinhe o artigo correto:", ru: "En eller ett? · Угадайте правильный артикль:", uk: "En eller ett? · Вгадайте правильний артикль:"
    },
    meaning: {
      en: "Meaning", ar: "المعنى", pt: "Significado", ru: "Значение", uk: "Значення"
    },
    quizCorrect: {
      en: "Correct!", ar: "صحيح!", pt: "Correto!", ru: "Правильно!", uk: "Правильно!"
    },
    quizWrong: {
      en: "Wrong", ar: "خطأ", pt: "Errado", ru: "Неверно", uk: "Невірно"
    },
    quizCorrectAnswer: {
      en: "Correct answer", ar: "الإجابة الصحيحة", pt: "Resposta correta", ru: "Правильный ответ", uk: "Правильна відповідь"
    },
    quizWordIs: {
      en: "It is", ar: "هي", pt: "É", ru: "Это", uk: "Це"
    },
    quizPluralIs: {
      en: "Plural:", ar: "الجمع:", pt: "Plural:", ru: "Множественное:", uk: "Множина:"
    },
    quizNotQuite: {
      en: "Not quite", ar: "ليس تمامًا", pt: "Não exatamente", ru: "Не совсем", uk: "Не зовсім"
    },
    quizPluralFormIs: {
      en: "The plural form is", ar: "صيغة الجمع هي", pt: "A forma plural é", ru: "Форма множественного числа:", uk: "Форма множини:"
    },
    nounDeclensionGroup: {
      en: "Declension group", ar: "مجموعة التصريف", pt: "Grupo de declinação", ru: "Группа склонения", uk: "Група відмінювання"
    },
    nounSingularIndef: {
      en: "1. Singular Indefinite (a / an)", ar: "1. مفرد غير محدد (a / an)", pt: "1. Singular Indefinido (um / uma)", ru: "1. Единственное неопределённое", uk: "1. Однина неозначена"
    },
    nounSingularIndefDesc: {
      en: "One item (general)", ar: "شيء واحد (عام)", pt: "Um item (geral)", ru: "Один предмет (вообще)", uk: "Один предмет (загалом)"
    },
    nounSingularDef: {
      en: "2. Singular Definite (the)", ar: "2. مفرد محدد (الـ)", pt: "2. Singular Definido (o / a)", ru: "2. Единственное определённое", uk: "2. Однина означена"
    },
    nounSingularDefDesc: {
      en: "A specific item", ar: "شيء محدد", pt: "Um item específico", ru: "Конкретный предмет", uk: "Конкретний предмет"
    },
    nounPluralIndef: {
      en: "3. Plural Indefinite", ar: "3. جمع غير محدد", pt: "3. Plural Indefinido", ru: "3. Множественное неопределённое", uk: "3. Множина неозначена"
    },
    nounPluralIndefDesc: {
      en: "Several items (general)", ar: "عدة أشياء (عام)", pt: "Vários itens (geral)", ru: "Несколько предметов (вообще)", uk: "Кілька предметів (загалом)"
    },
    nounPluralDef: {
      en: "4. Plural Definite (the)", ar: "4. جمع محدد", pt: "4. Plural Definido", ru: "4. Множественное определённое", uk: "4. Множина означена"
    },
    nounPluralDefDesc: {
      en: "Specific items", ar: "أشياء محددة", pt: "Itens específicos", ru: "Конкретные предметы", uk: "Конкретні предмети"
    },
    listenNoun: {
      en: "Listen to noun", ar: "استمع للاسم", pt: "Ouvir substantivo", ru: "Прослушать существительное", uk: "Прослухати іменник"
    },
    verbFormInfinitiv: {
      en: "1. Infinitiv · to…", ar: "1. المصدر · to…", pt: "1. Infinitivo · to…", ru: "1. Инфинитив · to…", uk: "1. Інфінітив · to…"
    },
    verbFormPresens: {
      en: "2. Presens · now", ar: "2. الحاضر · الآن", pt: "2. Presente · agora", ru: "2. Настоящее · сейчас", uk: "2. Теперішній · зараз"
    },
    verbFormPreteritum: {
      en: "3. Preteritum · past", ar: "3. الماضي · ماضي", pt: "3. Pretérito · passado", ru: "3. Прошедшее · в прошлом", uk: "3. Минулий · минуле"
    },
    verbFormSupinum: {
      en: "4. Supinum", ar: "4. السوبينوم", pt: "4. Supino", ru: "4. Супинум", uk: "4. Супінум"
    },
    verbFormPerfekt: {
      en: "5. Perfekt · has / have", ar: "5. التام · has / have", pt: "5. Perfeito · has / have", ru: "5. Перфект · has / have", uk: "5. Перфект · has / have"
    },
    verbFormImperativ: {
      en: "6. Imperativ · command", ar: "6. الأمر · أمر", pt: "6. Imperativo · comando", ru: "6. Повелительное · команда", uk: "6. Наказовий · наказ"
    },
    verbDescUsedAfterAtt: {
      en: "Used after <em>att</em>", ar: "يُستخدم بعد <em>att</em>", pt: "Usado após <em>att</em>", ru: "Используется после <em>att</em>", uk: "Використовується після <em>att</em>"
    },
    verbDescModal: {
      en: "Modal verb (before other verbs)", ar: "فعل ناقص (قبل أفعال أخرى)", pt: "Verbo modal (antes de outros verbos)", ru: "Модальный глагол (перед другими глаголами)", uk: "Модальне дієслово (перед іншими дієсловами)"
    },
    verbDescPresens: {
      en: "Same for I, you, we, they", ar: "نفس الشكل لـ I, you, we, they", pt: "Mesmo para I, you, we, they", ru: "Одинаков для I, you, we, they", uk: "Однаковий для I, you, we, they"
    },
    verbDescPreteritum: {
      en: "Finished action in past", ar: "حدث انتهى في الماضي", pt: "Ação concluída no passado", ru: "Завершённое действие в прошлом", uk: "Завершена дія в минулому"
    },
    verbDescSupinum: {
      en: "Used with <em>har</em> or <em>hade</em>", ar: "يُستخدم مع <em>har</em> أو <em>hade</em>", pt: "Usado com <em>har</em> ou <em>hade</em>", ru: "Используется с <em>har</em> или <em>hade</em>", uk: "Використовується з <em>har</em> або <em>hade</em>"
    },
    verbDescPerfekt: {
      en: "har + supine form", ar: "har + صيغة السوبينوم", pt: "har + forma supina", ru: "har + форма супинума", uk: "har + форма супінуму"
    },
    verbDescImperativ: {
      en: "A command or instruction", ar: "أمر أو تعليمات", pt: "Um comando ou instrução", ru: "Приказ или инструкция", uk: "Наказ або інструкція"
    },
    verbRarelyUsed: {
      en: "rarely used", ar: "يُستخدم نادراً", pt: "raramente usado", ru: "редко используется", uk: "використовується рідко"
    },
    verbNoSupinum: {
      en: "No common supine form for this modal verb.", ar: "لا توجد صيغة سوبينوم شائعة لهذا الفعل الناقص.", pt: "Não há forma supina comum para este verbo modal.", ru: "У этого модального глагола нет общепринятой формы супинума.", uk: "Для цього модального дієслова немає поширеної форми супінуму."
    },
    verbGroup: {
      en: "Verbgrupp:", ar: "مجموعة الفعل:", pt: "Grupo verbal:", ru: "Группа глагола:", uk: "Група дієслова:"
    },
    exampleSwedish: {
      en: "Exempel på svenska", ar: "أمثلة بالسويدية", pt: "Exemplos em sueco", ru: "Примеры на шведском", uk: "Приклади шведською"
    }
  }
};
