import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  initialSlide: 1,
  centeredSlides: true,
  loop: "infinite",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 1.2,
      spaceBetween: 40
    }
  }
});

const fundraisingSwiper = new Swiper(".fundraisingSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row"
      }
    }
  }
});

const hotSwiper = new Swiper(".hotSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-hot-next",
    prevEl: ".swiper-hot-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2
    },

    1200: {
      slidesPerView: 4
    }
  }
});

const categorySwiper = new Swiper(".categorySwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    rows: 2,
    fill: "row"
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 4,
        fill: "row"
      }
    }
  }
});

const teacherSwiper = new Swiper(".teacherSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    768: {
      slidesPerView: 1.2
    },

    992: {
      slidesPerView: 2
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: "row"
      }
    }
  }
});

const courseSwiper = new Swiper(".courseSwiper", {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});