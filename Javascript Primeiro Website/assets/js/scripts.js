var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
const MENOS = document.getElementById("minus");
const MAIS = document.getElementById("plus");

MENOS.addEventListener("click", decrement);
MAIS.addEventListener("click", increment);

function increment() {
    if (0 <= currentNumber && currentNumber <= 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        document.getElementById("aviso").innerHTML = "Apenas entre 0 e 10!";
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
}

function decrement(){
    if (0 <= currentNumber && currentNumber <= 10) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        document.getElementById("aviso").innerHTML = "Apenas entre 0 e 10!";
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}