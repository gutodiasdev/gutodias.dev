'use client'

import { Disclosure, Transition } from '@headlessui/react';
import { LiaAngleDownSolid } from "react-icons/lia";
import { ContentWrapper } from "./ContentWrapper";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
    return (
        <ContentWrapper className="min-h-screen">
            <div className="py-24 max-w-[900px] mx-auto">
                <SectionHeading title="FAQ's" />
                <div className="grid gap-y-16">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 
                            text-left text-sm font-medium focus:outline-none focus-visible:ring 
                            focus-visible:ring-opacity-75 border-b-2 border-black">
                                    <span className="text-2xl">
                                        Por que não contrato um desenvolvedor sênior em tempo integral?
                                    </span>
                                    <LiaAngleDownSolid
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pb-2 text-gray-500 text-xl">
                                        Boa pergunta! Para começar, o custo anual de um desenvolvedor fullstack sênior
                                        em tempo integral agora excede R$ 100.000,00 ao ano, mais benefícios (e boa sorte para
                                        encontrar um disponível).
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 
                            text-left text-sm font-medium focus:outline-none focus-visible:ring 
                            focus-visible:ring-opacity-75 border-b-2 border-black">
                                    <span className="text-2xl">
                                        Existe um limite para quantos pedidos posso ter?
                                    </span>
                                    <LiaAngleDownSolid
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pb-2 text-gray-500 text-xl">
                                        Uma vez inscrito, você pode adicionar quantas solicitações de desenvolvimento
                                        quiser à sua fila e elas serão entregues uma a uma.
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 
                            text-left text-sm font-medium focus:outline-none focus-visible:ring 
                            focus-visible:ring-opacity-75 border-b-2 border-black">
                                    <span className="text-2xl">
                                        Com que rapidez receberei meus produtos?
                                    </span>
                                    <LiaAngleDownSolid
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pb-2 text-gray-500 text-xl">
                                        Em média, a maioria das solicitações é concluída em apenas 5 dias úteis ou menos.
                                        No entanto, solicitações mais complexas podem levar mais tempo.
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 
                            text-left text-sm font-medium focus:outline-none focus-visible:ring 
                            focus-visible:ring-opacity-75 border-b-2 border-black">
                                    <span className="text-2xl">
                                        Como funciona o recurso de pausa?
                                    </span>
                                    <LiaAngleDownSolid
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pb-2 text-gray-500 text-xl">
                                        Entendemos que você pode não ter trabalho de design suficiente para preencher o
                                        mês inteiro. Talvez você tenha apenas um ou dois pedidos de design no momento.
                                        É aí que pausar sua assinatura é útil.
                                        <br></br><br></br>
                                        Os ciclos de cobrança são baseados em um período de 31 dias. Digamos que você
                                        se inscreva e use o serviço por 21 dias e depois decida pausar sua assinatura.
                                        Isso significa que o ciclo de cobrança será pausado e você terá 10 dias de serviço
                                        restantes para usar a qualquer momento no futuro.
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 
                            text-left text-sm font-medium focus:outline-none focus-visible:ring 
                            focus-visible:ring-opacity-75 border-b-2 border-black">
                                    <span className="text-2xl">
                                        E se eu tiver apenas um único pedido?
                                    </span>
                                    <LiaAngleDownSolid
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pb-2 text-gray-500 text-xl">
                                        Isso é bom. Você pode pausar sua assinatura quando terminar e retornar quando
                                        tiver necessidades adicionais de desenvolvimento. Não há necessidade de desperdiçar o
                                        restante de sua assinatura.
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 
                            text-left text-sm font-medium focus:outline-none focus-visible:ring 
                            focus-visible:ring-opacity-75 border-b-2 border-black">
                                    <span className="text-2xl">
                                        Há algum reembolso se eu não gostar do serviço?
                                    </span>
                                    <LiaAngleDownSolid
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pb-2 text-gray-500 text-xl">
                                        Devido à natureza de alta qualidade do trabalho, não haverá reembolso.
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </ContentWrapper>
    )
}