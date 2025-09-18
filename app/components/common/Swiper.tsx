'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {clsx} from "clsx";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface SwiperProps {
  spaceBetween: number;
  slidesPerView: number;
  slidesDesktop: number;
  slides: ReactNode[];
  swiperClass?: string; 
  hasNavigation?: boolean;
  hasScrollbar?: boolean;
  hasPagination?: boolean;
  slideClass?:string;
}

export default ({ swiperClass="",spaceBetween, slidesPerView, slidesDesktop, slides, hasNavigation = false, hasScrollbar = false, hasPagination=false, slideClass="" }: SwiperProps) => {
  return (
    <div className="w-full relative">
      <Swiper className={clsx(swiperClass)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={hasNavigation && {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.4,
          },
          1024: {
            slidesPerView: slidesDesktop,
          },
        }}
        pagination={hasPagination &&{ clickable: true }}
        scrollbar={hasScrollbar && { draggable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={slideClass}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    {hasNavigation &&
      <div className="w-full flex items-center justify-center gap-6 pt-6">
        <button className="button-prev inline-flex items-center justify-center bg-primary rounded-full text-white p-1.5"><CaretLeft size={26} /></button>
        <button className="button-next bg-primary rounded-full text-white p-1.5"><CaretRight size={26} /></button>
      </div>
      }

    </div>
  );
};
