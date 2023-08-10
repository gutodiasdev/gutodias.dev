import { PriceTable } from "./components/PriceTable";
import { ProductsList } from "./components/ProductsList";

export default function Home() {
  return (
    <main className="min-h-screen w-full grid items-center">
      <ProductsList />
      <PriceTable />
    </main>
  )
}
