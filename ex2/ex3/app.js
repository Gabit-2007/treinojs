import * as funcoes from './fun.js';

let lado1 = funcoes.pedirNumero('informe o tamanho de um lado do retângulo');
let lado2 = funcoes.pedirNumero('\ninforme o tamanho do outro lado do retângulo');

let retangulo = {
    l1: lado1,
    l2: lado2
}

let area = funcoes.calcularArea(retangulo);

funcoes.resultado(area);