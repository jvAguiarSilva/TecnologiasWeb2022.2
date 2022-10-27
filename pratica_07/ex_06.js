
function pares (x, y){
     return (x % 2 == 0 && y % 2 == 0) 
}
const x = '025468';
function insere_tracos_pares (numero){
    array = Array.from(String(numero),Number);
    let y = []
    let atu = 0, prox = 0;
    const fim = array.length

    for (let i=0; i < fim; i++){
        atu = array[i];
        prox = array[i+1];
        y.push(atu)
        if (pares(atu,prox)) {
            y.push('-')
        }     
    }
    return y.join('')
}

console.log( insere_tracos_pares(x))