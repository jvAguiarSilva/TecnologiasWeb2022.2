function verifica_se_array (entrada){
    return Array.isArray(entrada)
}

x = [1,2,3,4]
y = 3

console.log(y, verifica_se_array(y))
console.log(x, verifica_se_array(x))