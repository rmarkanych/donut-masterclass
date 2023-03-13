const offset = 100;

const scrollUp = document.querySelector('.btn-scroll');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {

  getTop() > offset ? scrollUp.classList.add('btn-scroll__active') : scrollUp.classList.remove('btn-scroll__active')
})

scrollUp.addEventListener('click', () => {
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})