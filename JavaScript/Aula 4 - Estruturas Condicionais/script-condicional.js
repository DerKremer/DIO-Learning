var p1 = 0;
var p2 = 1;
var placar;


p1 != -1 && p2 != -1 ? console.log('Os jogadores são válidos.') : console.log('Os jogadores são inválidos.');


if (p1 > 0 && p2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = p1 > p2;
}

if (p2 > 0 && p1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = p1 < p2;
}

switch (placar) {
    case placar = p1 > p2:
        console.log('Jogador 1 ganhou!');
    break;
    case placar = p1 < p2:
        console.log('Jogador 2 ganhou!');
    break;
    default:
        console.log('Ninguém ganhou.');
}