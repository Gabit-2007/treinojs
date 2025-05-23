import * as funcoes from './function.js';

funcoes.apresentar();

let numero = funcoes.pedirNumero('Informe o número inicial');

await funcoes.contar(numero);