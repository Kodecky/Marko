const checkpointFirst = document.querySelector(".horizontal-line-first");
const checkpointSecond = document.querySelector(".horizontal-line-second");
const checkpointThird = document.querySelector(".horizontal-line-third");

const aboutHeader = document.querySelector(".section-about .heading-box");
const aboutText = document.querySelector(".section-about .text-box");
const aboutTitle = document.querySelector(".section-about .title-big");
const offerHeader = document.querySelector(".section-offer .heading-box");
const offerCards = document.querySelector(".section-offer .cards-box");
const offerTitle = document.querySelector(".section-offer .title-big");

window.addEventListener("scroll", function() {
  if (window.pageYOffset >  checkpointFirst.offsetTop) {
    aboutHeader.classList.add("show");
    aboutText.classList.add("show");
    aboutTitle.classList.add("show-title-big");
  }
})

window.addEventListener("scroll", function() {
  if (window.pageYOffset >  checkpointSecond.offsetTop) {
    offerHeader.classList.add("show");
    offerCards.classList.add("show");
    offerTitle.classList.add("show-title-big");
  }
})

