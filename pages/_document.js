import Document, { Html, Head, Main, NextScript } from 'next/document';
import { existsGaId, GTM_TRACKING_ID } from '../utils/gtm';
import { existsAdClientId, GAD_CLIENT_ID } from '../utils/gad';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const GA_TRACKING_ID = GTM_TRACKING_ID;
    const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GA_TRACKING_ID}');`
    const gtmFrame = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    
    return (
      <Html lang="ja">
        <Head>
          {existsGaId ? (
            <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
          ) : null}
          {existsAdClientId ? (
            <script data-ad-client={`${GAD_CLIENT_ID}`} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          ) : null}
        </Head>
        <body>
          {existsGaId ? (
            <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
          ): null}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
