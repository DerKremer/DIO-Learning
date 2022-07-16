// //tipos primitivos

// //boolean
// var vOUf = false;
// console.log(typeof(vOUf));

// //number
// var numeroQualquer = 3;
// // console.log(typeof(numeroQualquer));

// // //string
// // var nome = "Guilherme";
// // console.log(nome, typeof(nome));

// // //function
// // var funcao = function() {}

// //array
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];


// // foreach
// // array.forEach(function(item, index){console.log(item, index)});

// // array.push(1);
// // console.log(array);

// // array.pop();
// // console.log(array);

// // console.log(array.indexOf(true));


// // array.splice(0,3);
// // console.log(array);

// let novoArray = array.slice(0, 3);
// console.log(novoArray);


let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objectInterno : 'objeto interno'}};
console.log(object.number);


var { string, number, boolean, objectInterno } = object;

console.log(string, number, boolean, objectInterno);

