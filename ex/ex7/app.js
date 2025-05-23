import * as funcoes from './functions.js';

funcoes.apresenta();
let numero = funcoes.pedirNumero('Informe o tamanho dos lados do quadrado: ');

await funcoes.quadrado(numero);