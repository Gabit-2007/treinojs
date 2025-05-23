import prompt from 'prompt-sync'
let ler = prompt();

export function apresenta(){
    console.log('--- Contagem ---');
}

export function pedirNumero(msg){
    console.log(msg)
    let num = Number(ler());
    return num;
}

export async function contar(n1, n2) {
    if (n2 > n1) {
        console.log('Iniciando contagem...');

        for (let i = n1; i <= n2; i++) {
            console.log(i)
            await sleep(500);
        }
        console.log('Contagem finalizada!');
    }
    else if( n1 > n2) {
        console.log('Iniciando contagem...');

        for (let i = n1; i >= n2 ; i--) {
            console.log(i)
            await sleep(500);
        }
        console.log('Contagem finalizada!');
    }
    }


    function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }