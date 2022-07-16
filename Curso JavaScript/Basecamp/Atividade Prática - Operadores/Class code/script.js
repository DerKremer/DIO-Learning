function comparaNumeros(n1, n2) {
    if (!n1 || !n2) {
        return 'Defina dois números!'
    }

    const frase1 = criaPrimeiraFrase(n1, n2);
    const frase2 = criaSegundaFrase(n1, n2);

    return `${frase1} ${frase2}`
}

function criaPrimeiraFrase (n1, n2) {
    let saoIguais = '';

    if (n1!==n2) {
        saoIguais = 'não';
    }
    
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}

function criaSegundaFrase (n1, n2) {
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const comp10 = soma > 10;
    const comp20 = soma > 20;

    if (comp10) {
        resultado10 = 'maior';
    }

    if (comp20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(4,5));