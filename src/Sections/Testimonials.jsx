import '../Styles/AppearOnScroll.css'
import '../Styles/InfiniteScroll.css'
import Typewriter from 'typewriter-effect';

const Testimonials = () => {
  return (
    <div className="lg:h-screen w-full bg-green-4 flex flex-col items-start justify-center overflow-hidden pb-5 lg:pb-20">
      <p className="appear text-[3rem] lg:text-7xl font-medium text-white mt-10 lg:mt-20 lg:ml-10 px-3">Testimonials</p>
      <div className='text-white whitespace-nowrap flex flex-col gap-0 -mt-10 lg:mt-5'>
        <div className="righttoleft flex flex-row gap-3 text-[220px]">
          <p className=''>We Believe</p>
          <p className=''>We Believe</p>
          <p className=''>We Believe</p>
          <p className=''>We Believe</p>
        </div>
        <div className='lefttoright flex flex-row gap-3 text-[220px] -mt-36'>
          <p className=''>in Community</p>
          <p className=''>in Community</p>
          <p className=''>in Community</p>
          <p className=''>in Community</p>
        </div>
      </div>
      <a href="https://forms.gle/BREN4sq6tkBbS3Jz7" className="ml-3 lg:ml-[1250px] flex flex-row bg-white border-black border-2 p-2 rounded-xl items-center justify-center max-sm:mt-0 max-sm:text-xs gap-3 pointer-events-auto hover:bg-green-2 hover:text-white duration-300">
        <p className="tracking-widest max-sm:tracking-wider">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Come Explore with Us')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Share Your Thoughts')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Pass the meassage')
                .pauseFor(1000)
                .start();
            }}
            options={{
              delay: 150,
              loop: true,
            }}
          />
        </p>
      </a>
    </div>
  )
}

export default Testimonials