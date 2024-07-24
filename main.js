import "./style/main.scss";
// import Swiper JS
// core version + navigation, pagination modules:

import Swiper from "swiper/bundle";
// import Swiper and modules styles
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 10,
  resizeObserver: true,
});

const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
  },
  speed: 8000,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loopAdditionalSlides: 0,
  observer: true,
  observeParents: true,
  spaceBetween: 10,
});

const swiper3 = new Swiper(".swiper3", {
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  speed: 6000,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loopAdditionalSlides: 0, //noSwiping : true,
  observer: true,
  observeParents: true,
  spaceBetween: 10,
});
