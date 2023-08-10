import { PriceTable } from "./components/PriceTable";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center">
      <div className="mx-auto p-24 w-full bg-[#fbe8de]">
        <PriceTable />
      </div>
    </main>
  )
}
