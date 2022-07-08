//declaracao de um array
var array = ['string', 1, false, 1.3, ['array1'], ['array2']];

//forEach --- itera um array
// array.forEach(function(item, index){console.log(item, index)});

// //add um item no final do array
 //array.push('novoitem');

// //remove um item do final
//array.pop();

// //remove um item do inicio
// array.shift();

//add um item no inicio
//array.unshift('novo item no inicio');

//mostrar o indice de tal campo do array
//console.log(array.indexOf(false));

//remove ou susbitui um indice, entre parenteses os indices de devem ser alterados
//array.splice(0,3);

//retona uma parte de um array existente
//var novoArray = array.slice(2,5);
//console.log(novoArray);


//Objetos
let object = {prop1:'valor1', prop2:2, prop3:2.5}
// if ternario?

var ol1 = -1;
var b = 0;
var placar;

console.log(array);
//estruturas condicionais

// if (ol1 != -1 && b != -1 ){ console.log('os jogos vao validos!');}
// console.log("invalido");

// switch(placar){
//     case placar = ol1 > b:
//         console.log('caso 1');
//         break;
//     case placar = ol1 < b:
//         console.log('caso 2');
//         break;
//     default:(console.log('nenhum caso'));

// }


// for(let ind = 0; ind < array.length; ind++){
//     console.log(array[ind]);
// }

//for/in executa repeticao a partir de uma propriedade
// for(let i in array){
//     console.log(array[i]);
// }

//com object
// for(i in object){
//      console.log(i);
//  }

//for/of a partir de um valor
//  for(i of array){
//      console.log(i);
//  }

//while
// while(b < 10){
//     console.log(b++);
// }
// console.log('final', b);

// //do while
// do{
//     b++;
//     console.log(b);
// }while(b < 10){console.log(b);}