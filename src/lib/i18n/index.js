const path = require('path');
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  preload: ['en'],
  defaultLanguage: 'en',
  fallbackLng: 'en',
  otherLanguages: ['fr'],
  localeSubpaths: process.env.I18N_LOCALE_SUB_PATHS,
  localePath: path.resolve('./public/static/locales'),
});
