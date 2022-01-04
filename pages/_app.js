import '../styles/globals.css'
import Head from 'next/head'
import { useState } from "react";
import Sidebar from "/components/sidebar"
import Header from "/components/header"

function MyApp({ Component, pageProps }) {
  const [toggle, settoggle] = useState(true);
  const toggleMenu = (value) => {
    console.log(value);
    settoggle(value);
  };
  return <div>
    <Head>
      <title>DSALadder</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
        <Sidebar toggle={toggle} toggleMenu={toggleMenu} />
        <div class="flex-1 flex flex-col overflow-y-hidden overflow-x-hidden">
          <Header toggle={toggle} toggleMenu={toggleMenu} />
          <Component {...pageProps} />
        </div>
      </div>
    </div>


  </div>
}

export default MyApp
