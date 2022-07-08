// var A = 1;
// var B = 5;
// var total = ((A+B) * (B/2));

// console.log(total);

var times = 7;
var round = 0;
var partidas=0;

while(times > 1){
    if((times % 2) === 0){
        partidas += times/2;
        times = times /2;
    }
    else{
        partidas += (times -1 ) / 2;
        times = ((times - 1) /2)+1;
    }


    round++;
}

console.log("Rounds: " , round);
console.log("Partidas: ", partidas);