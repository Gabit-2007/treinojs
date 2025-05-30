import prompt from 'prompt-sync'
let ler = prompt();

export function apresentar(){
    console.log('PEDIDO DE AÇAÍ');
}

export function qtdP(msg){
    console.log(msg)
    let num = Number(ler());
    return num;
}

export function qtdM(msg){
    console.log(msg)
    let num = Number(ler());
    return num;
}

export function qtdG(msg){
    console.log(msg)
    let num = Number(ler());
    return num;
}

export function somaAcai(acais){
    return acais.Pe * 13.5 + acais.Me * 15 + acais.Gr * 17.5;
}

export function resultado(total){
    console.log('\nO valor total do pedido é R$' + total);
}