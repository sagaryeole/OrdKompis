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
    }
  }
};
