/* Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a o valor absoluto da diferença entre a soma da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito) e a soma da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo). */


const matrizquadrada = [
    [5,10,3,7],
    [7,7,7,9],
    [3,5,2,9],
    [8,4,10,0]
]

function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função


    somatorioDiagonalPrincipal = 0
    somatorioDiagonalSecundaria = 0  
    let diferenca = 0  
    for(let i = 0; i < matrizquadrada.length; i++){    
    let linha = matrizquadrada[i]
    somatorioDiagonalPrincipal += matrizquadrada[i][i]
    somatorioDiagonalSecundaria += linha[linha.length - 1 - i]
         
    }
    diferenca = Math.abs(somatorioDiagonalPrincipal - somatorioDiagonalSecundaria)

return diferenca
 
   
}