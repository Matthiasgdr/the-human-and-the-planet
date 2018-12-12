const begin = document.querySelector('.begin')
const beginButton = begin.querySelector('.begin-button')
const introductionSentences = document.querySelectorAll('.sentence')
const introductionPictures = document.querySelectorAll('.picture')


beginButton.addEventListener('click', () => {
    beginButton.classList.add('clicked')
    setTimeout(parralax, 300)
    setTimeout(intro, 4200)
})
function parralax(){
    begin.style.display="none"
    for (let i = 0; i < introductionPictures.length; i++) {
        const element = introductionPictures[i];
        element.classList.add('run')
    }
}

function intro(){
    for (let i = 0; i < introductionSentences.length; i++) {
        const element = introductionSentences[i];
        element.classList.add('animation')
    }
}


function loop(){
    requestAnimationFrame(loop)
}
loop()