import * as funcoes from './function.js';


let escolha;
funcoes.apresentarMenu();
escolha = funcoes.pedirEscolha();
  
while (escolha != 0) {
  
  let n1 = funcoes.pedirNumero('Informe o primeiro número:');
  let n2 = funcoes.pedirNumero('Informe o segundo número:');
  
  if (escolha == 1) {
    let resultado = funcoes.somar(n1, n2);
    funcoes.exibirResultado(n1, n2, resultado, "Soma");
  }
  else if (escolha == 2) {
    let resultado = funcoes.subtrair(n1, n2);
    funcoes.exibirResultado(n1, n2, resultado, "Subtração");
  }
  else if (escolha == 3) {
    let resultado = funcoes.multiplicar(n1, n2);
    funcoes.exibirResultado(n1, n2, resultado, "Multiplicação");
  }
  else if (escolha == 4) {
    let resultado = funcoes.dividir(n1, n2);
    
    if (resultado == "Erro: Divisão por zero!") {
      console.log(resultado);
    }
    else {
      funcoes.exibirResultado(n1, n2, resultado, "Divisão");
    }
  }
  else if (escolha > 4) {
    console.log("Opção inválida!");
  }

  
  funcoes.apresentarMenu();
  escolha = funcoes.pedirEscolha();
}


console.log("\nSaindo do programa...");