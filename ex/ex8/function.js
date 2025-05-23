import prompt from 'prompt-sync';
let ler = prompt();

export function apresentarMenu() {
  console.log('-- MENU --');
  console.log('1. Somar');
  console.log('2. Subtrair');
  console.log('3. Multiplicar');
  console.log('4. Dividir');
  console.log('0. Sair');
  console.log();
}

export function pedirEscolha() {
  console.log('Escolha uma opção:');
  let escolha = Number(ler());
  return escolha;
}

export function pedirNumero(msg) {
  console.log(msg);
  let num = Number(ler());

  return num;
}

export function somar(n1, n2) {
  return n1 + n2;
}

export function subtrair(n1, n2) {
  return n1 - n2;
}

export function multiplicar(n1, n2) {
  return n1 * n2;
}

export function dividir(n1, n2) {
  if (n2 === 0) {
    return "Erro: Divisão por zero!";
  }
  return n1 / n2;
}

export function exibirResultado(n1, n2, resultado, operacao) {
  console.log(`Resultado da ${operacao}: ${resultado}`);
  console.log();
}