function subPares(array) {

    if (!array || array.length == 0){
        return -1;
    } else {

        for (i=0 ; i < array.length ; i++) {
            if (array[i] == 0) {
                console.log('Já é zero!')
            }
            else if (array[i] % 2 == 0){
                console.log(`Substituindo ${array[i]} por zero!`);
                array[i] = 0;
            } else {
                console.log('Permanece igual.');
            }
        }

        return array;
    }   
}

let arr = [2,4,3,0,0,0,5,7,10,16,19,17];

console.log(subPares(arr));