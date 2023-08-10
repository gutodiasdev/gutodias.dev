import { ContentWrapper } from "./ContentWrapper"

export function ProductsList() {
    return (
        <ContentWrapper className="min-h-screen py-24 flex flex-col">
            <div className="pb-24 flex flex-col place-items-center gap-y-4">
                <h2 className="text-6xl font-bold">Web Apps, Landing Pages e mais...</h2>
            </div>
            <div className="border-8 border-[#fbe8de] p-12 flex-1 flex items-center">
                <div className="grid grid-cols-3 gap-x-8 gap-y-32 h-full flex-1">
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">Aplicações Web</h3>
                    </div>
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">Websites</h3>
                    </div>
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">Lading Pages</h3>
                    </div>
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">API</h3>
                    </div>
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">Integrações</h3>
                    </div>
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">WordPress</h3>
                    </div>
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">WooCommerce</h3>
                    </div>
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">Blog</h3>
                    </div>
                    <div className="border-b-8 border-[#fbe8de] pb-2">
                        <h3 className="text-xl font-bold">Páginas Estáticas</h3>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    )
}