import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
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
          {pokemos.map((element) => {
            const { element } = element;
          })}
            </Swiper>
          );
        };
        
export default HomeHero;
