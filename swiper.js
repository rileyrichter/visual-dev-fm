const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,
  grabCursor: true,
  slidesPerGroup: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".pop-next",
    prevEl: ".pop-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 1100px
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // when window width is >= 1480px
    1480: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    // when window width is >= 1865px
    1865: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
