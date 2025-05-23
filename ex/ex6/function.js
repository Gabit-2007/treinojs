import prompt from 'prompt-sync'
let ler = prompt();

export function apresenta(){
    console.log('---Tabuada---');
}

export function pedirNumero(msg){
    console.log(msg);
    let num = Number(ler());
    return num;
}

export async function tabuada(numero){
    console.log('\nCalculando...');

    for (let i = 10; i >= 0; i--) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    await sleep(500)
}
console.log('Tabuada calculada');
}

function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }