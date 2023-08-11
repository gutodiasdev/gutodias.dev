import { Merriweather } from "next/font/google";
import Image from "next/image";
import { ContentWrapper } from "./ContentWrapper";

const merri = Merriweather({ subsets: ['latin'], weight: "700", preload: true })

export function Hero() {
    return (
        <ContentWrapper className="bg-slate-200 min-h-screen py-8">
            <div className="grid justify-items-center">
                <Image src="/gutodiasdev_logo.svg" alt="Guto Dias Dev" width={160} height={64} />
                <div className="py-48 text-center grid gap-y-8">
                    <h1 style={merri.style} className="text-4xl xl:text-7xl font-bold leading-relaxed tracking-tight">
                        Desenvolvimento descomplicado.<br></br> E previsível.
                    </h1>
                    <p className="text-lg xl:text-2xl font-light">
                        Desenvolvimento por assinatura para escalar o seu negócio.
                    </p>
                    <div>
                        <a href="#price-table">
                            <button className="bg-black text-white font-bold text-2xl rounded-lg p-6
                            drop-shadow-[8px_8px_0_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:drop-shadow-[12px_12px_4px_rgba(0,0,0,0.25)] 
                            transition ease-out">
                                Ver planos
                            </button>
                        </a>
                    </div>
                </div>
                <span className="flex gap-x-2 font-light">
                    Nós <Image src="/heart.svg" alt="Guto Dias Dev" width={24} height={24} /> codar!
                </span>
            </div>
        </ContentWrapper>
    )
}