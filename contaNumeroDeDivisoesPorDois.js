// Cria uma função que recebe como argumento um número e retorna o número de vezes em que é possível fazer a divisão inteira desse número por 2.

function contaNumeroDeDivisoesPorDois(n) {
    // escreve aqui a função
    let count = 0;

    while (n > 1) {
        n = Math.floor(n / 2);
        count++;
    }
    return count;
}