
function mediaSlider(x) {
  if (x.matches) { // If media query matches
    card = 3;
  }
  else {
    card = 2;
  }
let swiper = new Swiper(".it-swiper", {
  slidesPerView: card,
  spaceBetween: 10,
  slidesPerGroup: card,
  loop: true,
  loopFillGroupWithBlank: true,
  /*pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, ----> da aggiustare */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 });
}
var x = window.matchMedia("(min-width: 768px)");
mediaSlider(x);// Call listener function at run time
x.addListener(mediaSlider); // Attach listener function on state changes
