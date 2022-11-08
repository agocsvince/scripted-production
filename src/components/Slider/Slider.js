import React from 'react'
import './slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

const Slider = () => {
  return (
    <Swiper
    modules={[Autoplay]}
      slidesPerView={3}
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