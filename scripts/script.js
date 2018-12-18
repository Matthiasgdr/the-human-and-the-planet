const begin = document.querySelector('.begin')
const $container = document.querySelector('.container')
const beginButton = begin.querySelector('.begin-button')
const introductionSentences = document.querySelectorAll('.sentence')
const introductionPictures = document.querySelectorAll('.picture')
const buttonGoToMission = document.querySelector('.buttonGoToMission')
const buttonGoToRocket = document.querySelector('.buttonGoToRocket')
let scroll = 0

const takeUp = document.querySelector('.take-up')
const rocket = document.querySelector('.rocket-description')
const space = document.querySelector('.space-container')
const mission = document.querySelector('.mission-container')
let clickableRocket = false

const description = document.querySelectorAll('.description')
const dialogueBulle = document.querySelector('.dialog')

const porthole = document.querySelector('.hublots')
const scrollPorthole = document.querySelectorAll('.goDown')

// BOUTON COMMENCER

beginButton.addEventListener('click', () => {
    beginButton.classList.add('clicked')
    setTimeout(parralax, 300)
    setTimeout(intro, 4200)
    setTimeout(() => {buttonGoToMission.classList.remove('no-display')}, 400)
})

buttonGoToMission.addEventListener('click', () => {
   buttonGoToMission.classList.add('clicked')
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

buttonGoToMission.addEventListener('click', goDownScene)
buttonGoToRocket.addEventListener('click', goDownScene)

buttonGoToRocket.addEventListener('click', () => {
    buttonGoToRocket.classList.add('clicked')
 })


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
    setTimeout(() => {
        goUpScene()}, 2000)
    if(randomizer == 1){
        failToSpace()
    }
    else{
        goToSpace()
    }
})

function failToSpace(){
    rocket.classList.add('failToSpace')
}
function goToSpace(){
    rocket.classList.add('goToSpace')
    setTimeout(() => {clickableRocket = true}, 5000)
}
// DIALOGUE DU CAPITAINE

for (let i = 0; i < description.length; i++) {
    description[i].addEventListener('mouseover', () => {changeDialogue(i)})
}

function changeDialogue(index){
    switch (index) {
        case index = 0:
            dialogueBulle.innerHTML = "External tank in aluminium, it can resist extremely high tempertatures experienced during re-entry. It is the largest component of the shuttle. It contains two internal tank : one for the storage of liquid hydrogen, and the other for the storage of liquid oxygen. Both tanks provide the fuel to the main engines required to provide the thrust for the vehicle to achieve a safe orbit"
            break;
    
        case index = 1:
            dialogueBulle.innerHTML = "Parachutes to desselerate the speed after the shuttle’s disposal of the rockets"
            break;
    
        case index = 2:
            dialogueBulle.innerHTML = "Main engines help the rocket boosters for lift off and continue to operate after they are jettisoned to allow the shuttle to reach orbit."
            break;
    
        case index = 3:
            dialogueBulle.innerHTML = "<strong>Orbiter</strong> : It is the crew’s home and the heart and brains of the space shuttle. The Orbiter contains the pressurized crew compartment, the payload hardware and the three main engines mounted on its end."
            break;
    
        case index = 4:
            dialogueBulle.innerHTML = "Solid rocket boosters provide the thrust to lift the shuttle off thte ground for the initial ascent and are only ignited when the three main engines reach the required 104.5 % thrust level for launch. They are usually unloaded 2 minutes after the launch, after taking the shuttle at an altitude of about 45 kilometers "
            break;
    
        case index = 5:
            dialogueBulle.innerHTML = "Star trackers, satellites and equipment box. This Collects informations like chocs, temperatures and transmit them to stations on the ground "
            break;
    
        default:
            dialogueBulle.innerHTML = "Hello, traveller! Put your mouse over the different red circles if you want me to give you information about the rocket that will take us to Mars!"
            break;
    }
}

// AFFICHAGE DES HUBLOTS


rocket.addEventListener('click', () => {
    if (clickableRocket) {
        porthole.classList.remove('no-display')
        console.log('yes !');
        
    }
})

        // DEFILLEMENT DES HUBLOTS

for (let i = 0; i < scrollPorthole.length; i++) {
    const element = scrollPorthole[i];
    element.addEventListener('click', () => {goDownScene()})
}

function loop(){
    requestAnimationFrame(loop)
}
loop()