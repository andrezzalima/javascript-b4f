function combineArrays(array1, array2) {
    let arrayOrdenado = []

    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        if (array1[i] && array2[i]) {
            arrayOrdenado = [...arrayOrdenado, array1[i], array2[i]]
        } else if (array1[i] === undefined) {
            arrayOrdenado = [...arrayOrdenado, array2[i]]
        } else if (array2[i] === undefined) {
            arrayOrdenado = [...arrayOrdenado, array1[i]]
        }
    }

    return arrayOrdenado
    
}

console.log(combineArrays(['a', 'b', 'c'], [1, 2, 3, 4]))