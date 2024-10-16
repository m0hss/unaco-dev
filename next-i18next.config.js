// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ["en", "fr", "nl"], // Define supported languages
    defaultLocale: "en", // Set the default language
    localeDetection: false,
  },
  defaultNS: 'common',
  // localePath:
  //   typeof window === "undefined"
  //     ? require("path").resolve("./public/locales")
  //     : "/locales",

  // reloadOnPrerender: process.env.NODE_ENV === "development",
};
