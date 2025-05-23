import * as funcoes from './function.js'

funcoes.apresenta()

let n1 = funcoes.pedirNumero('Informe o numero de inicio:');
let n2 = funcoes.pedirNumero('Informe o numero de fim:');

await funcoes.contar(n1,n2);