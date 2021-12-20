//L’utente indica un livello di difficoltà (3 pulsanti) 
// in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//I numeri nella lista delle bombe non possono essere duplicati.
//In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
// - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, 
//cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
//BONUS:
//1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
//2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

const containerGridOne = document.querySelector('.container');
const containerGridTwo = document.querySelector('.container');
const containerGridThree = document.querySelector('.container');


const buttonLevelOne = document.querySelector('.button.level-one');
const buttonLevelTwo = document.querySelector('.button.level-two');
const buttonLevelThree = document.querySelector('.button.level-three');
const buttonReset = document.querySelector('.btn-reset');

const scoreGame = document.querySelector('.score');
const outputDifficulty = document.querySelector('.level-difficulty');

const newBox = document.createElement('div');

const listNumbers = [];
let i;
let x;
let y;

//Funzione per generare
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

//LIVELLO 1
//faccio apparire la griglia solo al click sul bottone
buttonLevelOne.addEventListener('click', function() {
    containerGridOne.innerHTML = ""; 
    outputDifficulty.innerHTML = `LIVELLO FACILE`;

    //16 numeri random in un range da 1 a 100
    while (listNumbers.length < 16) {
        const randomNumber = getRandom(1, 100);
        if (!listNumbers.includes(randomNumber)) {
            listNumbers.push(randomNumber);
        }; 
    };
    console.log(listNumbers);
    

    function createGrid(container) {
        const newBox = document.createElement('div');
        newBox.className = 'box-one';
        containerGridOne.append(newBox);

        newBox.addEventListener('click', function() {
            const randomNumber = getRandom(1, 100);
            if (listNumbers.includes(randomNumber)) {
                newBox.innerHTML = 'BOMB';
                newBox.classList.add('red');
                alert('HAI PERSO! INIZIA UNA NUOVA PARTITA');
            } else { 
                newBox.classList.add('light-blue');
                // finalScore = 
                // scoreGame.innerHTML = `Hai vinto con un punteggio di ${finalScore}!`
            };
        });
    };

    //creo la griglia con il range corrispondente
    for (let i = 1; i <= 100; i++) {
        createGrid(containerGridOne);
    };
});

// ------------------------------------------------------------------------------- //
//LIVELLO 2
buttonLevelTwo.addEventListener('click', function() {
    containerGridTwo.innerHTML = ""; 
    outputDifficulty.innerHTML = `LIVELLO INTERMEDIO`;
    
    function createGrid(container) {
        const newBox = document.createElement('div');
        newBox.className = 'box-two';
        containerGridTwo.append(newBox);
    
        newBox.addEventListener('click', function() {
            const randomNumber = getRandom(1, 81);
            if (listNumbers.includes(randomNumber)) {
                newBox.innerHTML = 'BOMB';
                newBox.classList.add('red');
                alert('HAI PERSO! INIZIA UNA NUOVA PARTITA');
            } else { 
                newBox.classList.add('light-blue');
                // finalScore = 
                // scoreGame.innerHTML = `Hai vinto con un punteggio di ${finalScore}!`
            };
        });
    };

    //16 numeri random in un range da 1 a 81
    while (listNumbers.length < 16){
        const randomNumber = getRandom(1, 81);
        if (!listNumbers.includes(randomNumber)) {
            listNumbers.push(randomNumber);
        };
    };
    console.log(listNumbers);

    for (let x = 1; x <= 81; x++) {
        createGrid(containerGridTwo);
    };
});

// ------------------------------------------------------------------------------- //
//LIVELLO 3

buttonLevelThree.addEventListener('click', function() {
    containerGridThree.innerHTML = ""; 
    outputDifficulty.innerHTML = `LIVELLO DIFFICILE`;

    function createGrid(container) {
        const newBox = document.createElement('div');
        newBox.className = 'box-three';
        containerGridThree.append(newBox);
    
        newBox.addEventListener('click', function() {
            const randomNumber = getRandom(1, 81);
            if (listNumbers.includes(randomNumber)) {
                newBox.innerHTML = 'BOMB';
                newBox.classList.add('red');
                alert('HAI PERSO! INIZIA UNA NUOVA PARTITA');
            } else { 
                newBox.classList.add('light-blue');
                // finalScore = 
                // scoreGame.innerHTML = `Hai vinto con un punteggio di ${finalScore}!`
            };
        });
    };

    //16 numeri random in un range da 1 a 49 
    while (listNumbers.length < 16){
        const randomNumber = getRandom(1, 49);
        if (!listNumbers.includes(randomNumber)) {
            listNumbers.push(randomNumber);
        }
    };
    console.log(listNumbers);
    

    for (let y = 1; y <= 49; y++) {
        createGrid(containerGridThree);
    };
});
