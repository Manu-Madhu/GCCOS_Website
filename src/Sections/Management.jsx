import '../Styles/AppearOnScroll.css'
import '../Styles/SwiperStyle.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Management = () => {
  return (
    <div className="lg:h-auto bg-[#77846d] flex flex-col items-start px-32 pb-20">
        <p className="appear mt-10 text-white text-7xl lg:ml-8 font-medium">Management Council Members</p>

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        pagination={{ clickable: true  }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='appear h-[400px] w-full bg-[#77846d] mt-20 gap-4'
        >
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>CHAIRMAN</p>
                <p className='text-3xl mt-5'>DR. JUNAIND BUSHIRI</p>
                <p className='mt-5'>Vice Chancellor. CUSAT</p>
                <p className='mt-5'>Cochin University of Science and Technology</p>
            </SwiperSlide>
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>MEMBER</p>
                <p className='text-3xl mt-5'>MR. C J GEORGE</p>
                <p className='mt-5'>Chairman & Managing Director</p>
                <p className='mt-5'>Geojit Financial Services Limited</p>
            </SwiperSlide>
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>MEMBER</p>
                <p className='text-3xl mt-5 uppercase'>P D JOSE</p>
                <p className='mt-5'>Professor</p>
                <p className='mt-5'>Indian Institute of Technology, Banglore</p>
            </SwiperSlide>
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>MEMBER</p>
                <p className='text-3xl mt-5'>M A BALAKRISHNAN</p>
                <p className='mt-5'>Executive Director</p>
                <p className='mt-5'>Geojit Financial Services Limited</p>
            </SwiperSlide>
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>MEMBER</p>
                <p className='text-3xl mt-5'>DR. SIVANANDAN ACHARI</p>
                <p className='mt-5'>Profesor</p>
                <p className='mt-5'>School of Environmental Studies, CUSAT</p>
            </SwiperSlide>
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>MEMBER</p>
                <p className='text-3xl mt-5'>MS. MINI NAIR</p>
                <p className='mt-5'>Cheif Financial Officer</p>
                <p className='mt-5'>Geojit Financial Services Limited</p>
            </SwiperSlide>
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>MEMBER</p>
                <p className='text-3xl mt-5'>DR. ABHILASH S</p>
                <p className='mt-5'>Associate Profesor</p>
                <p className='mt-5'>Department of Atmospheric Scienes, CUSAT</p>
            </SwiperSlide>
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>MEMBER</p>
                <p className='text-3xl mt-5'>DR. SAM THOMAS</p>
                <p className='mt-5'>Deam of Faculty of Social Sciences</p>
                <p className='mt-5'>Faculty in charge for GCCOSS, CUSAT</p>
            </SwiperSlide>
            <SwiperSlide className='bg-white flex flex-col rounded-2xl p-10'>
                <p className='text-2xl mt-10 font-bold'>MEMBER</p>
                <p className='text-3xl mt-5'>MR. KRISHNA PRAKASH NAIR</p>
                <p className='mt-5'>Associate Director</p>
                <p className='mt-5'>GCCOSS, CUSAT</p>
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default Management