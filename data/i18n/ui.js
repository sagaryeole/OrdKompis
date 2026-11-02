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
