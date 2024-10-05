import '../Styles/AppearOnScroll.css';
import bg from '../assets/Images/blogs.jpg';
import comma from '../assets/Images/comma.png';
import word1 from "../assets/pdf/GCCOSS Overview.pdf";
import word2 from "../assets/pdf/Inauguration Blog post draft.pdf";
import word3 from "../assets/pdf/Why ESG Matters- Aligning Values with Business Success.pdf";

const blogsData = [
  {
    text: 'Why ESG Matters: Aligning Values with Business Success',
    author: 'Sneha Jose',
    designation: 'Research Analyst GCCOSS',
    buttonText: 'Read More',
    content: word3
  },
  {
    text: 'Celebrating the Inauguration of GCCOSS: A New Era in Sustainability.',
    author: 'Sneha Jose',
    designation: 'Research Analyst GCCOSS',
    buttonText: 'Read More',
    content: word2
  },
  {
    text: 'Statement of Work - GCCOSS.',
    author: 'Sneha Jose',
    designation: 'Research Analyst GCCOSS',
    buttonText: 'Read More',
    content: word1
  },
];

const Blogs = () => {
  return (
    <div id='blogs' className="lg:h-screen bg-green-4 flex flex-col gap-7 items-start justify-center">
      <p className="appear text-center text-[3rem] lg:text-9xl font-medium mt-5 lg:mt-10 lg:ml-10 text-white p-3">Blogs</p>
      <div className='w-full lg:mt-10  flex flex-col items-center justify-center z-0 relative overflow-hidden'>
        <img src={bg} className='h-[60vh] lg:h-[90vh] lg:w-screen z-0' alt="Blogs Background" />
        <div className='overflow-x-scroll w-full lg:h-[450px] lg:w-[1100px] z-10 absolute flex flex-row pl-5 pr-5 lg:items-center  lg:justify-center gap-6 '>
          {blogsData.map((blog, index) => (
            <div key={index} className="h-[300px] lg:h-[360px] min-w-[280px] lg:w-[370px] bg-white rounded-2xl flex flex-col items-center justify-center gap-4 lg:gap-8  p-6">
              <img src={comma} className='lg:h-10' alt="Comma" />
              <p className='lg:text-base lg:leading-10 text-center '>{blog.text}</p>
              <div className=''>
                <p className='lg:text-lg text-center font-medium'>{blog.author}</p>
                <p className='text-xs lg:text-sm text-center'>{blog.designation}</p>
              </div>
              {/* Button that opens the blog content in a new tab */}
              <a
                href={blog.content}
                target="_blank"
                rel="noopener noreferrer"
                className='p-3 lg:h-[50px] lg:w-[150px] bg-green-2 text-xs lg:text-sm text-white flex items-center justify-center rounded hover:bg-[#fee48b] hover:text-black duration-300'
              >
                {blog.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
