import gif from '../assets/Gifs/leaf-shadow.mp4'
import '../Styles/AppearOnScroll.css'

const Gallery = () => {
  return (
    <>
        <video src={gif} autoPlay muted loop className='h-full w-full z-0'></video>
        <div className='flex flex-col items-center z-10 lg:-mt-[450px] gap-24'>
            <p className='appear lg:text-9xl font-medium'>Our Gallery</p>
            <p className='appear lg:text-4xl font-medium'>Step Into Our Visual Story</p>
        </div>

    </>
  )
}

export default Gallery