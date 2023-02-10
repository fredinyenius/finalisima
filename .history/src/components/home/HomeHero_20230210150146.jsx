import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const HomeHero = ({pokemos}) => {
    return ( 
    <Swiper
            tag='section'
            wrapperTag='div'
            className='hero'
            modules={[Navigation, Autoplay, Pagination, A11y]}
            loop
            navigation
            pagination={{ clickable: true }}
            //preloadImages={false}
            >
          {pokemos.map((elements) => {
            const { fullName } = elements.attributes;
            <SwiperSlide>{fullName}</SwiperSlide>
          })}
     </Swiper>
          );
        };
        
export default HomeHero;
