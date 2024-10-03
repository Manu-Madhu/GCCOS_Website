import logo from '../assets/Images/Logo.webp'

const Navbar = () => {
  return (
    <div className="lg:w-full lg:h-32 bg-green-4 lg:px-14 lg:py-5">
        <div className="lg:h-full lg:w-full bg-green-3 lg:rounded-2xl">
            <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-20 pt-3">
                <div className='lg:flex lg:flex-row lg:gap-7 text-white tracking-wide'>
                    <a href="#" className='lg:hover:text-gray-400'>Home</a>
                    <a href="#" className='lg:hover:text-gray-400'>About</a>
                    <a href="#" className='lg:hover:text-gray-400'>Gallery</a>
                    <a href="#" className='lg:hover:text-gray-400'>Blogs</a>
                </div>
                <img src={logo} alt="" sizes={10} className='lg:h-16 lg:pr-32' />
                <button className="bg-[#fee48b] lg:w-32 lg:h-10 lg:rounded-3xl lg:hover:bg-green-3 lg:hover:border border-black duration-300">User Profile</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar