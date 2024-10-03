import gif from '../assets/Gifs/walkthrough.mp4'

const Walkthrough = () => {
  return (
    <video src={gif} autoPlay muted loop className='lg:h-screen lg:w-full'/>
  )
}

export default Walkthrough