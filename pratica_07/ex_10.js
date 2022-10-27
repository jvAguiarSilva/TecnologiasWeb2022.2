function adiciona_final(array1, array2) {
    return array2.map((item)=>array1.push(item))
}


const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

vetorAdiciona.forEach((item)=>vetorPilha.push(item))

console.log(vetorPilha)


