import gif from '../assets/Gifs/walkthrough.mp4'
import logoBlack from '../assets/Images/logo-black.webp'

import '../Styles/AppearOnScroll.css'

const Walkthrough = () => {
  return (
    <main className='overflow-hidden h-screen w-screen '>
      <video src={gif} autoPlay muted loop className='h-screen w-screen z-0 object-cover' />
      <div className='flex flex-col items-center -mt-[600px] z-10 gap-6 text-green-4 '>
        <img src={logoBlack} className='appear h-56' />
        <p className='appear text-[4rem] font-semibold'>Geojit CUSAT Center Of Sustainability Studies</p>
        <p className='appear text-8xl font-semibold'>GCCOSS</p>
      </div>
    </main>

  )
}

export default Walkthrough