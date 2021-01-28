import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import { withTranslation } from '~/lib/i18n';

import GlobalLayout from '~/components/layout/GlobalLayout';
import UsersContainer from '~/views/users/UsersContainer';

const UsersNoSSRPage = ({ t }) => (
  <>
    <Head>
      <title>{`${t('app_name')} - ${t('users_no_ssr.head_title')}`}</title>
    </Head>
    <GlobalLayout title={t('users_no_ssr.head_title')}>
      <UsersContainer />
    </GlobalLayout>
  </>
);

UsersNoSSRPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

UsersNoSSRPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(UsersNoSSRPage);
