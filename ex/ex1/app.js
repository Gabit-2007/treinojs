import prompt from 'prompt-sync'
let ler = prompt();

export function calcularMedia(num1, num2, num3) {
  let media = (num1 + num2 + num3)/3;
  
  return media;
}


export function apresentarPrograma() {
console.log('-- PROGRAMA DA MEDIA --');
}

export function pedirNumero(msg) {
  console.log(msg);
  let num = Number(ler());

  return num;
}

export function exibirResposta(n1, n2, n3, media) {
  console.log(`A média de ${n1} e ${n2} e ${n3} é ${media}`);
}