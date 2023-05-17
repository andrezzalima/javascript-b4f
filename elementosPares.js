//Cria uma função que retorna true se todos os elementos do array forem pares.

function elementosPares(array){
    return array.every(elemento => elemento % 2 === 0)
}


console.log(elementosPares([2, 2, 8, 10]))
console.log(elementosPares([2, 3, 8, 10]))