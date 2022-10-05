import { useEffect, useState } from 'react'
import Image from 'next/image'

import { AiOutlineClose } from 'react-icons/ai';

import Styles from './Footer.module.css'
import footerLogo from '../../public/assets/footer-logo-2x.png'
import Link from 'next/link'


const Footer = () => {

    const [showDisclaimer, setShowDisclaimer] = useState(false)

    const [Disclaimer, setDisclaimer] = useState({})

    useEffect(() => {
        fetch('https://carefirststg.wpengine.com/wp-json/wp/v2/pages?slug=disclaimer')
            .then((response) => response.json())
            .then((data) => {
                setDisclaimer({
                    title: data[0].title.rendered,
                    content: data[0].content.rendered
                })
            });
    }, [])

    return (
        <footer className={'flex flex-col bg-cf-light-blue text-white py-10 relative ' + Styles.Footer}>
            <div className="w-full max-w-sm mx-auto px-10">
                <Image src={footerLogo} layout='responsive' />
            </div>
            <div className='px-10 md:px-20 pt-10 pb-2 text-sm md:text-md'>
                <h3 className='pb-2 font-semibold'>CAREFIRST FOUNDATIONAL STATEMENT</h3>
                <p>CareFirst BlueCross BlueShield&apos;s (CareFirst) future as a managed care organization (MCO) serving the District of Columbia&apos;s Medicaid population is currently uncertain. This is because the recent process for selecting new MCOs was inconsistent in its treatment of health plans and failed to prioritize the best health outcomes for District Medicaid beneficiaries above all else.</p>
                <p>Medicaid can be a highly effective tool to address the longstanding health disparities confronting low-income District residents. Therefore, the singular goal of the program must be to provide the highest quality healthcare possible to Medicaid enrollees. This requires the support of quality MCOs, like CareFirst, that manage robust networks of local healthcare providers, provide superior disease management tools, empower community connectivity and maintain a demonstrated commitment to providing care for District residents.</p>
                <p>To be clear, we have great respect for the city&apos;s leadership and have valued the opportunity to partner with them to address broader community health needs in recent years. And it is working! But the prospect of removing CareFirst as an MCO now threatens the healthcare of 70,000 residents. This is at odds with the core mission of the Medicaid program and the intent of the most recent proposal process.</p>
                <p>Our unwavering commitment to people in The District requires us to advocate for an equal process. This is why we have challenged the MCO solicitation process and results before the District&apos;s Contract Appeals Board and Superior Court. We are actively seeking a fair outcome that reflects the original intent of this process.</p>
                <p>The people and communities we serve are our top priority. Our uncertain future as an MCO will not stand in the way of our commitment to supporting District residents. To current CareFirst Community Health Plan District of Columbia members, we assure you we do not intend to go anywhere! We are here and will continue serving you while our protests are being reviewed and resolved. Rest assured, CareFirst's highest priority is to continue offering our top-rated services to D.C. Medicaid enrollees well into the future.</p>
            </div>

            <div className='px-10 md:px-20 lg:px-20 pb-10'>
                <ul className='flex gap-4'>
                    <li><Link href='https://individual.carefirst.com/individuals-families/mandates-policies/internet-privacy-policy.page' target='_blank'><a>Privacy Policy</a></Link></li>
                    <li><Link href='#' scroll={false}><a onClick={() => setShowDisclaimer(true)}>Disclaimer</a></Link></li>
                </ul>
            </div>

            <div className={[showDisclaimer ? 'bottom-0 ' : 'bottom-[-100%] ', ' fixed w-full px-5 md:px-10 lg:px-20 bg-cf-blue pt-10 pb-8 text-sm bottom-0 ease-in-out transition-all duration-500']}>
                <div className='h-8 relative'>
                    <button className='absolute right-0 text-lg hover:scale-150 transition-all' onClick={() => setShowDisclaimer(false)}><AiOutlineClose /></button>
                </div>
                <h2 className='pb-2 text-base font-bold'>{Disclaimer.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: Disclaimer.content }}></div>
            </div>
        </footer>
    )
}

export default Footer