import React from 'react'
import './slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'

const Slider = () => {
  return (
    <Swiper
    modules={[Autoplay]}
      slidesPerView={3.1}
      autoplay={{ disableOnInteraction : false}}
      disableOnInteraction={false}
      loop
    >
      <SwiperSlide style={{backgroundImage: `url(${img1})`}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage: `url(${img2})`}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage: `url(${img3})`}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage: `url(${img4})`}}></SwiperSlide>
    </Swiper>
  )
}

export default Slider