import about0 from '../assets/Images/lamp.JPG'
import '../Styles/AppearOnScroll.css'

const About = () => {
  return (
    <div id='about' className="lg:mt-[136px] lg:h-[1800px] lg:w-full bg-green-4 pt-60">
        <p className="appear lg:text-9xl text-white">Get To Know About <br /> Us</p>
        <img src={about0} alt="" className='appear lg:w-[1200px] lg:ml-[170px] lg:-mt-[100px]'/>
        <p className='appear lg:h-[500px] lg:w-[1000px] lg:ml-[500px] bg-green-1 lg:text-3xl p-7 text-justify lg:leading-[70px]'>GCCOSS is a collaborative initiative between Cochin University of Science and Technology (CUSAT) and Geojit Financial Services Limited (Geojit). This joint venture aims to promote sustainability, support the ecosystem, and serve as a facilitator for companies, government bodies, investors, and individuals in their Environmental, Social, and Governance (ESG) endeavours.</p>
    </div>
  )
}

export default About