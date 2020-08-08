import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import getConfig from 'next/config';

import { i18n, withTranslation } from '~/lib/i18n';

const {
  publicRuntimeConfig: { appName },
} = getConfig();

const Homepage = ({ t }) => (
  <>
    <Head>
      <title>{`${appName} - ${t('index.head_title')}`}</title>
    </Head>
    <div className="padding-50">
      <button>{t('change-locale')}</button>
    </div>
  </>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
