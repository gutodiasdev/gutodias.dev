import { ContentWrapper } from "./ContentWrapper"

export function ProductsList() {
    return (
        <ContentWrapper>
            <div className="pb-24 flex flex-col place-items-center gap-y-4">
                <h2 className="text-5xl font-bold">Tipos de assinatura</h2>
                <p className="text-2xl font-light">Escolha o plano certo para você</p>
            </div>
        </ContentWrapper>
    )
}