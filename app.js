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
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 4,
    },
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

var swiper = new Swiper(".swiperFlashDeals", {
  slidesPerView: 4,
  grid: {
    rows: 2,
    fill: "row",
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination-deals",
    clickable: true,
  },
});

const angleDowns = document.querySelectorAll(".display-options i");
const list = document.querySelectorAll(".display-options ul");

var isArrowDown = new Array(angleDowns.length).fill(true);

if (angleDowns) {
  angleDowns.forEach((angle, index) => {
    angle.addEventListener("click", () => {
      list[index].classList.toggle("show");
      if (isArrowDown[index]) {
        angle.classList.remove("fa-angle-down");
        angle.classList.add("fa-angle-up");
      } else {
        angle.classList.remove("fa-angle-up");
        angle.classList.add("fa-angle-down");
      }
      isArrowDown[index] = !isArrowDown[index];
    });
  });
}
