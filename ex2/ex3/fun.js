import prompt from 'prompt-sync'
let ler = prompt();

export function apresentarPrograma(){
    console.log('PROGRAMA DO RETÂNGULO \n');
}

export function pedirNumero(msg){
    console.log(msg);
    let num = Number(ler());
    return num;
}

export function calcularArea(retangulo){
    return retangulo.l1 * retangulo.l2;
}
export function resultado(area) {
  console.log(`a area é: ` + area);
}