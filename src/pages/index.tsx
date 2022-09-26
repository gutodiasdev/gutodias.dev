import type { NextPage } from 'next'
import Head from 'next/head'
import { RiWhatsappLine } from 'react-icons/ri'
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
        <a className='bg-[#075E54] rounded-full fixed right-4 bottom-8 px-4 py-2 text-white flex items-center gap-2 md:hidden' href='https://api.whatsapp.com/send?phone=5591984243773&text=Ol%C3%A1%2C%20tudo%20bem%3F' rel='noreferrer' target='_blank'>
          Fale comigo
          <RiWhatsappLine size='2rem' />
        </a>
      </div>
    </>
  )
}

export default Home
