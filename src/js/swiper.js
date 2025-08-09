document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.custom__swiper');

  sliders.forEach((el, index) => {
    new Swiper(el, {
      slidesPerView: 3,
      loop: true,
      grabCursor: true,
      speed: 900,
      spaceBetween: 15,
      autoHeight: false,
      pagination: {
        el: el.querySelector('.swiper__pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: el.querySelector('.custom__buttom_next'),
        prevEl: el.querySelector('.custom__buttom_prev'),
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 4,
        },
      },
    });
  });
});


const clubsEl = document.querySelector('.clubs__swiper');

if (clubsEl) {
  const clubsSwiper = new Swiper(clubsEl, {
    slidesPerView: 3,
    speed: 800,
    grabCursor: true,
    loop: true,
    spaceBetween: 0,
    autoHeight: false,
    pagination: {
      el: '.swiper__pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.custom__buttom_next',
      prevEl: '.custom__buttom_prev',
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      800: { slidesPerView: 2, spaceBetween: 15 },
      1250: { slidesPerView: 3, spaceBetween: 15 },
    },
  });
}

const cupsEl = document.querySelector('.cups__swiper');

if (cupsEl) {
  const cupsSwiper = new Swiper(cupsEl, {
    slidesPerView: 3,
    speed: 800,
    grabCursor: true,
    loop: true,
    spaceBetween: 0,
    autoHeight: false,
    pagination: {
      el: '.swiper__pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.custom__buttom_next',
      prevEl: '.custom__buttom_prev',
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      550: { slidesPerView: 2, spaceBetween: 15 },
      800: { slidesPerView: 3, spaceBetween: 15 },
    },
  });
}