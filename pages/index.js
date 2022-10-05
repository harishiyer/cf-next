import Head from 'next/head'
import Script from 'next/script'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'

import Hero from '../components/Hero/Hero'
import VoterVoice from '../components/VoterVoice/VoterVoics'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script strategy='afterInteractive' dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M37694P');`}}></Script>

      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M37694P"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      <Header />
      <Hero />
      <section className='bg-cf-blue pt-14 px-5 md:px-10 lg:px-20'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl leading-[2rem] md:leading-[2.5rem] font-universe font-bold text-white'>ACT NOW. Tell D.C. Leaders: Don't replace CareFirst with a plan that has a history of under-serving enrollees and overcharging the District.</h1>
      </section>
      <VoterVoice />
      <Footer />
    </div>
  )
}
