const calc = function(operacao, num1, num2) {
	return operacao(num1, num2);
}

const soma = function(num1, num2) {
	return num1+num2;
}

const sub = function(num1, num2) {
	return num1-num2;
}

console.log(calc(soma, 1, 2)); //3
console.log(calc(sub, 1, 2)); //-1