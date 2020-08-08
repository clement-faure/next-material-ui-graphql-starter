import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { withTranslation, Router } from '~/lib/i18n';

const NagsHeader = ({ t }) => {
  const router = useRouter();

  const handleMenuClick = (e) => Router.push(e.key);

  return <div className="logo" />;
};

NagsHeader.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(NagsHeader);
