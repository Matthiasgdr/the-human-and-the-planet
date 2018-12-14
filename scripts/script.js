const begin = document.querySelector('.begin')
const $container = document.querySelector('.container')
const beginButton = begin.querySelector('.begin-button')
const introductionSentences = document.querySelectorAll('.sentence')
const introductionPictures = document.querySelectorAll('.picture')

// BOUTON COMMENCER

beginButton.addEventListener('click', () => {
    beginButton.classList.add('clicked')
    setTimeout(parralax, 300)
    setTimeout(intro, 4200)
})

// CACHER BOUTON COMMENCER PUIS AJOUT CLASS RUN POUR L'ANIMATION DU PARALLAX

function parralax(){
    begin.style.display="none"
    for (let i = 0; i < introductionPictures.length; i++) {
        const element = introductionPictures[i];
        element.classList.add('run')
    }
}

// DEFILEMENT DES PHRASES DE L'INTRO ET APPELLE DS CHANGEMENTS DE TERRAINS

function intro(){
    for (let i = 0; i < introductionSentences.length; i++) {
        const element = introductionSentences[i];
        element.classList.add('animation')
    }
    setTimeout(() => {changeField(2)}, 3500)
    setTimeout(() => {changeField(3)}, 7000)
    setTimeout(() => {changeField(4)}, 10500)
    setTimeout(() => {changeField(5)}, 14000)
}

// CHANGEMENT DE TERRAIN

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


introductionSentences[4].addEventListener('click', changeScene)

function changeScene(){
    let scroll = 100
    $container.style.transform = `translateY(-${scroll}vh)`
}

function loop(){
    requestAnimationFrame(loop)
}
loop()