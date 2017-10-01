  // Create language switcher instance
  var lang = new Lang();

  lang.dynamic('da', 'langpack/da.json');

  lang.init({
    defaultLang: 'en',
    currentLang: 'en',
    cookie: {
      name: 'langCookie',

      expiry: 365,
      path: '/'
    },
    allowCookieOverride: true
  });
