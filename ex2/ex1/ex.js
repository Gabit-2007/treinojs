import * as funcoes from './function.js';
import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa da média');

console.log('informe o primeiro número');
let n1= Number(ler());

console.log('informe o segundo número');
let n2= Number(ler());

console.log('informe o terceiro número');
let n3= Number(ler());

let NotasAlunos = {

    nota1: n1,
    nota2: n2,
    nota3: n3
}

let media = funcoes.calcularMedia(NotasAlunos);

console.log('A média é ' + media);