import gif from '../assets/Gifs/leaf-shadow.mp4'
import '../Styles/AppearOnScroll.css'

import pic1 from '../assets/Images/pic1.webp';
import pic2 from '../assets/Images/pic2.webp';
import pic3 from '../assets/Images/pic3.webp';
import pic4 from '../assets/Images/pic4.webp';
import pic5 from '../assets/Images/pic5.webp';
import pic6 from '../assets/Images/pic6.webp';

const Gallery = () => {
  return (
    <>
      <section className='lg:min-h-screen w-screen relative flex items-center justify-center overflow-hidden lg:overflow-visible'>
        <video id='gallery' src={gif} autoPlay muted loop className='h-[50vh] lg:h-screen w-full object-cover z-0'></video>
        <div className='flex flex-col items-center z-10 absolute justify-center duration-500 lg:gap-10'>
          <p className='appear text-[3rem] lg:text-9xl font-bold lg:font-medium'>Our Gallery</p>
          <p className='appear lg:text-4xl font-medium'>Step Into Our Visual Story</p>
        </div>
      </section>

      <section className="h-fit bg-green-4 flex flex-col items-center gap-8 lg:gap-16 py-10 lg:pb-32 px-5 overflow-hidden lg:overflow-visible">
        <div className="flex overflow-x-scroll lg:grid lg:grid-cols-3 gap-6 lg:-mt-32 z-10 h-full lg:py-5">
          <img src={pic1} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-md lg:rounded-lg" />
          <img src={pic2} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-md lg:rounded-lg" />
          <img src={pic3} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-md lg:rounded-lg" />
          <img src={pic4} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-md lg:rounded-lg" />
          <img src={pic5} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-md lg:rounded-lg" />
          <img src={pic6} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-md lg:rounded-lg" />
        </div>
        <button className="p-5 lg:h-[80px] lg:w-[200px] border-2 text-white hover:bg-white hover:text-black duration-300 rounded-lg">View More</button>
      </section>
    </>
  )
}

export default Gallery