import { Head, Html, Main, NextScript } from 'next/document'
import { RiWhatsappLine } from 'react-icons/ri'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <body className='font-source-sans'>
        <Main />
        <NextScript />
        <a className='bg-[#075E54] rounded-full fixed right-4 bottom-8 px-4 py-2 text-white flex items-center gap-2 md:hidden' href='https://api.whatsapp.com/send?phone=5591984243773&text=Ol%C3%A1%2C%20tudo%20bem%3F' rel='noreferrer' target='_blank'>
          Fale comigo
          <RiWhatsappLine size='2rem' />
        </a>
      </body>
    </Html>
  )
}