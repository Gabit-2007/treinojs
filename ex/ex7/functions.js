import prompt from 'prompt-sync'
let ler = prompt();

export function apresenta(){
    console.log('---QUADRADO---');
}

export function pedirNumero(msg){
    console.log(msg);
    let num = Number(ler());
    return num;
}

export async function quadrado(numero) {
    console.log('\nContando estrelinhas...');
    await sleep(500);

    for(let i=1; i <= numero; i++){
        for(let con=1; con<= numero; con++){
            process.stdout.write(' * ')
        }
        console.log();
    }
}

function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }