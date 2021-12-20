const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    loop: true,

    preloadImages: false,

    lazy: {
      loadOnTransitionStart: false,

      loadPrevNext: false,
    },

    watchSlidesProgress: true,

    watchSlidesVisibility: true,

    breakpoints: {
      320: {
        slidersPerView: 1,
      },
      778: {
        slidersPerView:3,
      }
    },
  });