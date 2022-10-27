function most_frequent (array){
    let qtd_maior_frequencia = 0;
    let elemento_mais_frequente = 0;
    let aux = 0;
    for (let i =0; i< array.length;i++){
        aux = 0
        for (let j =0; j< array.length;j++){
            if (array[i] === array[j]) 
                aux++;
        }
        if (aux > qtd_maior_frequencia){
            qtd_maior_frequencia = aux;
            elemento_mais_frequente = array[i];
        }
    }
    return elemento_mais_frequente
}
const x = [1,1,7,7,7,7,1,5,1,4,1,7,1,1,1,1,17,7,7,7,7,7,7,7]
console.log(most_frequent(x))
