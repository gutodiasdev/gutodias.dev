import Image from "next/image";

export function HeroStripe() {
    return (
        <section className="h-[120px] bg-black flex justify-center items-center gap-x-16">
            <Image src={'/promogate.svg'} alt="Promogate" width={120} height={80} />
            <Image src={'/meethub.png'} alt="Promogate" width={120} height={80} />
            <Image src={'/lab8.svg'} alt="Promogate" width={120} height={32} />
        </section>
    )
}