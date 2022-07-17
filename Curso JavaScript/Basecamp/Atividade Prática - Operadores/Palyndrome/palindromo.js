//solução 1
function checkPalyndrome(string) {
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

// console.log(checkPalyndrome('hannah'));


//solução 2
function checkPalyndrome2(string) {
    if(!string) return "String inexistente";

    var newstring = [];

    for(i = 0 ; i < string.length / 2 ; i++) {

        if (string[i] !== string[string.length -1 -i]) {
            return false
        }
    }

    return true;
}

// console.log(checkPalyndrome2('hannah'));

//solução 3 - própria
function checkPalyndrome3(string) {
    if(!string) return "String inexistente";

    var newstring = [];

    for(i = 0 ; i < string.length ; i++) {
        newstring.unshift(string[i]);
    }

    newstring = newstring.join('');
    // console.log(newstring);
    
    return newstring === string;
}

// console.log(checkPalyndrome3('hannah'));

//solução 4 - própria
function isPalyndrome(palavra) {

    let splPalavra = palavra.split("");
    let revPalavra = splPalavra.reverse();
    let joinPalavra = revPalavra.join("");

    if (joinPalavra == palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalyndrome('hannah'));