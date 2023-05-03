function arraySemDuplicados(array){
    // escreve aqui a função
    return [...new Set(array)]
}

console.log(arraySemDuplicados(1, 2, 2, 3, 4, 4))