import React,{ useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import './Home.scss';
function Slider() {
  const sliders = useSelector(state => state.slidercars)
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {sliders.map(slider =>  
          <SwiperSlide key={slider.id}>
             <div className='slider-container'>
                <div className='image-box'>
                  <img className="image-slider" src={slider.image} alt={slider} />
                </div>
              <h3 className='slider-title'>{slider.title}</h3>
              <p className='slider-sub-title'> {slider.desc}</p>
             </div>
            </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default Slider