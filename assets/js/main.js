const sun = document.querySelector('.sun')
const body = document.querySelector('body')

sun.addEventListener('click', () => {
    body.classList.toggle('dark')
})
