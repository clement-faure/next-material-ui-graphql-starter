import React, { useEffect } from 'react';
import App from 'next/app';
import PropTypes from 'prop-types';

import { ApolloProvider } from '@apollo/client';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Import global style
import theme from '~/styles/theme';

// Lib
import { useApollo } from '~/lib/apolloClient';
import { appWithTranslation } from '~/lib/i18n';

import NagsHeader from '~/components/layout/NagsHeader';
import NagsFooter from '~/components/layout/NagsFooter';

function MyApp({ Component, pageProps }) {
  // Initialize apollo client and populate cache with pageProps
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NagsHeader />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <NagsFooter />
      </ThemeProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

MyApp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default appWithTranslation(MyApp);
