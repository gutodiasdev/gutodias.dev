import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { RiGithubFill, RiInstagramLine, RiLinkedinBoxFill } from 'react-icons/ri'

export function HeroSection () {
  return (
    <section className='w-full flex justify-center py-16 md:py-32'>
      <div className='flex flex-col md:w-[90%] 2xl:w-[1400px]'>
        <span className='md:text-3xl'>
          Desenvolvimento web com qualidade
        </span>
        <h2 className='text-[2rem] md:text-[4rem] 2xl:text-[8rem] 2xl:leading-[6.5rem] py-4 font-[600] tracking-tighter'>
          Criando <span className='text-purple-700'>softwares <br></br>e soluções</span>, para negócios.
        </h2>
        <div>
          <div className='flex flex-col justify-center py-16 md:py-16 md:flex md:flex-row items-center md:justify-start gap-16'>
            <span className='hidden md:block'>Meus links:</span>
            <div className='flex items-center gap-4 md:gap-8'>
              <a className='flex items-center gap-2' href='https://github.com/gutodiasdev' target='_blank' rel='noreferrer'>              <RiGithubFill size='1.5rem' />
                Github
              </a>
              <a className='flex items-center gap-2' href='https://www.instagram.com/gutodias.dev/' target='_blank' rel='noreferrer'><RiInstagramLine size='1.5rem' />
                Instagram
              </a>
              <a className='flex items-center gap-2' href='https://www.linkedin.com/in/gutodiasdev/' target='_blank' rel='noreferrer'><RiLinkedinBoxFill size='1.5rem' />
                LinkedIn
              </a>
            </div>
          </div>
          <div className='md:flex'>
            <Link href={'/portfolio'} >
              <div className='bg-purple-700 py-4 px-8 rounded-full text-white flex gap-2 items-center justify-center cursor-pointer'>
                Veja meu portfolio
                <FaAngleRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}