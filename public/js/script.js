
let swiper = new Swiper(".hero-swiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination1__hero",
    clickable: true,
  },
});


let productSwiper = new Swiper(".product-swiper__1", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1650: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  }
});