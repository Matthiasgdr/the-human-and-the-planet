const $container = document.querySelector('.container')
const begin = $container.querySelector('.begin')
const beginButton = begin.querySelector('.begin-button')
const restart = $container.querySelectorAll('.restart')
const introductionSentences = $container.querySelectorAll('.sentence')
const introductionPictures = $container.querySelectorAll('.picture')
const buttonGoToMission = $container.querySelector('.buttonGoToMission')
const buttonGoToRocket = $container.querySelector('.buttonGoToRocket')
let scroll = 0

const takeUp = $container.querySelector('.take-up')
const rocket = $container.querySelector('.rocket-description')
const space = $container.querySelector('.space-container')
const mission = $container.querySelector('.mission-container')
const missionFailed = $container.querySelector('.failed-container')
let clickableRocket = false

const description = $container.querySelectorAll('.description')
const dialogueBulle = $container.querySelector('.dialog')

const porthole = $container.querySelector('.hublots')
const buttonGoToPortHole = $container.querySelector('.buttonGoToPortHole')
const scrollPorthole = $container.querySelectorAll('.goDown')

const rocketInSpace = $container.querySelector('.rocket-in-space')
const asteroides = $container.querySelector('.asteroides')
const goToAstero = $container.querySelector('.goToAstero')
const capitaineDialog = $container.querySelector('.space-asteroide-container>.capitaine-dialog')
const goToWarehouse = $container.querySelector('.goToWarehouse')

const warehouse = $container.querySelector('.warehouse-container')
const $getFood = $container.querySelector('.getFood')
const capitaineDialogInWarehouse = $container.querySelector('.dialog-at-warehouse')
const restartWarehouse = document.querySelector('.js-restart')

const buttonGoToLanding = $container.querySelector('.buttonGoToLanding')
const cockpit = $container.querySelector('.cockpit-container')
const mars = $container.querySelector('.mars-container')
const rocketOnMars = $container.querySelector('.mars-container>.rocket')
const congrats = mars.querySelector('.congratulations')

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

// RESTART

for (let i = 0; i < restart.length; i++) {
    const element = restart[i];
    element.addEventListener('click',
    () =>{
        window.location.reload();
    })
}

// QUESTIONNAIRE

const $quizContainer = document.querySelector('.conatiner')
const $quiz = document.querySelector('.quiz')
const elementQuestion = $quiz.querySelector('.question')
const $choice = $quiz.querySelector('.choice') 
const good = $choice.querySelector('.choice-posi')
const bad = $choice.querySelector('.choice-nega')
const restartQuiz = document.querySelector('.conatiner>.restart')
const buttonGoToExplanation = document.querySelector('.buttonGoToExplanation')
let question = [ //Possibilité d'ajouter des questions
    [
    "Have you less than 45 years ?",
    "Yes",
    "No",
    "True"
    ],
    [
    "Are you claustrophobic ?",
    "No",
    "Yes",
    "False"
    ],
    [
    "Can you have a child ?",
    "Yes",
    "No",
    "True"
    ],
    [
    "Do you have a disability ?",
    "No",
    "Yes",
    "False"
    ]
]
let i = 0 , go = 0, stay = 0, nb = question.length

$choice.addEventListener('click', () => {
    selection()
    i++
    if (i < nb) {
        setTimeout(questionSelect, 300)
    }
    if (i == nb) {
        result()
    }
})

const questionSelect = () => { // Apparition de la question
    elementQuestion.innerHTML = question[i][0]
    if (question[i][3] == 'False') {
        $choice.style.flexDirection = 'row-reverse'
    }
    else {
        $choice.style.flexDirection = 'row'
    }
    good.innerHTML = question[i][1]
    bad.innerHTML = question[i][2] 
}

const selection = () => { // Selection de la réponse
    good.addEventListener('click', () => {
        go++
    })
    bad.addEventListener('click', () => {
        stay++
    })
}

