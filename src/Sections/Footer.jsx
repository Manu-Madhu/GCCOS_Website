import footer from '../assets/Gifs/footer.mp4';

const Footer = () => {
  return (
    <div className='h-full w-full relative'>
      <video src={footer} autoPlay loop muted className='w-full bg-cover bg-center' />
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
    </div>
  );
};

export default Footer;