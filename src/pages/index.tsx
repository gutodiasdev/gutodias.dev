import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
      </div>
    </>
  )
}

export default Home
