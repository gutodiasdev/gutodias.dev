import { RiWhatsappLine } from 'react-icons/ri'

export function Header () {
  return (
    <section className='w-full flex justify-center'>
      <div className='2xl:flex 2xl:w-[1400px] py-8 justify-between'>
        <h1 className='text-5xl font-thin text-slate-800'>
          gutodias<span className='text-purple-700 font-bold'>.</span>dev
        </h1>
        <a className='bg-[#075E54] rounded-full py-2 px-8 text-white font-bold xl:flex items-center gap-4 hidden' href='https://api.whatsapp.com/send?phone=5591984243773&text=Ol%C3%A1%2C%20tudo%20bem%3F' rel='noreferrer' target='_blank'>
          Fale comigo
          <RiWhatsappLine />
        </a>
      </div>
    </section>
  )
}