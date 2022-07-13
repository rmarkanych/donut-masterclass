const menuLinks = document.querySelectorAll('.menu-nav__link');
const headerLinks = document.querySelectorAll('.header-nav__link');
const headerTxtLinks = document.querySelectorAll('.header-btn');

menuLinks.forEach(link => link.addEventListener('click', clickHandler));
headerLinks.forEach(link => link.addEventListener('click', clickHandler));
headerTxtLinks.forEach(link => link.addEventListener('click', clickHandler));

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}
