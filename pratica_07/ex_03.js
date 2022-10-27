function n_primeiros_elementos(array, n = 1){
    return array.slice(0,n)
}

x = [1,2,3,4,5,6]

console.log(n_primeiros_elementos(x))
console.log(n_primeiros_elementos(x, 4))