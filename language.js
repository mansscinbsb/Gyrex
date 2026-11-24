const gyrexLanguage = (() => {
  const russian = {
    "home.title": "GYREX — Уличная одежда и горная эстетика",
    "menu.open": "Открыть меню",
    "menu.close": "Закрыть меню",
    "menu.title": "Меню",
    "menu.navigation": "Главное меню",
    "menu.catalog": "Каталог",
    "menu.categories": "Категории",
    "menu.collections": "Все коллекции",
    "menu.orderInfo": "О заказе",
    "menu.contacts": "Контакты",
    "menu.jackets": "Куртки",
    "menu.hoodies": "Худи",
    "menu.sweatshirts": "Свитшоты",
    "menu.longsleeves": "Лонгсливы",
    "menu.tshirts": "Футболки",
    "menu.pants": "Брюки",
    "menu.shorts": "Шорты",
    "menu.headwear": "Кепки и шапки",
    "menu.backpacks": "Рюкзаки",
    "menu.accessories": "Аксессуары",
    "collection.summer": "Лето",
    "collection.winter": "Зима",
    "collection.transitional": "Демисезон",
    "collection.summerAlt": "Летняя коллекция GYREX",
    "collection.winterAlt": "Зимняя коллекция GYREX",
    "collection.transitionalAlt": "Демисезонная коллекция GYREX",
    "home.description": "— это платформа нашего подхода, представляющая собой объединение нескольких стилей одежды, где вы можете подобрать нужный образ, изменить его цветовую гамму или комплектацию. С помощью наших сервисов вы можете подобрать подобные образы.",
    "home.collectionSignoff": "Комбинируйте, редактируйте, самовыражайтесь!",
    "home.feature": "В данном видеоролике вы можете увидеть, как команда GYREX поэтапно создает вашу индивидуальную вещь.",
    "home.featureCarousel": "Видео о пошиве",
    "home.featurePagination": "Выбрать слайд",
    "home.featureSlide": "Слайд",
    "home.featurePosition": "Слайд {current} из {total}",
    "home.gallery": "Сервис Gallery Draft дает вам возможность предлагать команде GYREX референсы ваших работ для рассмотрения и создания коллекции на их основе.",
    "gallery.photo": "Фотография из галереи",
    "gallery.1": "Капюшон цвета индиго и облегающие солнцезащитные очки",
    "gallery.2": "Салатовая ветровка и жёлтая кепка",
    "gallery.3": "Лавандовая ветровка с розовой кепкой и перчатками",
    "gallery.4": "Бледно-жёлтая куртка с капюшоном и голубая юбка",
    "gallery.5": "Серебристо-серая куртка с капюшоном и высоким воротником",
    "gallery.6": "Бледно-розовая куртка и чёрная горнолыжная маска",
    "gallery.7": "Лавандовая куртка и серая юбка, образ в полный рост",
    "gallery.8": "Лавандовая куртка с капюшоном и очки с жёлтыми линзами",
    "gallery.9": "Куртка с капюшоном цвета шалфея и многослойные шорты",
    "gallery.10": "Яркая салатовая ветровка с капюшоном",
    "gallery.11": "Рыжая кепка, маска для лица и оранжевая верхняя одежда",
    "gallery.12": "Образ с зелёным пуховиком в полный рост",
    "gallery.13": "Светло-серый комплект на фоне заснеженных гор",
    "gallery.14": "Оливковый капюшон и облегающие очки с фиолетовыми линзами",
    "gallery.15": "Капюшон цвета шалфея, козырёк и маска для лица",
    "gallery.16": "Турист с рюкзаком у горных вершин на закате",
    "gallery.17": "Альпинист в тёмном капюшоне и синих очках на фоне оранжевого неба",
    "gallery.18": "Турист сидит среди камней над горной долиной",
    "gallery.19": "Турист в бордовой куртке на каменистом зелёном склоне",
    "gallery.20": "Чёрный комплект для активного отдыха, снятый в помещении",
    "gallery.21": "Голубой пуховик в заснеженной горной долине",
    "gallery.22": "Мятная куртка, вид со спины",
    "gallery.23": "Оранжево-графитовый пуловер с капюшоном для активного отдыха",
    "gallery.24": "Серо-зелёный стёганый пуховик, вид со спины",
    "gallery.26": "Светло-серый пуховик с капюшоном и тёмными брюками",
    "footer.navigation": "Информация для покупателей",
    "footer.help": "Помощь",
    "footer.account": "Мой аккаунт",
    "footer.shop": "Покупки",
    "footer.about": "О нас",
    "footer.signIn": "Войти или зарегистрироваться",
    "footer.whoWeAre": "Кто мы",
    "social.channels": "Социальные сети",
    "logo.deer": "Логотип GYREX с оленем",
    "panel.close": "Закрыть окно",
    "about.title": "О GYREX",
    "about.close": "Закрыть раздел о GYREX",
    "about.lead": "GYREX сочетает свободные силуэты уличной одежды с практичными деталями горной экипировки.",
    "about.design": "В основе наших моделей — объёмные пуховики, свободный крой и возможность менять слои одежды по погоде. В повседневной носке важны детали. Мы продумываем, как сохранить тепло и свободу движений, используем водоотталкивающие покрытия, надёжные молнии и карманы, до которых удобно дотянуться.",
    "about.customTitle": "Собери свою куртку",
    "about.customDescription": "Мы планируем запустить онлайн-конструктор курток. Выбери модель, а затем настрой цвета отдельных деталей, форму капюшона и тип застёжки. В некоторых моделях можно будет выбрать между перчатками и варежками.",
    "about.customGoal": "Так можно собрать куртку под свой стиль и под то, как ты будешь её носить.",
    "account.title": "Аккаунт",
    "account.close": "Закрыть окно аккаунта",
    "account.options": "Вход и регистрация",
    "account.signIn": "Войти",
    "account.register": "Создать аккаунт",
    "account.email": "Электронная почта",
    "account.password": "Пароль",
    "account.status": "Вход и регистрация пока недоступны.",
    "account.submitted": "Аккаунты станут доступны после подключения серверной части.",
    "account.emailRequired": "Введи адрес электронной почты.",
    "account.emailInvalid": "Введи корректный адрес электронной почты.",
    "account.passwordRequired": "Введи пароль.",
    "cart.title": "Корзина",
    "cart.pageTitle": "Корзина — GYREX",
    "cart.empty": "Твоя корзина пуста.",
    "cart.back": "Вернуться к каталогу",
    "cart.close": "Закрыть корзину и вернуться на главную",
    "language.title": "Выбери язык",
    "language.close": "Закрыть выбор языка",
    "language.current": "Язык сайта — русский",
    "panel.new-arrivals.title": "Новинки",
    "panel.new-arrivals.text": "Новинки будут появляться здесь по мере выхода коллекций.",
    "panel.try-on.title": "Виртуальная примерка",
    "panel.try-on.text": "Виртуальная примерка с помощью камеры пока в разработке.",
    "panel.delivery-times.title": "Сроки доставки",
    "panel.delivery-times.text": "Срок доставки зависит от адреса и способа доставки. Он отсчитывается с момента отправки заказа.",
    "panel.production-times.title": "Сроки пошива",
    "panel.production-times.text": "Каждое изделие шьём индивидуально после оформления заказа. Срок пошива зависит от модели и выбранных деталей и рассчитывается отдельно от доставки.",
    "panel.packaging.title": "Упаковка",
    "panel.packaging.text": "Концепт упаковки GYREX: матовая коробка и тонкая бумага, в которую завёрнута одежда.",
    "panel.packaging.photo": "Концепт упаковки GYREX: закрытая коробка и открытая коробка с курткой внутри",
    "panel.support.title": "Центр поддержки",
    "panel.support.text": "Здесь мы опубликуем контакты службы поддержки.",
    "panel.faq.title": "Частые вопросы",
    "panel.faq.text": "По мере развития магазина здесь появятся ответы на вопросы о размерах, наличии и заказах.",
    "panel.contacts.title": "Связаться с нами",
    "panel.contacts.text": "Здесь мы опубликуем контакты GYREX.",
    "panel.shipping.title": "Отправка и доставка",
    "panel.shipping.text": "Способы и стоимость доставки будут указаны после запуска онлайн-заказов.",
    "panel.order-tracking.title": "Отслеживание заказа",
    "panel.order-tracking.text": "Отслеживание появится после запуска онлайн-заказов.",
    "panel.returns.title": "Возврат и отказ от заказа",
    "panel.returns.text": "Условия возврата товара и денег, а также отказа от заказа мы опубликуем до начала онлайн-продаж.",
    "panel.product-care.title": "Уход за одеждой",
    "panel.product-care.text": "Рекомендации по стирке, сушке и хранению смотри на ярлыке изделия.",
    "panel.stores.title": "Найти магазин",
    "panel.stores.text": "Здесь появится информация о магазинах.",
    "panel.gift-cards.title": "Подарочные карты",
    "panel.gift-cards.text": "Подарочные карты GYREX пока недоступны.",
    "panel.resale.title": "Перепродажа",
    "panel.resale.text": "Сервис перепродажи GYREX пока недоступен.",
    "panel.app.title": "Скачать приложение",
    "panel.app.text": "Коллекции GYREX доступны для просмотра на этом сайте.",
    "panel.athletes.title": "Спортсмены и амбассадоры",
    "panel.athletes.text": "Здесь мы будем рассказывать о сотрудничестве со спортсменами и амбассадорами.",
    "panel.sustainability.title": "Устойчивое развитие",
    "panel.sustainability.text": "Информацию о материалах и уходе мы будем публиковать вместе с новыми моделями.",
    "panel.careers.title": "Вакансии",
    "panel.careers.text": "Здесь будем публиковать открытые вакансии.",
    "panel.newsroom.title": "Новости",
    "panel.newsroom.text": "Здесь появятся новости бренда и коллекций."
  };

  const flags = { en: "images/flags/america.png", ru: "images/flags/russia.png" };
  const storageKey = "gyrex-language";
  const supported = (value) => value === "en" || value === "ru";
  const languageButton = document.querySelector("#open-language");
  const currentFlag = languageButton?.querySelector("img");
  const dialog = document.querySelector("#language-dialog");
  const options = dialog ? [...dialog.querySelectorAll("[data-select-language]")] : [];
  const links = [...document.querySelectorAll("a[data-language-link]")].map((link) => ({
    link,
    href: link.getAttribute("href")
  }));
  const messages = [
    ...[...document.querySelectorAll("[data-i18n]")].map((element) => ({
      element, key: element.dataset.i18n, english: element.textContent.trim()
    })),
    ...["aria-label", "alt"].flatMap((attribute) =>
      [...document.querySelectorAll(`[data-i18n-${attribute}]`)].map((element) => ({
        element, attribute, key: element.getAttribute(`data-i18n-${attribute}`),
        english: element.getAttribute(attribute)
      }))
    )
  ];

  let language = "en";

  function t(key, english) {
    return language === "ru" ? (russian[key] ?? english) : english;
  }

  function initialLanguage() {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    // Local files can have separate storage, so carry the choice between them in the link.
    if (window.location.protocol === "file:" && supported(fromUrl)) return fromUrl;
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (supported(stored)) return stored;
    } catch {
      // The link can still carry the choice when storage is restricted.
    }
    return supported(fromUrl) ? fromUrl : "en";
  }

  function apply(selected) {
    language = selected;
    document.documentElement.lang = language;
    for (const { element, attribute, key, english } of messages) {
      const translated = t(key, english);
      if (attribute) {
        element.setAttribute(attribute, translated);
      } else {
        element.textContent = translated;
      }
    }
    for (const { link, href } of links) {
      const destination = new URL(href, window.location.href);
      destination.searchParams.set("lang", language);
      link.href = destination.href;
    }
    if (currentFlag) {
      currentFlag.src = flags[language];
      languageButton.setAttribute("aria-label", t("language.current", "Site language — English"));
    }
    options.forEach((option) => {
      option.setAttribute("aria-pressed", String(option.dataset.selectLanguage === language));
    });
    document.dispatchEvent(new Event("gyrex-languagechange"));
  }

  languageButton?.addEventListener("click", () => {
    dialog.showModal();
    options.find((option) => option.dataset.selectLanguage === language).focus();
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selected = option.dataset.selectLanguage;
      try {
        window.localStorage.setItem(storageKey, selected);
      } catch {
        // Private browsing and local files can restrict storage.
      }
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", selected);
        window.history.replaceState(window.history.state, "", url.href);
      } catch {
        // Navigation still carries the locale when file URL history cannot be edited.
      }
      apply(selected);
      dialog.close();
    });
  });

  apply(initialLanguage());
  return { t };
})();
