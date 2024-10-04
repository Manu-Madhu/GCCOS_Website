import bg from '../assets/Images/blogs.jpg'


const Blogs = () => {
  return (
    <div className="lg:h-screen bg-green-4 flex flex-col gap-7">
        <p className="lg:text-8xl font-medium lg:mt-10 lg:ml-10 text-white">Blogs</p>
        <div className='w-full mt-14'>
            <img src={bg} className='h-[535px] w-[1700px]'/>
        </div>
    </div>
  )
}

export default Blogs