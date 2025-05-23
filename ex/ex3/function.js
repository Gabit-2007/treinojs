import prompt from 'prompt-sync'
let ler = prompt();

export function apresentar(){
    console.log('---CONATEGM REGRESSIVA---');
}

export function pedirNumero(msg){
    console.log(msg);
    let num = Number(ler());
    return num;
}

export async function contar(numero){

    console.log('iniciando contagem...');

    for (let i = numero; i >= 0; i--){
        console.log(i)
         await sleep(500);
    }
     console.log('contagem finalizada');
}

function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }