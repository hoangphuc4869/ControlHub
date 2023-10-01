// $(window).load(function () {
//   $("#slider").nivoSlider({
//     effect: "random",
//     slices: 15,
//     boxCols: 8,
//     boxRows: 4,
//     animSpeed: 1000,
//     pauseTime: 2000,
//     startSlide: 0,
//     directionNav: false,
//     controlNav: false,
//     controlNavThumbs: false,
//     pauseOnHover: true,
//     manualAdvance: false,
//     prevText: "Prev",
//     nextText: "Next",
//     randomStart: false,
//     beforeChange: function () {},
//     afterChange: function () {},
//     slideshowEnd: function () {},
//     lastSlide: function () {},
//     afterLoad: function () {},
//   });
// });

var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".productsSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination-products",
    clickable: true,
  },
});

var swiper = new Swiper(".cateSwiper", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination-cate",
    clickable: true,
  },
});

var swiper = new Swiper(".newProductsSwiper", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination-products",
    clickable: true,
  },
});
