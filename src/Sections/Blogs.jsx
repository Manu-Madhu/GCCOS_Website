import '../Styles/AppearOnScroll.css';
import bg from '../assets/Images/blogs.jpg';
import comma from '../assets/Images/comma.png';

const blogsData = [
  {
    text: 'Why ESG Matters: Aligning Values with Business Success',
    author: 'Sneha Jose',
    designation: 'Sustainability Expert',
    buttonText: 'Read More',
  },
  {
    text: 'Celebrating the Inauguration of GCCOSS: A New Era in Sustainability.',
    author: 'Sneha Jose',
    designation: 'Sustainability Expert',
    buttonText: 'Read More',
  },
  {
    text: 'Statement of Work - GCCOSS.',
    author: 'Sneha Jose',
    designation: 'Sustainability Expert',
    buttonText: 'Read More',
  },
];

const Blogs = () => {
  return (
    <div id='blogs' className="lg:h-screen bg-green-4 flex flex-col gap-7 items-start justify-center">
      <p className="appear lg:text-9xl font-medium lg:mt-10 lg:ml-10 text-white">Blogs</p>
      <div className='w-full lg:mt-10 flex flex-col items-center justify-center z-0 relative'>
        <img src={bg} className='h-[535px] w-[1700px] z-0' />
        <div className='lg:h-[450px] lg:w-[1100px] z-10 absolute flex flex-row items-center justify-center gap-6'>
          {blogsData.map((blog, index) => (
            <div key={index} className="lg:h-full lg:w-[370px] bg-white rounded-2xl flex flex-col items-center justify-center gap-14 p-6">
              <img src={comma} className='lg:h-10' />
              <p className='lg:text-base leading-10 text-center'>{blog.text}</p>
              <div>
                <p className='lg:text-lg text-center font-medium'>{blog.author}</p>
                <p className='lg:text-sm text-center'>{blog.designation}</p>
              </div>
              <button className='lg:h-[50px] lg:w-[150px] bg-green-2 text-white hover:bg-[#fee48b] hover:text-black duration-300'>{blog.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;