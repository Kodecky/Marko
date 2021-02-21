const checkpointFirst = document.querySelector(".horizontal-line-first");
const checkpointSecond = document.querySelector(".horizontal-line-second");
const checkpointThird = document.querySelector(".horizontal-line-third");

const aboutHeader = document.querySelector(".section-about .heading-box");
const aboutText = document.querySelector(".section-about .text-box");
const offerHeader = document.querySelector(".section-offer .heading-box");
const offerText = document.querySelector(".section-offer .text-box");

window.addEventListener("scroll", function() {
  if (window.pageYOffset >  checkpointFirst.offsetTop) {
    aboutHeader.classList.add("show");
    aboutText.classList.add("show");
  }
})

window.addEventListener("scroll", function() {
  if (window.pageYOffset >  checkpointSecond.offsetTop) {
    offerHeader.classList.add("show");
    offerText.classList.add("show");
  }
})

