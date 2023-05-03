//Cria uma função que recebe uma data e um número de semanas como argumentos e retorna uma nova data resultante da soma.

function adicionaSemanas(data, semanas) {
    // escreve aqui a função
    let data1 = data.getTime()
    let data2 = semanas*7*24*60*60*1000
    let soma = data1+data2
    return new Date(soma)
}