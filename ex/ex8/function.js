import prompt from 'prompt-sync'
let ler = prompt();

export function apresenta(){
    console.log('---Calculadora');
}

export function pedirNumero(msg){
    console.log(msg);
    let num = Number(ler());
    return num;
}

export function calcular(numero){

let operacao = -1;


while (operacao != 0) {
    console.log('\nInforme qual é a operação:');
    console.log('1 soma');
    console.log('2 subtração');
    console.log('3 multiplicação');
    console.log('4 divisão');
    console.log('0 sair');


    operacao = Number(ler());


    if (operacao == 0) {
        break;
    }


    console.log("\nInforme o primeiro número:");
    let numero1 = Number(ler());


    console.log("Informe o segundo número:");
    let numero2 = Number(ler());


    let conta = 0;


    if (operacao == 1) {
        conta = numero1 + numero2;
        console.log(`O resultado é ${conta}`);
    } else if (operacao == 2) {
        conta = numero1 - numero2;
        console.log(`O resultado é ${conta}`);
    } else if (operacao == 3) {
        conta = numero1 * numero2;
        console.log(`O resultado é ${conta}`);
    } else if (operacao == 4) {
        if (numero2 === 0) {
            console.log("Não é possível dividir por zero!");
        } else {
            conta = numero1 / numero2;
            console.log(`O resultado é ${conta}`);
        }
}
}
}