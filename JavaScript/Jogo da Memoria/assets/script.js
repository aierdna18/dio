const cards = document.querySelectorAll('.card');

let hasFlipCard = false;
let firstCard, secondCard;
let lockBoard = document.querySelectorAll('.card').disabled = true;
let playWin = 0
let minuts = 0;
let seconds = 0;
let miliseconds = 0;
let cron;

document.form_main.iniciar.onclick = () => start();
document.form_main.pausar.onclick = () => paused();
document.form_main.resetar.onclick = () => resetTimer();
document.getElementById('iniciar').style.backgroundColor ='#59be11';
document.form_main.pausar.disabled= true;
document.form_main.resetar.disabled = true;


function start(){
    lockBoard = false;
    document.form_main.pausar.disabled = false;
    document.form_main.resetar.disabled = false;
    document.form_main.iniciar.disabled = true;
    document.getElementById('iniciar').style.backgroundColor ='#ffffff';
    document.getElementById('pausar').style.backgroundColor ='red';
    document.getElementById('resetar').style.backgroundColor ='#292828';
    document.getElementById('resetar').style.color ='#ffffff';

    adicionaCliques();
    cron = setInterval(() => {
       timer(); 
    }, 10);
}

function paused(){
    clearInterval(cron);
    if(lockBoard){
        lockBoard = false;
        document.getElementById('pausar').style.backgroundColor ='red';
        cron = setInterval(() => {
            timer(); 
         }, 10);
    }else{
        lockBoard = true;
        document.getElementById('pausar').style.backgroundColor ='#59be11';
    }
}

function resetTimer(){
    document.form_main.pausar.disabled= true;
    document.form_main.resetar.disabled = true;
    document.form_main.iniciar.disabled = false;
    document.getElementById('iniciar').style.backgroundColor ='#59be11';
    document.getElementById('pausar').style.backgroundColor ='#ffffff';
    document.getElementById('resetar').style.backgroundColor ='#ffffff';
    document.getElementById('resetar').style.color ='gray';
    seconds = 00;
    minuts = 00;
    miliseconds = 00;
    playWin = 0;
    clearInterval(cron);
    document.getElementById('minuts').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('miliseconds').innerText = '00';
    unflipBoard();
    [hasFlipCard, lockBoard] = [false, true];
    [firstCard, secondCard] = [null, null];
    
}

function winGame(){
    clearInterval(cron);
    document.form_main.iniciar.disabled = true;
    document.form_main.pausar.disabled = true;
    document.getElementById('pausar').style.backgroundColor ='#ffffff';
    document.getElementById('resetar').style.backgroundColor ='#59be11';
    document.getElementById('resetar').style.color ='black';
    playWin = 0;
    shuffle();
}

function timer(){
    if((miliseconds += 10) === 1000){
        miliseconds = 0;
        seconds++;
    }
    if(seconds === 60){
        seconds = 0;
        minuts++;
    }
    if(minuts === 60){
        minuts=0;
    }
    document.getElementById('minuts').innerText = returnData(minuts);
    document.getElementById('seconds').innerText = returnData(seconds);
    document.getElementById('miliseconds').innerText = returnData(miliseconds);
}

function returnData(input){
    return input > 10 ? input : `0${input}`;
}

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFlipCard){
        hasFlipCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlipCard = false;
    checkForMatch();
    if(playWin == 6){
        winGame();
    }
}

//funçaõ que confere se as cartas sao iguais
function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return playWin++;
    }
    unflipCard();
}

//funcao que desatiav as cartas
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

//funcao que desvira as cartas
function unflipCard(){
    lockBoard = true;
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 999);
}

//adiciona o evento de clique nos cards
function adicionaCliques(){
    cards.forEach((card) => {
        card.addEventListener('click', flipCard);
    });
}

//desvirar o quadro
function unflipBoard(){
    cards.forEach((card) =>{
        card.classList.remove('flip');
    })
    shuffle();    
}
//funcao que reinicia o tabuleiro
function resetBoard(){
    [hasFlipCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//reordenar cartas
function shuffle(){
    cards.forEach((card) =>{
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
}





