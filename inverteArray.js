function inverteArray(array){
    // escreve aqui a função
    if (array.length === 0){
        return []
    }

    return [array[array.length-1]].concat(inverteArray(array.slice(0, -1)))
}


console.log(inverteArray([1,2,3,4,5]));