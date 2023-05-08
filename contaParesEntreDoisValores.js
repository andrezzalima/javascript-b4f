/* Cria uma função que recebe como argumentos dois valores e conta o número de pares que existem entre esses dois valores, incluindo os próprios se forem pares.

Caso sejam introduzidos dois valores iguais deve retornar a mensagem de erro: "Por favor introduza dois valores diferentes." */

function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função
    let menor = Math.min(valor1,valor2)
    let maior = Math.max(valor1,valor2)
    console.log(menor,maior)
    let somarPares = 0
    for(let i = menor; i <= maior; i++){
        elementoAtual = i
        console.log(i)
        if (somarPares !== elementoAtual && (i % 2 === 0)){
            somarPares++
        }

        
    }
}