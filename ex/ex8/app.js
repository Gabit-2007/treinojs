import * as funcoes from './function.js';

funcoes.apresenta();
let numero = funcoes.pedirNumero('Informe a operação:');

await funcoes.calcular(numero);