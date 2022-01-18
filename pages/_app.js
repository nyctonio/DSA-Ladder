import '../styles/globals.css'
import Head from 'next/head'
import { useState } from "react";
import Sidebar from "/components/sidebar"
import Header from "/components/header"
import * as gtag from 'lib/gtag'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Logo from "assets/Logo3.svg";


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  const [toggle, settoggle] = useState(true);
  const toggleMenu = (value) => {
    // console.log(value);
    settoggle(value);
  };
  return <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    />
    <Script
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
    <div>
      <Head>
        <title>thecodemaniac</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="The Code Maniac" key="ogtitle" />
        <meta property="og:description" content="Get the most amazing set of problems, all at once. We provide you a whole list of code based questions segregated in terms of level, rating and topics. Start coding today!" key="ogdesc" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="https://twitter/nyctonio" key="twhandle" />
        <meta property="og:image" itemProp='image' content="https://i.ibb.co/5KJV8wp/Screenshot-2022-01-18-113633.png" key="ogimage" />
        <meta property="og:site_name" content="thecodemaniac.com" key="ogsitename" />
      </Head>
      <div className='font-mono'>
        <div x-data="{ sidebarOpen: false }" className="flex h-screen bg-gray-200">
          <Sidebar toggle={toggle} toggleMenu={toggleMenu} />
          <div className="flex-1 flex flex-col overflow-y-hidden overflow-x-hidden">
            <Header toggle={toggle} toggleMenu={toggleMenu} />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div></>
}

export default MyApp
