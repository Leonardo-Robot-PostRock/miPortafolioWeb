import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>Hola</SwiperSlide>
      <SwiperSlide>Mundo</SwiperSlide>
      <SwiperSlide>Soy Leonardo</SwiperSlide>
    </Swiper>
  );
};
