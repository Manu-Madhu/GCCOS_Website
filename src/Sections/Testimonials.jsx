import '../Styles/AppearOnScroll.css'
import '../Styles/InfiniteScroll.css'


const Testimonials = () => {
  return (
    <div className="lg:h-screen w-full bg-green-4 flex flex-col items-start justify-center">
        <p className="appear text-7xl font-medium text-white lg:mt-16 lg:ml-10">Testimonials</p>
        <div className='text-white whitespace-nowrap flex flex-col gap-0'>
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
    </div>
  )
}

export default Testimonials