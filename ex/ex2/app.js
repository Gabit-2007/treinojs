import * as funcoes from './function.js';

funcoes.apresentar();

let numeroFinal = funcoes.pedirNumero('Informe o número final')

await funcoes.contar(numeroFinal);