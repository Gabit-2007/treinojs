import prompt from "prompt-sync"
let ler = prompt();

export function apresentar(){
    console.log("--- CONTAGEM ---");
}

export function pedirNumero(msg){
    console.log(msg)
    let num = Number(ler());
    return num;
}

export async function contar(numeroFinal) {
    console.log('iniciando contagem...');

    for(let i= 1; i<= numeroFinal; i++){
        console.log(i);
    await sleep(500);
    }
    console.log('contagem finalizada');
}

 function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }