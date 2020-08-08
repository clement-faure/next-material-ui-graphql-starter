import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '~/lib/i18n';

const NagsFooter = ({ t }) => {
  return (
    <div className="text-align-center">
      {t('footer')}
      <script> </script>
      {/* Fix bug Chrome that causes CSS transitions to fire */}
    </div>
  );
};

NagsFooter.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(NagsFooter);
