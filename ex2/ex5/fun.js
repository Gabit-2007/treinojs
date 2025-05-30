import prompt from 'prompt-sync'
let ler = prompt();

export function apresentar(){
    console.log('ORÇAMENTO')
}

export function pedirSalario(msg){
    console.log(msg)
    let num= Number(ler());
    return num
}

export function pedirGastos(msg){
    console.log(msg)
    let num= Number(ler());
    return num
}

export function resultado(tudo){
    if(tudo.sal > tudo.gas){
        return 'Parabéns! Está dentro do orçamento!';
    }

    else if(tudo.sal < tudo.gas){
        return 'Atenção! Está fora do orçamento!';
    }
}