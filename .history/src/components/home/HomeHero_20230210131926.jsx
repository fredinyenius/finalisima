import { Navigation, Autoplay Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const HomeHero = ({pokemos}) => {
    return ( 

            <Swiper
            tag='section'
            wrapperTag='div'
            modules={[Navigation, Autoplay, Pagination, A11y]}
            autoplay={{ delay: 5000}}
            navigation
            pagination={{ clickable: true }}
            lazyPreloaderImages={false}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
          );
        };
        
export default HomeHero;
