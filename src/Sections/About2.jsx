import about1 from '../assets/Images/about1.webp'
import about2 from '../assets/Images/about2.webp'
import about3 from '../assets/Images/about3.webp'
import about4 from '../assets/Images/about4.webp'
import about5 from '../assets/Images/about5.webp'

const About2 = () => {
  return (
    <div className="lg:h-auto w-full flex flex-col lg:flex-row overflow-hidden lg:gap-4 lg:pr-10 p-3 pb-10 lg:pb-20">
      <div className='lg:pl-14 pt-10 lg:pt-24 flex flex-col lg:w-[800px] relative'>
        <img src={about1} className='h-[70vh] lg:h-full rounded-lg' />
        <div className='absolute top-[25%] text-white px-5 lg:px-14'>
          <p className='text-4xl lg:text-5xl font-semibold'>What We Do</p>
          <p className='text-lg  lg:text-2xl mt-5 lg:mt-10 '>
            GCCOSS empowers organizations with sustainable strategies for
            longterm growth and environmental responsibility.
          </p>
        </div>
      </div>

      <div className='flex flex-col mt-5 lg:mt-[100px]'>
        <div className='flex flex-row gap-5'>
          <div className='relative group'>
            <img src={about2} className='hover:scale-105 duration-200 rounded-lg' />
            <div className='absolute inset-0 lg:h-[493px] bottom-0 flex items-center rounded-lg justify-center 
            bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 duration-500 px-5'>
              <p className='text-white text-xs lg:text-lg lg:leading-10'>
                GCCOSS aims to be a central hub for developing and
                implementing general and specialised courses and programs in
                sustainability, supported by technical, scientific, management
                and legal departments.
              </p>
            </div>
            <p className='lg:text-2xl mt-2 text-lg leading-6 lg:mt-5'>Training & certifications</p>
          </div>

          <div className='relative group lg:mt-16'>
            <img src={about3} className='hover:scale-105 duration-200 rounded-lg' />
            <div className='absolute inset-0 lf:h-[493px] bottom-0 flex items-center rounded-lg justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 duration-500 px-5'>
              <p className='text-white text-xs lg:text-lg lg:leading-10'>
                Sustainability assessments now play a pivotal role across
                the entire value chain, essential for economic advancement
                towards meeting climate and Sustainable Development Goals (SDGs).
                GCCOSS is dedicated to offering comprehensive assistance in
                Sustainability Reporting.</p>
            </div>
            <p className='lg:text-2xl mt-2 text-lg leading-6 lg:mt-5'>Consulting</p>
          </div>
        </div>
        <div className='flex flex-row gap-5 mt-5'>
          <div className='relative group overflow-hidden'>
            <img src={about4} className='hover:scale-105 duration-200 rounded-lg' />
            <div className='absolute inset-0 lg:h-[493px] bottom-0 flex items-center rounded-lg justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 duration-500 px-5'>
              <p className='text-white text-xs lg:text-lg lg:leading-10'>
                The capacity of various agencies working on the
                subject is a key issue in achieving Sustainability. Performance of the value chain and a
                significant need is arising to develop the sustainability of government agencies,
                corporates, medium and small enterprises, and NGOs. This Centre shall find a niche
                position in this by bringing managerial, technical, scientific, and social expertise
                in a coordinated manner.
              </p>
            </div>
            <p className='lg:text-2xl mt-2 text-lg leading-6 lg:mt-5'>Capacity Building</p>
          </div>
          <div className='relative group lg:mt-16'>
            <img src={about5} className='hover:scale-105 duration-200 rounded-lg' />
            <div className='absolute inset-0 lg:h-[493px] bottom-0 flex items-center rounded-lg justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 duration-500 px-5'>
              <p className='text-white text-xs lg:text-lg lg:leading-10'>
                GCCOSS aims to be a central hub for developing and implementing general and
                specialised courses and programs in sustainability, supported by technical,
                scientific, management and legal departments.
              </p>
            </div>
            <p className='lg:text-2xl mt-2 text-lg leading-6 lg:mt-5'>Innovation & Research</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2