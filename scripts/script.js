const begin = document.querySelector('.begin')
const beginButton = begin.querySelector('.begin-button')

beginButton.addEventListener('click', () => {
    beginButton.classList.add('clicked')
    const timeBeforeHiding = setTimeout(() => {begin.style.display="none"}, 1000)
})