const scroll = () => {
  document.querySelector(".about-nav-link").addEventListener("click", window.scrollTo({
    top: 1500,
    left: 0,
    behavior: "smooth"
  })
}