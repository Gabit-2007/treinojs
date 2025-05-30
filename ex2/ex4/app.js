import * as funcoes from './fun.js';

let acaiP = funcoes.qtdP('\nInforme a quantidade de açaís P:');
let acaiM = funcoes.qtdP('\nInforme a quantidade de açaís M:');
let acaiG = funcoes.qtdP('\nInforme a quantidade de açaís G:');

let acais = {
    Pe: acaiP,
    Me: acaiM,
    Gr: acaiG
}

let total = funcoes.somaAcai(acais);

funcoes.resultado(total);