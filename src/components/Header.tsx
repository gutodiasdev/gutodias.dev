import Head from 'next/head'
import Link from 'next/link'
import { RiWhatsappLine } from 'react-icons/ri'

export function Header () {
  return (
    <>
      <Head>
        <title>Guto Dias - Desenvolvimento Web Fullstack</title>
      </Head>
      <section className='w-full flex justify-center'>
        <div className='md:flex md:w-[90%] 2xl:w-[1400px] py-8 justify-between'>
          <Link href='/'>
            <h1 className='text-5xl font-thin text-slate-800 cursor-pointer'>
              gutodias<span className='text-purple-700 font-bold'>.</span>dev
            </h1>
          </Link>
          <a className='bg-[#075E54] rounded-full py-2 px-8 text-white font-bold xl:flex items-center gap-4 hidden' href='https://api.whatsapp.com/send?phone=5591984243773&text=Ol%C3%A1%2C%20tudo%20bem%3F' rel='noreferrer' target='_blank'>
            Fale comigo
            <RiWhatsappLine />
          </a>
        </div>
      </section>
    </>
  )
}