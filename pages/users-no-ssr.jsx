import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import getConfig from 'next/config';

import { withTranslation } from '~/lib/i18n';

import UsersContainer from '~/views/users/UsersContainer';

const {
  publicRuntimeConfig: { appName },
} = getConfig();

const UsersNoSSRPage = ({ t }) => (
  <>
    <Head>
      <title>{`${appName} - ${t('users_no_ssr.head_title')}`}</title>
    </Head>
    <div className="padding-50">
      <UsersContainer />
    </div>
  </>
);

UsersNoSSRPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

UsersNoSSRPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(UsersNoSSRPage);
