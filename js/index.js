const checkpointFirst = document.querySelector(".vertical-line-first");
const checkpointSecond = document.querySelector(".vertical-line-second");
const checkpointThird = document.querySelector(".vertical-line-third");

const aboutHeader = document.querySelector(".section-about .heading-box");
const aboutText = document.querySelector(".section-about .text-box");
const aboutTitle = document.querySelector(".section-about .title-big");
const offerHeader = document.querySelector(".section-offer .heading-box");
const offerCards = document.querySelector(".section-offer .cards-box");
const offerTitle = document.querySelector(".section-offer .title-big");
const goUpBtn = document.querySelector(".go-up-btn");

window.addEventListener("scroll", function() {
  // if (window.scrollY >  checkpointFirst.offsetTop - 400) {
  //   aboutHeader.classList.add("show");
  //   aboutText.classList.add("show");
  //   aboutTitle.classList.add("show-title-big");
  // }
  if(window.scrollY > 200) {
    goUpBtn.classList.add("show");
  } else {
    goUpBtn.classList.remove("show");
  }
})

// window.addEventListener("scroll", function() {
//   if (window.scrollY >  checkpointSecond.offsetTop - 400) {
//     offerHeader.classList.add("show");
//     offerCards.classList.add("show");
//     offerTitle.classList.add("show-title-big");
//   }
// })

const verticalsContainers = document.querySelectorAll(".vertical-line-container");
const sections = document.querySelectorAll(".section");
console.log(sections);
window.addEventListener("scroll", function() {
  verticalsContainers.forEach(container => {
    let line = container.querySelector(".vertical-line");
    if(window.scrollY > container.offsetTop - (window.innerHeight * 0.5)) {
      line.classList.add("active");
    }
  })
  sections.forEach(section => {
    let headingBox = section.querySelector(".heading-box");
    let textBox = section.querySelector(".text-box");
    let titleBig = section.querySelector(".title-big");
    let cardsBox = section.querySelector(".cards-box");
    if(window.scrollY > section.offsetTop - (window.innerHeight * 0.5)) {
      section.classList.add("show");
      headingBox.classList.add("show");
      titleBig.classList.add("show-title-big");
      if(textBox){
        textBox.classList.add("show");
      }
      if(cardsBox){
        cardsBox.classList.add("show");
      }
    }
  })
})

// const sections = document.querySelectorAll(".section");
// window.addEventListener("scroll", function() {
//   sections.forEach(section => {
//     let headingBox = section.querySelector(".heading-box");
//     let textBox = section.querySelector(".text-box");
//     let titleBig = section.querySelector(".title-big");
//     if(window.scrollY > section.offsetTop - (window.innerHeight * 0.5)) {
//       section.classList.add("show");
//       headingBox.classList.add("show");
//       textBox.classList.add("show");
//       titleBig.classList.add("show-title-big");
//     }
//   })
// })


