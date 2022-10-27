function n_ultimos_elementos(array, n = 1){
    return array.slice(-n)
}

x = [1,2,3,4,5,6]

console.log(n_ultimos_elementos(x))
console.log(n_ultimos_elementos(x, 3))
