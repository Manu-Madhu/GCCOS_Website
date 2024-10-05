import gif from '../assets/Gifs/banner.mp4'

const Hero = () => {
  return (
    <div className="h-[80vh] lg:screen flex flex-col items-center relative">
      <video src={gif} muted autoPlay loop className="items-center justify-center bg-cover bg-center z-0 w-full h-full object-cover" />
      <p className='text-6xl lg:text-9xl text-white font-semibold z-10  tracking-tight absolute left-5 lg:left-14 top-10'>
        Empowering dreams <br /> of a greener world
      </p>
    </div>
  )
}

export default Hero