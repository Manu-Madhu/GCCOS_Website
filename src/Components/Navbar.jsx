import logo from '../assets/Images/Logo.webp'

const Navbar = () => {
  return (
    <div className="lg:w-full lg:h-32 bg-green-4 lg:px-14 lg:py-5">
        <div className="lg:h-full lg:w-full bg-green-3 lg:rounded-2xl">
            <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-20 pt-3">
                <div className='lg:flex lg:flex-row lg:gap-7 text-white'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Gallery</a>
                    <a href="#">Blogs</a>
                </div>
                <img src={logo} alt="" sizes={10} className='lg:h-16 lg:pr-32' />
                <button className="bg-[#fee48b] lg:w-32 lg:h-10 lg:rounded-3xl">User Profile</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar