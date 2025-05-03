import Swiper from 'swiper';
import 'swiper/css/bundle';

const faqLeftArrow = document.getElementById('faqLeftArrow');
const faqRightArrow = document.getElementById('faqRightArrow');

let faqSwiper;

faqSwiper = new Swiper('.faq-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 12,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      initialSlide: 1,
      spaceBetween: 22,
    },
  },
  on: {
    init: () => {
      document.querySelector('.faq-swiper-container').classList.add('show');
    },
    slideChange: () => {
      updateFaqArrows();
    },
  },
});

updateFaqArrows();

function updateFaqArrows() {
  if (faqSwiper) {
    faqLeftArrow.disabled = faqSwiper.isBeginning;
    faqRightArrow.disabled = faqSwiper.isEnd;
  }
}

faqLeftArrow.addEventListener('click', () => {
  faqSwiper.slidePrev();
});

faqRightArrow.addEventListener('click', () => {
  faqSwiper.slideNext();
});
