
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

// Swiper 2
let swiperSponsors = new Swiper(".swiper__sponsors", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    1650: {
      slidesPerView: 8,
      spaceBetween: 22,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 

// Swiper 3
let swiperAdvantages = new Swiper(".swiper__advantages", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1.7,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1280: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 45,
    },
  },
}); 