var currentNumber = document.getElementById('currentNumber');
var botaoIncrementar = document.getElementById('adicionar');
var botaoDecrementar = document.getElementById('subtrair');
var botaoClean = document.getElementById('zerar');
var count = 0;

botaoIncrementar.addEventListener("click",increment);
botaoDecrementar.addEventListener("click",decrement);
botaoClean.addEventListener("click",clean);

function increment (){
    count = count + 1;
    currentNumber.innerHTML = count;
    changeColor();
    limite();
 
}

function decrement (){
    count = count - 1;
    currentNumber.innerHTML = count;
    changeColor();
    limite();
}

function limite(){
    if(count <= -10){
        botaoDecrementar.disabled = true;
    }
    else if(count >= 10){
        botaoIncrementar.disabled = true;
    } 
    else{
        botaoDecrementar.disabled = false;
        botaoIncrementar.disabled = false;
    }
}

function changeColor(){
    if(currentNumber.innerHTML < 0){
        currentNumber.style.color = "red";
    }else{currentNumber.style.color = "blue";}
    

    
}

function clean(){
    currentNumber.innerHTML = 0;
    count = 0;
    currentNumber.style.color ="blue";
    botaoDecrementar.disabled = false;
    botaoIncrementar.disabled = false;
}