const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll('.nav__link');
const layer = document.querySelector(".layer");
const faqs = document.querySelectorAll(".faq__item");

const toggleNav = function () {
  nav.classList.toggle("active");
  navToggle.classList.toggle("active");
  layer.classList.toggle("active");
};
navToggle.addEventListener("click", toggleNav);



const hideNav = function() {
  nav.classList.remove("active");
  navToggle.classList.remove("active");
  layer.classList.remove("active");
}
for (const navLink of navLinks) {
  navLink.addEventListener('click',hideNav);
}