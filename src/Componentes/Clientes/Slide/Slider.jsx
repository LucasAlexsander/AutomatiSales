import React from 'react';
import { Swiper } from 'swiper/react';

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './Slider.css';

const Slider = ({ settings, children }) => {
  return (
    <>
      <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
        {children}
      </Swiper>
    </>
  );
};

export default Slider;
