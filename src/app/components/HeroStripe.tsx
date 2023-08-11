'use client'

import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';

export function HeroStripe() {
    return (
        <div>
            <section className="h-[120px] bg-black flex justify-center items-center gap-x-8
            lg:gap-x-16">
                <Image src={'/promogate.svg'} alt="Promogate" width={120} height={80} />
                <Image src={'/meethub.png'} alt="Promogate" width={120} height={80} />
                <Image src={'/lab8.svg'} alt="Promogate" width={120} height={32} className="hidden md:block"/>
            </section>
        </div>
    )
}