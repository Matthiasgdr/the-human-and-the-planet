const begin = document.querySelector('.begin')
const beginButton = begin.querySelector('.begin-button')
const introductionSentence = document.querySelectorAll('.sentence')

beginButton.addEventListener('click', () => {
    beginButton.classList.add('clicked')
    const TimeBeforeIntro = setTimeout(intro, 800)
})

function intro(){
    begin.style.display="none"
    for (let i = 0; i < introductionSentence.length; i++) {
        const element = introductionSentence[i];
        element.classList.add('animation')
    }
}

function loop(){
    requestAnimationFrame(loop)
}
loop()