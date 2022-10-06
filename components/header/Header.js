
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SiteLogo from '../../public/assets/nav-logo-2x.png'
import Styles from './Header.module.css'

const Header = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (offset > 0) {
            document.querySelector('body').style.paddingTop = document.getElementById('nav').clientHeight + 'px'
        } else {
            document.querySelector('body').style.paddingTop = 0 + 'px'
        }
    }, [offset])

    return (
        <nav id='nav' className={`${offset > 0 ? 'fixed py-2 ' + Styles.scroll : 'py-8'} transition-all duration-500 top-0 bg-white w-full flex justify-center flex-col md:flex-row px-5 md:px-10 lg:px-20 z-10`}>
            <div className={'mx-auto md:mr-auto md:ml-0 transition-all duration-500 ' + Styles.logo}>
                <Image priority src={SiteLogo} alt='Care First Site Logo' layout='responsive' />
            </div>
            <div className={`${offset > 0 ? 'mt-0' : 'mt-6'} mx-auto md:ml-auto md:mr-0 ml-auto md:mt-0 transition-all duration-500`}>
                <Link href='#take-action'>
                    <a id='take-action' className='py-3 md:py-4 px-10 rounded-md text-white text-xl md:text-2xl font-universe font-bold uppercase block bg-cf-yellow'>Contact D.C. Leaders</a>
                </Link>
            </div>
        </nav>
    )
}

export default Header