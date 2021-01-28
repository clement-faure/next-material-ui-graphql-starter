import React from 'react';

import Head from 'next/head';

import { Button } from '@material-ui/core';

import { useTranslation } from '~/lib/i18n';

import GlobalLayout from '~/components/layout/GlobalLayout';

const Homepage = () => {
  const { t, i18n } = useTranslation('common');

  const onLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <Head>
        <title>{`${t('app_name')} - ${t('index.head_title')}`}</title>
      </Head>
      <GlobalLayout title={t('index.head_title')}>
        <Button onClick={onLanguageChange}>{t('change-locale')}</Button>
      </GlobalLayout>
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Homepage;
