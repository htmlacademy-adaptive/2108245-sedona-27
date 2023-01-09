const header = document.querySelector('.main-header');
const navToggle = document.querySelector('.main-nav__toggle');

header.classList.remove('no-js');
navToggle.addEventListener('click', () => header.classList.toggle('is-open'));
