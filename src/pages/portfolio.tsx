import { RiGithubFill, RiInstagramLine, RiLinkedinBoxFill } from 'react-icons/ri'
import { Header } from '../components/Header'

export default function Portfolio () {
  return (
    <>
      <Header />
      <section className='w-full flex justify-center py-16 md:py-32'>
        <div className='px-8 md:px-0 py-16 flex flex-col gap-8 2xl:w-[1400px]'>
          <h2 className="text-[2rem]">
            Estou selecionando os projetos para o portfolio!
          </h2>
          <p>Em breve esta página estará disponível.</p>
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
        </div>
      </section>
    </>
  )
}