import about1 from '../assets/Images/about1.webp'
import about2 from '../assets/Images/about2.webp'
import about3 from '../assets/Images/about3.webp'
import about4 from '../assets/Images/about4.webp'
import about5 from '../assets/Images/about5.webp'

const About2 = () => {
  return (
    <div className="lg:h-auto w-full flex flex-row overflow-hidden gap-4 pb-10 pr-10">
        <div className='pl-14 pt-24 flex flex-col w-[800px]'>
            <img src={about1} className='h-full' />
            <div className='lg:-mt-[1400px] lg:pt-[400px] lg:pl-14 lg:px-9 text-white'>
                <p className='lg:text-5xl font-semibold'>What We Do</p>
                <p className='lg:text-2xl lg:mt-10 leading-loose'>GCCOSS empowers organizations with sustainable strategies for longterm growth and environmental responsibility.</p>
            </div>
        </div>
        <div className='flex flex-col mt-[100px]'>
            <div className='flex flex-row gap-5'>
                <div>
                    <img src={about2} className='hover:scale-105 duration-200' />
                    <p className='text-2xl mt-5'>Training & certifications</p>
                </div>
                <div className='lg:mt-[80px]'>
                    <img src={about3} className='hover:scale-105 duration-200' />
                    <p className='text-2xl mt-5'>Consulting</p>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className=''>
                    <img src={about4} className='hover:scale-105 duration-200' />
                    <p className='text-2xl mt-5'>Capacity Building</p>
                </div>
                <div className='lg:mt-[80px]'>
                    <img src={about5} className='hover:scale-105 duration-200' />
                    <p className='text-2xl mt-5'>Innovation & Research</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About2