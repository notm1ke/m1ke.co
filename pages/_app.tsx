import Head from 'next/head';

import type { AppProps } from 'next/app';

import '../components/styling/global.css';
import '../assets/vendor/nucleo/css/nucleo.css';
import '../assets/vendor/font-awesome/css/all.min.css';
import '../assets/scss/argon-design-system-react.scss';

import '@mdi/font/css/materialdesignicons.min.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Mike Medved</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Mike Medved" />
                <meta name="theme-color" content="#353b48" />
                <meta name="description" content="CS @ UConn, Full Stack Software Engineer" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.m1ke.co/" />
                <meta property="og:title" content="Mike Medved" />
                <meta property="og:description" content="CS @ UConn, Full Stack Software Engineer" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://m1ke.co/" />
                <meta property="twitter:title" content="Mike Medved" />
                <meta property="twitter:description" content="CS @ UConn, Full Stack Software Engineer" />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icons/logo192.png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;