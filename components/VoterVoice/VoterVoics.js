import Script from 'next/script'

const VoterVoice = () => {

    return ( 
        <div className=' bg-cf-blue w-full px-3 md:px-8 lg:px-20 py-20' id='take-action'>
            <Script id="vv" src="https://www.votervoice.net/Scripts/2hIAAAAAAAA/Plugin.js?app=campaigns&id=97008" strategy='lazyOnload'></Script>
            <vv:main></vv:main>
        </div>
    )
}

export default VoterVoice