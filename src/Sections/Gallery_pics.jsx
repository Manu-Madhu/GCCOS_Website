import pic1 from '../assets/Images/pic1.webp';
import pic2 from '../assets/Images/pic2.webp';
import pic3 from '../assets/Images/pic3.webp';
import pic4 from '../assets/Images/pic4.webp';
import pic5 from '../assets/Images/pic5.webp';
import pic6 from '../assets/Images/pic6.webp';

const Gallery_pics = () => {
  return (
    <div className="h-screen lg:mt-[200px] bg-green-4">
      <div className="grid grid-cols-3 gap-6">
        <img src={pic1} alt="" className="w-full h-auto hover:scale-105 duration-300" />
        <img src={pic2} alt="" className="w-full h-auto hover:scale-105 duration-300" />
        <img src={pic3} alt="" className="w-full h-auto hover:scale-105 duration-300" />
        <img src={pic4} alt="" className="w-full h-auto hover:scale-105 duration-300" />
        <img src={pic5} alt="" className="w-full h-auto hover:scale-105 duration-300" />
        <img src={pic6} alt="" className="w-full h-auto hover:scale-105 duration-300" />
      </div>
    </div>
  );
};

export default Gallery_pics;