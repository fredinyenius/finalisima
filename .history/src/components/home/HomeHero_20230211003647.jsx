import { Link } from 'react-router-dom';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeHero = ({ pokemos }) => {
  return (
    <Swiper
      tag='section'
      wrapperTag='div'
       className='hero'
      modules={[A11y, Autoplay, Navigation, Pagination]}
      loop
      navigation
      pagination={{ clickable: true }}
      preloadImages={false}
    >
      {pokemos.map((item) => {
        const { firstName, lastName, imageUrl } = item.id;
        return (
          <SwiperSlide
          key={item.id}
            // zoom={true}
            className='section hero d-flex a-items-center'
            style={{
              // backgroundImage: `linear-gradient(to right, var(--light-primary-shadow-color), var(--light-secondary-shadow-color)), url(${imagen.data[0].attributes.url})`
              backgroundImage: `url(${imageUrl})`,
              height: '100vh'
            }}
          >{item.fullName}
            <div className="container container--hero">
              <div className="card card--hero">
                <div className="card__body card__body--hero">
                  <h2 className="card__title card__title--hero">{firstName}</h2>
                  <h3 className="card__subtitle card__subtitle--hero">{lastName} </h3>
                  <img src={imageUrl} alt="" />
                  {/* <Link to={`/productos/${slug}`} className="button button--primary">Ver más</Link> */}
                  <Link to={`/`} className="button button--primary">Ver más</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeHero;

//const HomeHero = ({pokemos}) => {
//    return ( 
//      <div >
//        <br />
//        <br />
//        <br />
//
//      <h1>ACTORES DE GUERRA DE TRONOS</h1>
//
//      <ul>
//        {
//          pokemos.map(item =>(
//            <li key={item.id}>{item.fullName} 
//            <br />
//            <br />
//             <img src={item.imageUrl} alt="image" />
//
//            </li>
//          ))
//        }
//        
//      </ul>
//      </div>
//    )
//        };
//        
//export default HomeHero;
