const begin = document.querySelector('.begin')
const $container = document.querySelector('.container')
const beginButton = begin.querySelector('.begin-button')
const introductionSentences = document.querySelectorAll('.sentence')
const introductionPictures = document.querySelectorAll('.picture')
let scroll = 0

const takeUp = document.querySelector('.take-up')
const rocket = document.querySelector('.rocket-description')
const space = document.querySelector('.space-container')
const mission = document.querySelector('.mission-container')

const description = document.querySelectorAll('.description')
const dialogueBulle = document.querySelector('.dialog')


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

// FAIRE MONTER LE CONTAINER POUR CHANGER LA SCENE

introductionSentences[4].addEventListener('click', goDownScene)
mission.addEventListener('click', goDownScene)

function goUpScene(){
    scroll -= 100
    $container.style.transform = `translateY(-${scroll}vh)`
    console.log('hello');
    
}
function goDownScene(){
    scroll += 100
    $container.style.transform = `translateY(-${scroll}vh)`
    console.log('otoo');
}

// DECOLLAGE DE LA FUSEE

takeUp.addEventListener('click', () => {
    let randomizer = Math.round(Math.random())
    space.classList.remove('no-display')
    mission.classList.add('no-display')
    setTimeout(() => {goUpScene()}, 2000)
    if(randomizer == 1 ? rocket.classList.add('failToSpace') : rocket.classList.add('goToSpace'))
    console.log(space);
    
})

// DIALOGUE DU CAPITAINE

description[0].addEventListener('mouseover', () => {changeDialogue(0)})
description[1].addEventListener('mouseover', () => {changeDialogue(1)})
description[2].addEventListener('mouseover', () => {changeDialogue(2)})
description[3].addEventListener('mouseover', () => {changeDialogue(3)})
description[4].addEventListener('mouseover', () => {changeDialogue(4)})
description[5].addEventListener('mouseover', () => {changeDialogue(5)})

function changeDialogue(index){
    switch (index) {
        case index = 0:
            dialogueBulle.textContent = "External tank in aluminium, it can resist extremely high tempertatures experienced during re-entry. It is the largest component of the shuttle. It contains two internal tank : one for the storage of liquid hydrogen, and the other for the storage of liquid oxygen. Both tanks provide the fuel to the main engines required to provide the thrust for the vehicle to achieve a safe orbit"
            break;
    
        case index = 1:
            dialogueBulle.textContent = "Parachutes to desselerate the speed after the shuttle’s disposal of the rockets"
            break;
    
        case index = 2:
            dialogueBulle.textContent = "Main engines help the rocket boosters for lift off and continue to operate after they are jettisoned to allow the shuttle to reach orbit."
            break;
    
        case index = 3:
            dialogueBulle.textContent = "Orbiter : It is the crew’s home and the heart and brains of the space shuttle. The Orbiter contains the pressurized crew compartment, the payload hardware and the three main engines mounted on its end."
            break;
    
        case index = 4:
            dialogueBulle.textContent = "Solid rocket boosters provide the thrust to lift the shuttle off thte ground for the initial ascent and are only ignited when the three main engines reach the required 104.5 % thrust level for launch. They are usually unloaded 2 minutes after the launch, after taking the shuttle at an altitude of about 45 kilometers "
            break;
    
        case index = 5:
            dialogueBulle.textContent = "Star trackers, satellites and equipment box. This Collects informations like chocs, temperatures and transmit them to stations on the ground "
            break;
    
        default:
            dialogueBulle.textContent = "Bonjour voyageur ! Passe la souris sur les différents ronds rouges si tu veux que je te donne des informations sur la fusée qui va nous emmener sur Mars !"
            break;
    }
}

function loop(){
    requestAnimationFrame(loop)
}
loop()