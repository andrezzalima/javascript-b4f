//Cria uma função que filtra os elementos pares, mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatório dos elementos resultantes.

let array = [2, 2, 3, 8, 9, 10]

function filtraMapeiaEReduz(array) {
    return array.filter(elemento => elemento % 2 === 0).map(elemento => elemento ** 2).reduce((acc, elemento) => acc + elemento, 0)


}


console.log(filtraMapeiaEReduz(array))