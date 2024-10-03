import logo from '../assets/Images/Logo.webp'

const Navbar = () => {
  return (
    <div className="lg:w-full lg:h-32 bg-green-4 lg:px-14 lg:py-5">
        <div className="lg:h-full lg:w-full bg-green-3 lg:rounded-2xl">
            <div className="class">
                <div>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Gallery</a>
                    <a href="">Blogs</a>
                </div>
                <img src={logo} alt="" />
                <button className="class">User Profile</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar