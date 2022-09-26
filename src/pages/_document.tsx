import { Head, Html, Main, NextScript } from 'next/document'

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

      </body>
    </Html>
  )
}