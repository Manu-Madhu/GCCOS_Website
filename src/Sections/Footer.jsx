import footer from '../assets/Gifs/footer.mp4';
import logo from '../assets/Images/logo-white.webp';

const Footer = () => {
  return (
    <div className='h-auto w-full relative overflow-hidden'>
      <video src={footer} autoPlay loop muted className='w-full bg-cover bg-center' />
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col items-start mt-10 gap-10'>
        <img src={logo} className='h-[250px]'/>
        <div className='flex flex-col text-white text-4xl ml-20 gap-8'>
            <a href="#">Home</a>
            <a href="">About</a>
            <a href="">Gallery</a>
            <a href="">Blogs</a>
        </div>
        <div className='mb-0 ml-20 mt-10'>
            <div className='flex flex-col items-start justify-center gap-3'>
                <p className='text-2xl text text-white font-medium'>GCCOSS</p>
                <div className='text-white flex flex-row items-center gap-4'>
                    <input type="checkbox" name="" id="" className='h-3 w-3 fill-none border-white border-2'/>
                    <label htmlFor="">Yes, Subscribe me to your newsletter.</label>
                </div>
                <div className='flex flex-row gap-4 items-end justify-center'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-white text-sm'>Enter your email*</label>
                        <input type="email" name="" id="" required className='h-12 w-[400px] bg-transparent border-white border-2 text-white px-3' />
                    </div>
                    <button type="submit" className='h-12 w-60 text-white border-white border-2 rounded-full hover:bg-[#fee48b] hover:text-black duration-300'>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;