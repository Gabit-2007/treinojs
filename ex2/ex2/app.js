import * as funcao from './funcao.js';
import prompt from 'prompt-sync';
let ler= prompt();

console.log('programa da soma');

console.log('informe um número');
let n1= Number(ler());

console.log('informe mais um número');
let n2= Number(ler());

let somar= {

    num1:n1,
    num2:n2
}

let soma= funcao.somar (somar);

console.log(' O resultado da sua soma é '+ soma);