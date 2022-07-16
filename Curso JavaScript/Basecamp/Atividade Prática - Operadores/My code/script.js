function comparar() {

    alert('Vamos comparar dois números!');

    let n1 = Number(prompt('Insira o primeiro número para comparação:'));
    let n2 = Number(prompt('Insira o segundo número para comparação:'));

if (!n1 || !n2) {
    alert('Parâmetros inválidos!');
} else {
    let igual;
    let soma = n1+n2;
    let comp10;
    let comp20;

    (n1 == n2) ? igual = 'são' : igual = 'não são';
    (soma > 10) ? comp10 = 'maior que' : ((soma < 10) ? comp10 = 'menor que' : comp10 = 'igual a');
    (soma > 20) ? comp20 = 'maior que' : ((soma < 20) ? comp20 = 'menor que' : comp20 = 'igual a');

    alert(`Os números ${n1} e ${n2} ${igual} iguais. Sua soma é ${soma}, que é ${comp10} 10 e ${comp20} 20.`);


    let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não')

    if (opcao == 1) {
        comparar();
    } else if (opcao == 2) {
        alert('Até mais!');
    } else {
        alert('Opção inválida!');
        novaComp();
    }

}

}


comparar();