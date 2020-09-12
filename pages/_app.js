import Router from 'next/router';
import * as gtag from '../utils/gtag';
import '../public/css/main.css';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = (path) => {
      gtag.pageview(path);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default App;
