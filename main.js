/*Modal window*/
const backdrop = document.querySelector('.backdrop');
const modalOpenBtns = document.querySelectorAll('.modal-btn-open');
const modalCloseBtn = document.querySelector('.modal-btn-close');

const toggleModal = () => {
    backdrop.classList.toggle('is-hidden');
};

modalOpenBtns.forEach(element => {
    element.addEventListener('click', toggleModal);
});

modalCloseBtn.addEventListener('click', toggleModal);


/*Mobile menu*/

const menu = document.querySelector('.mobile-menu')
const menuOpenBtn = document.querySelector('.menu-btn-open')
const menuCloseBtn = document.querySelector('.menu-btn-close')

const toggleMenu = () => menu.classList.toggle('is-open')
menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);