// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Swipers= () => {
  return ( <>
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      breakpoints={{
        // When window width is <= 640px, set slides per view to 2
        640: {
          slidesPerView: 3
        }
      }}
     className='bg-red-600'
    >
      <SwiperSlide><img src="https://i.ibb.co/VVCqyqf/logo4.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/NpFHnK6/logo3.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/TYYHHky/logo2.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/K90sK3z/logo1.png" alt="" /></SwiperSlide>
    </Swiper>
    </>
  );
};

export default Swipers