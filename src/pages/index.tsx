import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guto Dias - Desenvolvimento Web Fullstack</title>
      </Head>
      <div>
        <Header />
        <HeroSection />
      </div>
    </>
  )
}

export default Home
