import React from 'react'
import './videoSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Vimeo from '@u-wave/react-vimeo';
import 'swiper/css';
import "swiper/css/navigation";


const Slider = ({classNames=''}) => {
    const classes=`video-slider ${classNames}`
    return (
        <div className={classes}>
            <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            disableOnInteraction={false}
            loop
            navigation={true}
            >
            <SwiperSlide><Vimeo className="video" video="766978136" autoplay /></SwiperSlide>
            <SwiperSlide><Vimeo className="video" video="766978136" autoplay /></SwiperSlide>
            <SwiperSlide><Vimeo className="video" video="766978136" autoplay /></SwiperSlide>
            <SwiperSlide><Vimeo className="video" video="766978136" autoplay /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider