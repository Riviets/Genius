const backdrop = document.querySelector('.backdrop');
const openBtn = document.querySelector('.modal-btn-open')
const closeBtn = document.querySelector('.modal-btn-close');
openBtn.addEventListener('click', function () {
    backdrop.classList.remove('is-hidden')
})
closeBtn.addEventListener('click', function () {
    backdrop.classList.add('is-hidden')
})