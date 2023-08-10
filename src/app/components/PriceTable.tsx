import Image from "next/image";
import { ContentWrapper } from "./ContentWrapper";

export function PriceTable() {
    return (
        <ContentWrapper className="bg-[#fbe8de] py-24">
                <div className="pb-24 flex flex-col place-items-center gap-y-4">
                    <h2 className="text-5xl font-bold">Tipos de assinatura</h2>
                    <p className="text-2xl font-light">Escolha o plano certo para você</p>
                </div>
                <section id="price-table" className="grid grid-cols-3">
                    <div className="bg-white border-2 border-[#fbe8de] p-8">
                        <h3 className="text-2xl font-bold">Standard</h3>
                        <p className="text-sm pt-4">Uma requisição por vez. Pause ou cancele a qualquer momento.</p>
                        <div className="py-12">
                            <p className="text-3xl font-black">R$ 3.997/m</p>
                            <p className="text-xs text-gray-500 font-light">Pause ou cancele a qualquer momento</p>
                        </div>
                        <button className="bg-black w-full text-white font-bold text-2xl rounded-lg p-6
                drop-shadow-[8px_8px_0_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:drop-shadow-[12px_12px_4px_rgba(0,0,0,0.25)] 
                transition ease-out">
                            Comece agora
                        </button>
                        <div className="my-12 pt-8 border-t-2 border-[#fbe8de]">
                            <h4 className="font-bold">O que está incluso?:</h4>
                            <ul className="list-disc px-6 pt-4 text-sm">
                                <li>Uma requisição por vez</li>
                                <li>Prazo máximo de entrega 5 dias úteis</li>
                                <li>Pause ou cancele a qualquer momento</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-[#fbe8de] p-8">
                        <h3 className="text-2xl font-bold">Pro</h3>
                        <p className="text-sm pt-4">Duas requisições. Pause ou cancele a qualquer momento.</p>
                        <div className="py-12">
                            <p className="text-3xl font-black">R$ 7.997/m</p>
                            <p className="text-xs text-gray-500 font-light">Pause ou cancele a qualquer momento</p>
                        </div>
                        <button className="bg-black w-full text-white font-bold text-2xl rounded-lg p-6
                drop-shadow-[8px_8px_0_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:drop-shadow-[12px_12px_4px_rgba(0,0,0,0.25)] 
                transition ease-out">
                            Comece agora
                        </button>
                        <div className="my-12 pt-8 border-t-2 border-[#fbe8de]">
                            <h4 className="font-bold">O que está incluso?:</h4>
                            <ul className="list-disc px-6 pt-4 text-sm">
                                <li className="font-semibold">Duas requisições por vez</li>
                                <li>Prazo máximo de entrega 5 dias úteis</li>
                                <li>Pause ou cancele a qualquer momento</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-[#fbe8de] flex flex-col h-full divide-y-2 divide-[#fbe8de]">
                        <div className="flex-1 grid justify-items-center py-8">
                            <Image src="/meeting.svg" alt="Reunião" width={180} height={100} />
                            <div className="px-8 py-2">
                                <h3 className="text-2xl font-bold">Agende uma chamada</h3>
                                <p className="text-sm pt-4 pb-8">Saiba mais sobre como nosso trabalho pode ajudar o seu negócio</p>
                                <a href="#" className="text-sm font-bold mt-8">Agendar</a>
                            </div>
                        </div>
                        <div className="flex-1 grid justify-items-center py-8">
                            <Image src="/referee.svg" alt="Reunião" width={180} height={100} />
                            <div className="px-8 py-2">
                                <h3 className="text-2xl font-bold">Indique e ganhe</h3>
                                <p className="text-sm pt-4 pb-8">Ganhe 5% de comissão mensalmente por cada indicação</p>
                                <a href="#" className="text-sm font-bold mt-8">Comece agora</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-black">
                    <div className="grid place-items-center text-white gap-y-4 py-16">
                        <span className="px-2 py-1 bg-yellow-400 text-black text-sm font-medium rounded-full">
                            Personalizado
                        </span>
                        <h3 className="text-4xl font-bold">Desenvolvimento Personalizado</h3>
                        <p>Precisa que seja desenvolvido algo muito expecífico para o seu negócio? Faça um orçamento!</p>
                        <button className="bg-yellow-400 w-full md:w-3/5 lg:w-[320px] text-black font-bold text-xl rounded-lg p-4
                    drop-shadow-[8px_8px_0_rgba(250,204,21,0.25)] hover:-translate-y-2 hover:drop-shadow-[12px_12px_4px_rgba(250,204,21,0.25)] 
                    transition ease-out mt-8">
                            Fale conosco
                        </button>
                    </div>
                </section>
                <section className="bg-yellow-400">
                    <div className="grid place-items-center text-black gap-y-4 py-16">
                        <span className="px-2 py-1 bg-black text-yellow-400 text-sm font-medium rounded-full">
                            Individual
                        </span>
                        <h3 className="text-4xl font-bold">Desenvolvimento Sob medida</h3>
                        <p>Precisa de apenas uma landing page ou página estática?</p>
                        <p className="text-3xl font-black">R$ 1.497</p>
                        <button className="bg-black w-full md:w-3/5 lg:w-[320px] text-white font-bold text-xl rounded-lg p-4
                    drop-shadow-[8px_8px_0_rgba(0,0,0,0.25)]  hover:-translate-y-2 hover:drop-shadow-[12px_12px_4px_rgba(0,0,0,0.25)] 
                    transition ease-out mt-8">
                            Fale conosco
                        </button>
                    </div>
                </section>
        </ContentWrapper>
    )
}