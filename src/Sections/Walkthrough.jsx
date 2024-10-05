import gif from '../assets/Gifs/walkthrough.mp4'
import logoBlack from '../assets/Images/logo-black.webp'

import '../Styles/AppearOnScroll.css'

const Walkthrough = () => {
  return (
    <main className='h-[70vh]  lg:h-screen w-screen relative flex items-center justify-center '>
      <video src={gif} autoPlay muted loop className='h-full w-full z-0 object-cover' />

      <div className='flex flex-col items-center absolute z-10 gap-6 text-green-4'>
        <img src={logoBlack} className='appear w-60 lg:h-56' />
        <p className='appear text-[2rem] lg:text-[4rem] text-center font-bold lg:font-semibold leading-[40px]'>
          Geojit CUSAT Center Of Sustainability Studies
        </p>
        <p className='appear text-[2.5rem] lg:text-8xl font-bold lg:font-semibold'>
          GCCOSS
        </p>
      </div>
    </main>

  )
}

export default Walkthrough