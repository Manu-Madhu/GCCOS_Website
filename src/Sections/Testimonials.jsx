import '../Styles/AppearOnScroll.css'


const Testimonials = () => {
  return (
    <div className="lg:h-screen w-full bg-green-4 flex flex-col justify-center-center">
        <p className="appear text-7xl font-medium text-white lg:mt-16 lg:ml-10">Testimonials</p>
        <div className='text-black whitespace-nowrap flex flex-col gap-0'>
            <div className="flex flex-row gap-3 text-[220px]">
                <p className=''>We Believe</p>
                <p className=''>We Believe</p>
            </div>
            <div className='flex flex-row gap-3 text-[220px]'>
                <p className=''>in Community</p>
                <p className=''>in Community</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials