document.addEventListener("DOMContentLoaded", () => {

  const goUpBtn = document.querySelector(".go-up-btn");
  const navigation = document.querySelector(".navigation");
  window.addEventListener("scroll", function() {
    if(window.scrollY > 200) {
      goUpBtn.classList.add("show");
      navigation.classList.add("scrolled");
    } else {
      goUpBtn.classList.remove("show");
      navigation.classList.remove("scrolled");
    }
  })

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

  const menu = document.querySelector(".menu");
  document.querySelectorAll(".menu-toggle").forEach((toggle) =>
    toggle.addEventListener("click", () => {
      const toggleAttr = (el) =>
        el.setAttribute(
          "data-open",
          el.getAttribute("data-open") === "true" ? "false" : "true"
        );
      toggleAttr(toggle);
      if (toggle.getAttribute("data-open") === "true") {
        menu.classList.add("active");
      } else {
        menu.classList.remove("active");
      }
    })
  );
});

