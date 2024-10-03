import gif from '../assets/Gifs/hero2.gif'

const Hero = () => {
  return (
    <div className="flex flex-col h-screen">
      <img src={gif} alt="" className="h-[750px] w-full items-center justify-center bg-cover bg-center z-0"/>
      <p className='lg:ml-20 lg:text-9xl text-white lg:font-semibold z-10 lg:-mt-[660px] tracking-tight'>Empowering dreams <br /> of a greener world</p>
    </div>
  )
}

export default Hero