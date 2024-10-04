import gif from '../assets/Gifs/banner.mp4'

const Hero = () => {
  return (
    <div className="lg:h-screen flex flex-col">
      <video src={gif} muted autoPlay loop className="items-center justify-center bg-cover bg-center z-0"/>
      <p className='lg:ml-20 lg:text-9xl text-white lg:font-semibold z-10 lg:-mt-[660px] tracking-tight'>Empowering dreams <br /> of a greener world</p>
    </div>
  )
}

export default Hero