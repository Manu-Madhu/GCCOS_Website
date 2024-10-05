import about0 from '../assets/Images/lamp.JPG'
import '../Styles/AppearOnScroll.css'

const About = () => {
  return (
    <div id='about' className=" lg:h-[1800px] lg:w-full bg-green-4 pt-10 p-3 pb-20 lg:pt-60 overflow-hidden lg:overflow-visible">
      <p className="appear text-[2rem] font-semibold lg:text-9xl text-white">Get To Know About <br className='hidden lg:block' /> Us</p>
      <img src={about0} alt="" className='appear mt-4 lg:w-[1200px] lg:ml-[170px] lg:-mt-[100px] rounded-xl' />
      <p className='appear mt-3 rounded-xl lg:h-[500px] lg:w-[1000px] lg:ml-[500px] bg-green-1 text-sm overflow-hidden lg:text-3xl p-3 lg:p-7 text-justify lg:leading-[70px]'>GCCOSS is a collaborative initiative between Cochin University of Science and Technology (CUSAT) and Geojit Financial Services Limited (Geojit). This joint venture aims to promote sustainability, support the ecosystem, and serve as a facilitator for companies, government bodies, investors, and individuals in their Environmental, Social, and Governance (ESG) endeavours.</p>
    </div>
  )
}

export default About