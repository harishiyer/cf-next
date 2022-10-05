import Image from 'next/image'
import Styles from './Hero.module.css'

import HeroImage from '../../public/assets/hero-img-3-2x@2x.jpeg'

const Hero = () => {

    return (
        <section className={'flex flex-col ' + Styles.HeroImage}>
            <div className='lg:hidden w-full'>
                <Image priority src={HeroImage} layout='responsive' />
            </div>
            <div className={'w-full lg:w-3/4 xl:w-1/2 px-5 md:px-10 lg:px-20 pt-6 pb-6 lg:pt-[4rem] lg:pb-[16rem] bg-white-30 flex bg-white/60'}>
                <div className='lg:mt-10 mb-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[2rem] md:leading-[2.5rem] xl:leading-[4rem] font-universe font-bold text-cf-blue'>
                    Act Now!<br />
                    Tell D.C. Leaders to protect Medicaid enrollees. Don&apos;t take away CareFirst. Reject Medicaid plans that deny care and essential services.
                </div>
            </div>
        </section>
    )
}

export default Hero 