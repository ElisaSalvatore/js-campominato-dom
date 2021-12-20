//L’utente indica un livello di difficoltà (3 pulsanti) 
// in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const containerGridOne = document.querySelector('.container');
const containerGridTwo = document.querySelector('.container');
const containerGridThree = document.querySelector('.container');


const buttonLevelOne = document.querySelector('.button.level-one');
const buttonLevelTwo = document.querySelector('.button.level-two');
const buttonLevelThree = document.querySelector('.button.level-three');

const outputDifficulty = document.querySelector('.level-difficulty');


//LIVELLO 1
//faccio apparire la griglia solo al click sul bottone
buttonLevelOne.addEventListener('click', function() {
    containerGridOne.innerHTML = ""; 

    buttonLevelOne.style.backgroundColor = '#a13747';
    outputDifficulty.innerHTML = `LIVELLO FACILE`;
    
    function createGrid(container) {
        const newBox = document.createElement('div');
        newBox.className = 'box-one';
        containerGridOne.append(newBox);
        
        newBox.addEventListener('click', function() {
            this.classList.add('light-blue');
        })
    };
    
    //creo la griglia 
    for (let i = 0; i < 100; i++) {
        createGrid(containerGridOne);
    };
});

//LIVELLO 2
buttonLevelTwo.addEventListener('click', function() {
    containerGridTwo.innerHTML = ""; 

    buttonLevelTwo.style.backgroundColor = '#a13747';
    outputDifficulty.innerHTML = `LIVELLO INTERMEDIO`;
    
    function createGrid(container) {
        const newBox = document.createElement('div');
        newBox.className = 'box-two';
        containerGridTwo.append(newBox);
    
        newBox.addEventListener('click', function() {
            this.classList.add('light-blue');
        })
    };

    for (let i = 0; i < 81; i++) {
        createGrid(containerGridTwo);
    };
});

//LIVELLO 3
buttonLevelThree.addEventListener('click', function() {
    containerGridThree.innerHTML = ""; 

    buttonLevelThree.style.backgroundColor = '#a13747';
    outputDifficulty.innerHTML = `LIVELLO DIFFICILE`;
    
    function createGrid(container) {
        const newBox = document.createElement('div');
        newBox.className = 'box-three';
        containerGridThree.append(newBox);
    
        newBox.addEventListener('click', function() {
            this.classList.add('light-blue');
        })
    };

    for (let i = 0; i < 49; i++) {
        createGrid(containerGridThree);
    };
});
