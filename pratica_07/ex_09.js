function soma_indice_individual(array1, array2){
    return array1.map((item,index)=>item+array2[index])
}

let x = [1,2,3,4];
let y = [8,7,6,5];

console.log(soma_indice_individual(x, y))