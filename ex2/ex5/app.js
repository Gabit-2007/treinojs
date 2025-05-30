import * as funcoes from './fun.js';

funcoes.apresentar();

let num1 = funcoes.pedirSalario('\nInforme o valor recebido mensalmente:');
let num2 = funcoes.pedirGastos('\nInforme o valor de seus gastos:');

let tudo = {
    sal: num1,
    gas: num2
}

let resul = funcoes.resultado(tudo);

console.log(resul);