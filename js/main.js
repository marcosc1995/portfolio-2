console.log("test");
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  speed: 400,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  // spaceBetween: 100,
  loop: false,

  // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
