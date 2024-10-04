import bg from '../assets/Images/blogs.jpg'
import comma from '../assets/Images/comma.png'

import '../Styles/AppearOnScroll.css'


const Blogs = () => {
  return (
    <div className="lg:h-screen bg-green-4 flex flex-col gap-7 items-start justify-center">
        <p className="appear lg:text-9xl font-medium lg:mt-10 lg:ml-10 text-white">Blogs</p>
        <div className='w-full lg:mt-10 flex flex-col items-center justify-center z-0 relative'>
            <img src={bg} className='h-[535px] w-[1700px] z-0'/>
            <div className='lg:h-[450px] lg:w-[1100px] z-10 absolute flex flex-row items-center justify-center gap-6 '>
                <div className="lg:h-full lg:w-[370px] bg-white rounded-2xl flex flex-col items-center justify-center gap-14">
                    <img src={comma} className='lg:h-10' />
                    <p className='lg:text-base leading-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscing </p>
                    <p className='text-xl font-semibold'>Frankie B.</p>
                    <button className='lg:h-[50px] lg:w-[150px] bg-green-2 text-white hover:bg-[#fee48b] hover:text-black duration-300'>Read More</button>
                </div>
                <div className="lg:h-full lg:w-[370px] bg-white rounded-2xl">
                </div>
                <div className="lg:h-full lg:w-[370px] bg-white rounded-2xl">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs