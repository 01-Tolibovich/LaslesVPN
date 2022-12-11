const app = document.querySelector('#app')
const menuList = app.querySelector('.menu_list')

const burgerBtn = app.querySelector('.burger_btn')
burgerBtn.addEventListener('click', burgerMenu)
function burgerMenu() {
    burgerBtn.classList.toggle('active')
    menuList.classList.toggle('open')
    sign.classList.toggle('open')
    app.classList.toggle('lock')
}


const sign = app.querySelector('.sign')
const wrapper = app.querySelector('.wrapper')
menuList.addEventListener('click', closeMenu)
sign.addEventListener('click', closeMenu)
wrapper.addEventListener('click', closeMenu)
function closeMenu() {
    burgerBtn.classList.remove('active')
    menuList.classList.remove('open')
    sign.classList.remove('open')
    app.classList.remove('lock')
}



// Анимация при скроле страницы
const scrollElements = app.querySelectorAll(".anim-item");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("active-anim");
};

const hideScrollElement = (element) => {
  element.classList.remove("active-anim");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


setTimeout(() => {
    handleScrollAnimation();
}, 300)