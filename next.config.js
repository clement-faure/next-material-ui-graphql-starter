/* eslint-disable */
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  en: 'en',
  fr: 'fr',
};

const flowRight = require('lodash/fp/flowRight');

if (process.env.ANALYZE === 'true') {
  console.log('Enabling Webpack bundle analyzer');
}

const extendGlobalConfig = (nextConfig = {}) => ({
  ...nextConfig,
  pageExtensions: ['js', 'jsx'],
});

const extendRuntimeConfig = (nextConfig = {}) => ({
  ...nextConfig,
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    appName: 'NMuigStarter',
    graphqlUri: process.env.GRAPHQL_URI,
    localeSubpaths,
  },
});

const extendRewrites = (nextConfig = {}) => ({
  ...nextConfig,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
});

const extendWebpackConfig = (nextConfig = {}) => {
  let newNextConfig = { ...nextConfig };

  // In case analyse bundle mode
  if (process.env.ANALYZE === 'true') {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    });

    newNextConfig = withBundleAnalyzer(newNextConfig);
  }

  return newNextConfig;
};

module.exports = (nextConfig = {}) => {
  return flowRight([
    extendWebpackConfig,
    extendRuntimeConfig,
    extendRewrites,
    extendGlobalConfig,
  ])(nextConfig);
};
