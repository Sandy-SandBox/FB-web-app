const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const layer = document.querySelector('.layer');


const toggleNav = function() {
    nav.classList.toggle('active');
    navToggle.classList.toggle('active');
    layer.classList.toggle('active');
}
navToggle.addEventListener('click',toggleNav);