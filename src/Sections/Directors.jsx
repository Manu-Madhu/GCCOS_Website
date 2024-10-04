import dir1 from '../assets/Images/dir1.webp'
import dir2 from '../assets/Images/dir2.webp'
import dir3 from '../assets/Images/dir3.webp'
import dir4 from '../assets/Images/dir4.webp'

import '../Styles/AppearOnScroll.css'

const Directors = () => {
  return (
    <div className="lg:h-auto lg:pb-10 bg-[#77846d] lg:px-10 lg:pt-6 text-white">
        <p className='appear text-8xl font font-medium'>Our Directors</p>
        <div className='lg:mt-16 flex flex-row gap-4 items-end justify-center'>
            <div className='appear flex flex-col'>
                <img src={dir1} alt="" className='lg:h-[450px] lg:w-[350px] rounded-3xl' />
                <div className='lg:mt-8 flex flex-col gap-4'>
                    <p className='lg:text-2xl font-medium'>Charlie McMann</p>
                    <div className='flex flex-col gap-1'>
                        <p className='lg:text-base'>abc@gmail.com</p>
                        <p className='lg:text-base'>(123)456-789</p>
                    </div>
                </div>
            </div>
            <div className='appear flex flex-col'>
                <img src={dir2} alt="" className='lg:h-[300px] lg:w-[300px] rounded-3xl' />
                <div className='lg:mt-8 flex flex-col gap-4'>
                    <p className='lg:text-2xl font-medium'>Kris Ward</p>
                    <div className='flex flex-col gap-1'>
                        <p className='lg:text-base'>abc@gmail.com</p>
                        <p className='lg:text-base'>(123)456-789</p>
                    </div>
                </div>
            </div>
            <div className='appear flex flex-col'>
                <img src={dir3} alt="" className='lg:h-[550px] lg:w-[350px] rounded-3xl' />
                <div className='lg:mt-8 flex flex-col gap-4'>
                    <p className='lg:text-2xl font-medium'>Alex Smith</p>
                    <div className='flex flex-col gap-1'>
                        <p className='lg:text-base'>abc@gmail.com</p>
                        <p className='lg:text-base'>(123)456-789</p>
                    </div>
                </div>
            </div>
            <div className='appear flex flex-col'>
                <img src={dir4} alt="" className='lg:h-[400px] lg:w-[350px] rounded-3xl' />
                <div className='lg:mt-8 flex flex-col gap-4'>
                    <p className='lg:text-2xl font-medium'>Reese Whitman</p>
                    <div className='flex flex-col gap-1'>
                        <p className='lg:text-base'>abc@gmail.com</p>
                        <p className='lg:text-base'>(123)456-789</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Directors