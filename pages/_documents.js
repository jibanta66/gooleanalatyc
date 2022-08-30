import Document, {Html,Head,Main,NextScript} from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'
export default class MyDocument extends Document{
    render() {
        <Html>
            <Head>
                {/* Global site Tag (gtag.js) = Google Analyatic*/}
             
<script async
  src={'https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}'}
  />
<Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
            </Head>
<body>
<main/>
<NextScript/>
</body>
        </Html>
    }
}