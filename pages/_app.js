import '../public/css/main.css';
import 'highlight.js/styles/night-owl.css';

// fontawesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
