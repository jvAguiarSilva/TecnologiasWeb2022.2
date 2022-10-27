function clona_array (array){
    return [...array]
}

x = [1,2,3,4,5,6]
clonado_x = clona_array(x)
x.pop()

console.log(x)
console.log(clonado_x)