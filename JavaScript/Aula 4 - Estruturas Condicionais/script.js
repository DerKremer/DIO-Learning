let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// //for executa uma condição até que ela seja falsa
// for (let index = 0; index < array.length; index++) {
// console.log(index);
// }

// //for/in repete a partir de propriedade
// for (let i in array) {
//     console.log(i);
// }

// //com object
// for (i in object) {
//     console.log(i);
// }

// // for/of repete a partir de valor
// for(i of array) {
//     console.log(i);
// }

// // for / of não funciona com objetos, pois as propriedades variam, diferente de um índice em array que sempre são números inteiros
// for (i of object.propriedade1) {
//     console.log(i);
// }

// while executa enquanto condição for verdadeira - não declara variável dentro da condição;

var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

var a = 0;
do {
    a++;
    console.log(a);
} while (a < 10);