import Swiper from 'swiper';
import 'swiper/css/bundle';

const processSwiperEl = document.querySelector('.process-swiper-container');
const processDots = document.querySelectorAll('.process-dot');

let processSwiper = null;

function initProcessSwiper() {
  processSwiper = new Swiper('.process-swiper-container', {
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 10,
    allowTouchMove: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    on: {
      init: () => {
        processSwiperEl.classList.add('show');
      },
      slideChange: () => {
        updateProcessDots(processSwiper.realIndex);
      },
    },
  });

  processDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      processSwiper.slideTo(index);
    });
  });
}

function destroyProcessSwiper() {
  if (processSwiper) {
    processSwiper.destroy(true, true);
    processSwiper = null;
    processSwiperEl.classList.remove('show');
    updateProcessDots(0);
  }
}

function handleResize() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 1440) {
    if (!processSwiper) {
      initProcessSwiper();
    }
  } else {
    destroyProcessSwiper();
  }
}

handleResize();

window.addEventListener('resize', handleResize);

function updateProcessDots(index) {
  processDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}
