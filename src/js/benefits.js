import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { observeSwiperAutoplay } from './observer.js';

Swiper.use([Autoplay]);

const benefitsSwiperEl = document.querySelector('.benefits-swiper-container');

let benefitsSwiper;

benefitsSwiper = new Swiper('.benefits-swiper-container', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 40,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      loop: false,
      initialSlide: 2,
      slidesPerView: 5,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.benefits-swiper-container')
        .classList.add('show');
    },
  },
});

observeSwiperAutoplay(benefitsSwiper, benefitsSwiperEl);