const result = () => { // Message de réponse
    $choice.remove()
    if (go - stay > 0) {
        elementQuestion.innerHTML = "Welcome on board!"
        elementQuestion.style.marginTop = '25px'
        buttonGoToExplanation.classList.remove('no-display')
    }
    else if (go - stay <= -nb) {
        elementQuestion.innerHTML = "You stay on earth"
        elementQuestion.style.marginTop = '25px'
        restartQuiz.classList.remove('no-display')
    }
    else {
        elementQuestion.innerHTML = "Error in your favour, you still come to the adventure"
        elementQuestion.style.marginTop = '10px'
        buttonGoToExplanation.classList.remove('no-display')
    }
}

questionSelect()

buttonGoToExplanation.addEventListener('click', goDownScene)

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
buttonGoToRocket.addEventListener('click', () => {
    goDownScene()
    buttonGoToRocket.classList.add('clicked')
})

buttonGoToRocket.addEventListener('click', () => {
 })


function goUpScene(){
    scroll -= 100
    $container.style.transform = `translateY(-${scroll}vh)`    
}
function goDownScene(){
    scroll += 100
    $container.style.transform = `translateY(-${scroll}vh)`
}

// DECOLLAGE DE LA FUSEE

takeUp.addEventListener('click', () => {
    let randomizer = Math.round(Math.random())
    space.classList.remove('no-display')
    mission.classList.add('no-display')
    for (let i = 0; i < description.length; i++) {
        const element = description[i];
        element.classList.add('no-display')
    }
    setTimeout(() => {
        goUpScene()}, 2000)
    if(randomizer == 1){
        failToSpace()
        buttonGoToPortHole.classList.add('no-display')
        setTimeout(() => {missionFailed.classList.remove('no-display')}, 7000)
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

buttonGoToPortHole.addEventListener('click', () => {
    if (clickableRocket) {
        porthole.classList.remove('no-display')
        
        
    }
})

// DEFILLEMENT DES HUBLOTS

for (let i = 0; i < scrollPorthole.length; i++) {
    const element = scrollPorthole[i];
    element.addEventListener('click', () => {goDownScene()})
}

// QUITTER LES HUBLOTS ET LANCER ANIMATION ASTEROIDES

goToAstero.addEventListener('click', () => {
    porthole.classList.add('no-display')
    rocketInSpace.classList.add('animation-rocket-fail')
    asteroides.classList.add('animation-aste')
    setTimeout(() => {
        capitaineDialog.classList.remove('no-display')
        goToWarehouse.classList.remove('no-display')
    }, 7000)
})

// ALLER A LA WAREHOUSE

goToWarehouse.addEventListener('click', () => {
    warehouse.classList.remove('no-display')
})

// EST-CE QUE IL PEUT AVOIR DE LA NOURRITURE ?

$getFood.addEventListener('click', getFood)

function getFood(){
    if (go == nb) {
        capitaineDialogInWarehouse.innerHTML = "You do not have any medical problems and you are young enough to be useful once on Mars, you are allowed to go get a ration of food every day. Don't feel bad about it, it's unfair, but it's the only way to get some of the passengers to Mars alive. I really wish I had other solutions."
    }
    else{
        capitaineDialogInWarehouse.innerHTML = "I'm sorry, but you've been identified as disabled, sterile or too old, you can't receive food, that's the procedure and it's the only way to get at least some of the rocket's passengers to Mars alive. I'm sorry, it's not my decision."
        restartWarehouse.classList.remove('no-display')
    }
    $getFood.classList.add('clicked')
}

// ALLER A L'ARRIVE SUR MARS

buttonGoToLanding.addEventListener('click', () => {
    mars.classList.remove('no-display')
    rocketOnMars.classList.add('land')
    setTimeout(() => {congrats.classList.add('opacity')}, 7000)
})

function loop(){
    requestAnimationFrame(loop)
}
loop()