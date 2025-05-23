import { exibirResposta, pedirNumero, apresentarPrograma, calcularMedia } from './app.js';

apresentarPrograma();

let n1 = pedirNumero('Informe um número:')
let n2 = pedirNumero('Informe outro número:')
let n3 = pedirNumero('informe mais um numero:')

let media = calcularMedia(n1, n2, n3);

exibirResposta(n1, n2, n3,media);