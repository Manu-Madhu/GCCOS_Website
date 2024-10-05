import pic1 from '../assets/Images/pic1.webp';
import pic2 from '../assets/Images/pic2.webp';
import pic3 from '../assets/Images/pic3.webp';
import pic4 from '../assets/Images/pic4.webp';
import pic5 from '../assets/Images/pic5.webp';
import pic6 from '../assets/Images/pic6.webp';

const Gallery_pics = () => {
  return (
    <div className="h-auto lg:mt-[200px] bg-green-4 flex flex-col items-center gap-16 pb-16 px-5">
      <div className="grid grid-cols-3 gap-6">
        <img src={pic1} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-lg" />
        <img src={pic2} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-lg" />
        <img src={pic3} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-lg" />
        <img src={pic4} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-lg" />
        <img src={pic5} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-lg" />
        <img src={pic6} alt="" className="w-full h-auto hover:scale-105 duration-300 rounded-lg" />
      </div>
      <button className="lg:h-[80px] lg:w-[200px] border-2 text-white hover:bg-white hover:text-black duration-300 rounded-lg">View More</button>
    </div>
  );
};

export default Gallery_pics;