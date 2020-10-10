import React from 'react';

import Head from 'next/head';
import getConfig from 'next/config';

import { Button } from '@material-ui/core';

import { useTranslation } from '~/lib/i18n';

const {
  publicRuntimeConfig: { appName },
} = getConfig();

const Homepage = () => {
  const { t, i18n } = useTranslation('common');

  const onLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <Head>
        <title>{`${appName} - ${t('index.head_title')}`}</title>
      </Head>
      <div className="padding-50">
        <Button onClick={onLanguageChange}>{t('change-locale')}</Button>
      </div>
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Homepage;
