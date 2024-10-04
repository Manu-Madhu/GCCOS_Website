import about1 from '../assets/Images/about1.webp'
import about2 from '../assets/Images/about2.webp'
import about3 from '../assets/Images/about3.webp'
import about4 from '../assets/Images/about4.webp'
import about5 from '../assets/Images/about5.webp'

const About2 = () => {
  return (
    <div className="lg:h-[1000px] w-full">
        <div className='pl-14 pt-24'>
            <img src={about1} />
            <div className='lg:-mt-[1400px] lg:pt-20 lg:pl-14 lg:px-9 text-white'>
                <p className='lg:text-5xl font-semibold'>What We Do</p>
                <p className='lg:text-2xl lg:mt-10'>GCCOSS empowers organizations with sustainable strategies <br /> for longterm growth and environmental responsibility.</p>
            </div>
        </div>
    </div>
  )
}

export default About2