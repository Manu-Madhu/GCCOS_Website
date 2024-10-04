import about0 from '../assets/Images/about0.webp'
import '../Styles/AppearOnScroll.css'

const About = () => {
  return (
    <div className="lg:mt-[136px] lg:h-[2000px] lg:w-full bg-green-4 pt-60">
        <p className="lg:text-9xl text-white">Get To Know About <br /> Us</p>
        <img src={about0} alt="" className='appear lg:w-[1400px] lg:ml-[170px] lg:-mt-[100px]'/>
    </div>
  )
}

export default About