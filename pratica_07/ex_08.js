function remove_duplicates (array){
    const newArray = array.map(
        element =>  
            element
            .toString()
            .toLowerCase()
        )
    return [... new Set(newArray)]
}

const x = ['Maria', 'maria', 'mAria', 'joao', 'Joao', 'pedro', 1,1,1,2,5,5,6]

console.log(x,'\n',remove_duplicates(x))