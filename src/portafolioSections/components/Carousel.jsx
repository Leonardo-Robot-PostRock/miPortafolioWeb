import '../styles/swiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ArrowsOfSwiper } from '../../ui/components/ArrowsOfSwiper';

export const Carousel = ({ proyects, darkMode }) => {
  const paginationClass = darkMode
    ? 'swiper-pagination-bullets-dark'
    : 'swiper-pagination-bullets-light';

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={true}
      spaceBetween={50}
      navigation={{
        nextEl: '.image-swiper-button-next',
        prevEl: '.image-swiper-button-prev',
      }}
      pagination={{ clickable: true, el: `.${paginationClass}` }}
      scrollbar={{ draggable: true }}
      className="mySwiper flex w-72 flex-col xs:w-64 375:w-80 sm:w-96 md:mx-10 md:w-3/5">
      {proyects?.map((proyect) => {
        return (
          <SwiperSlide className="mb-10 flex justify-center" key={proyect.id}>
            <ArrowsOfSwiper arrowMaterialSymbols={"arrow_forward_ios"} direction={"next"} />
            <ArrowsOfSwiper arrowMaterialSymbols={"arrow_back_ios_new"} direction={"prev"}/>
            <img
              className="z-0 w-11/12 rounded-md bg-neutral-200 p-2 shadow-lg dark:bg-neutral-400 2xl:rounded-lg"
              src={proyect.image}
              alt={proyect.title}
            />
            <div className="absolute -bottom-2 right-2 z-20 mr-2 flex animate-pulse flex-col place-items-center rounded-md bg-neutral-900 p-1 font-Kanit text-xs text-white transition delay-1000 dark:bg-neutral-600">
              <div className="flex items-center justify-center">
                <img
                  className="w-6 p-1 md:w-10"
                  src={proyect.technology}
                  alt={proyect.title}
                />
                <a
                  href={proyect.link}
                  target="_blank"
                  className="flex cursor-pointer p-1">
                  <span className="material-symbols-outlined text-sm md:text-base xl:text-2xl">
                    link
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className={paginationClass}></div>
    </Swiper>
  );
};
