import gif from '../assets/Gifs/walkthrough.mp4'
import logoBlack from '../assets/Images/Logo-black.webp'

import '../Styles/AppearOnScroll.css'

const Walkthrough = () => {
  return (
    <>
        <video src={gif} autoPlay muted loop className='lg:h-screen lg:w-[120%] z-0'/>
        <div className='flex flex-col items-center -mt-[600px] z-10 gap-6 text-green-4'>
            <img src={logoBlack} className='appear h-56' />
            <p className='appear text-[4.2rem] font-semibold'>Geojit CUSAT Center Of Sustainability Studies</p>
            <p className='appear text-6xl font-semibold'>GCCOSS</p>
        </div>
    </>
    
  )
}

export default Walkthrough