//Menú mobile//

const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector ('.nav-links')

menuBtn.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu')
})

//Slider//

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider');

prevBtn.addEventListener('click', () => {
  slider.scrollLeft -= 470;
});

nextBtn.addEventListener('click', () => {
  slider.scrollLeft += 470;
});
