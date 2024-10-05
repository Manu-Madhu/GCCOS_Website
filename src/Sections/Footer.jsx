import footer from '../assets/Gifs/footer.mp4';
import logo from '../assets/Images/logo-white.webp';

const Footer = () => {
  return (
    <div id='contact' className='min-h-screen lg:h-auto w-full relative overflow-hidden'>
      <video src={footer} autoPlay loop muted className='object-cover min-h-screen w-full lg:bg-cover bg-center' />
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col items-start lg:mt-10 lg:gap-10'>
        <div className='flex item-center justify-center w-full lg:items-start lg:justify-start'>
          <img src={logo} className='w-40 lg:w-[250px] lg:h-[250px] object-cover lg:ml-10' />
        </div>
        <div className='flex lg:flex-col text-white items-center justify-center lg:items-start lg:justify-start lg:text-4xl lg:ml-20 gap-5 lg:gap-8 px-3 lg:px-0 w-full lg:w-fit'>
          <a href="#">Home</a>
          <a href="">About</a>
          <a href="">Gallery</a>
          <a href="">Blogs</a>
        </div>
        <div className='mb-0 lg:ml-20 mt-5 lg:mt-10 flex flex-col lg:flex-row items-start lg:items-end lg:justify-between w-full lg:w-fit p-3 lg:p-0'>
          <div className='flex flex-col items-start justify-center gap-3 w-full lg:w-fit'>
            <p className='text-2xl text text-white font-medium w-full text-center lg:text-start'>GCCOSS</p>
            <div className='text-white flex flex-row items-center gap-4'>
              <input type="checkbox" name="" id="" className='h-3 w-3 fill-none border-white border-2' />
              <label htmlFor="">Yes, Subscribe me to your newsletter.</label>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 lg:items-end lg:justify-center w-full lg:w-fit'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-white text-sm'>Enter your email*</label>
                <input type="email" name="" id="" required className='h-12 w-full lg:w-[400px] bg-transparent border-white border-2 text-white px-3' />
              </div>
              <button type="submit" className='h-12 w-60 text-white border-white border-2 lg:rounded-full hover:bg-[#fee48b] hover:text-black duration-300'>Subscribe</button>
            </div>
          </div>
          <div className='flex flex-col text-white h-full w-72 lg:ml-32 mt-10 lg:mt-0'>
            <p className='text-2xl font-medium'>Contact Info</p>
            <p className='text-lg'>3rd Floor, Student Amenity Centre, University Road, South Kalamassery, Ernakulam, Kerala 682022</p>
            <p className='text-base font-medium'>+91 95672 55580</p>
            <p className='ext-base font-medium'>gccoss@cusat.ac.in</p>
          </div>
          <div className='flex flex-col text-white lg:ml-32 mt-5 lg:mt-0'>
            <p className='text-sm lg:text-2xl font-medium'>GCCOSS</p>
            <p className='text-xs lg:text-md'>© 2024 by GCCOS Built</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;