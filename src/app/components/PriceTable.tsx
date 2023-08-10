import Image from "next/image";

export function PriceTable() {
    return (
        <>
            <section id="price-table" className="grid xl:grid-cols-3">
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
                            <li>Prazo normal de entrega 72h</li>
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
                            <li>Prazo normal de entrega 72h</li>
                            <li>Pause ou cancele a qualquer momento</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white border-2 border-[#fbe8de] flex flex-col h-full divide-y-2 divide-[#fbe8de]">
                    <div className="flex-1 grid justify-items-center py-8">
                        <Image src="/meeting.svg" alt="Reunião" width={160} height={80} />
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
            <section className="bg-black p-24">
                <div className="grid place-items-center text-white gap-y-4">
                    <span className="px-2 py-1 bg-yellow-400 text-black text-sm font-medium rounded-full">
                        Outros
                    </span>
                    <h3 className="text-4xl font-bold">Desenvolvimento Personalizado</h3>
                    <p>Precisa que seja desenvolvido algo muito expecífico para o seu negócio? Faça um orçamento!</p>
                    <button className="bg-yellow-400 w-[320px] text-black font-bold text-xl rounded-lg p-4
                    drop-shadow-[8px_8px_0_rgba(250,204,21,0.25)] hover:-translate-y-2 hover:drop-shadow-[12px_12px_4px_rgba(250,204,21,0.25)] 
                    transition ease-out mt-8">
                        Fale conosco
                    </button>
                </div>
            </section>
        </>
    )
}