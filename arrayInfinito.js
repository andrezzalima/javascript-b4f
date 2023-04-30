function arrayInfinito(array, esquerda, direita) {
    // Escreve aqui a função
    console.log(array)
    console.log(esquerda, direita)    

    if(array === undefined || array.length === 0){
        return 0
    }

    let hipotetico = []
    let soma = 0
    for(let i = 0; i <= direita; i++){
        hipotetico.push(...array)
        
    }

    let arrayCortado = hipotetico.slice(esquerda, direita + 1)
    for(let i = 0; i < arrayCortado.length; i++){
        soma += arrayCortado[i]
    }
    return soma
}


console.log(
arrayInfinito([9,3,1,47], 12, 33)
)