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
    setTimeout(() => {changeField(2)}, 2000)
    setTimeout(() => {changeField(3)}, 4500)
    setTimeout(() => {changeField(4)}, 6000)
    setTimeout(() => {changeField(5)}, 7000)
}
function changeField(index){
   for (let i = 0; i < introductionPictures.length; i++) {
       const element = introductionPictures[i];
       element.classList.remove('animation', 'run')
   }
    setTimeout(() => {
        introductionPictures[index].style.transform = 'translateY(300px)'
    }, 300)
    setTimeout(() => {
        introductionPictures[index].style.backgroundImage = `url(images/${index}_2.png)`
        introductionPictures[index].style.transform = 'translateY(0px)'
    }, 600)
}

function loop(){
    requestAnimationFrame(loop)
}
loop()