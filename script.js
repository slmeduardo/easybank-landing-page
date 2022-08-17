const hamburguer = document.getElementById('hamburguer')
const navUl = document.getElementById('ul-nav')

hamburguer.addEventListener('click', () => {
    navUl.classList.toggle('show')
})