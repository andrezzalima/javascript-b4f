/* Cria a função converteHacker que recebe uma string e retorna uma string, semelhante mas que subsitui alguns dos seus caráteres de modo a que se pareça linguagem Hacker.
a ou A -> 4
e ou E -> 3
i ou I -> 1
o ou O -> 0
s ou S -> 5 */

function converteHacker(string) {
    // Escreve aqui o teu código
    let stringHacker

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            stringHacker += 4
        } else if (string[i] === 'e' || string[i] === 'E') {
            stringHacker += 3
        } else if (string[i] === 'i' || string[i] === 'I') {
            stringHacker += 1
        } else if (string[i] === 'o' || string[i] === 'O') {
            stringHacker += 0
        } else if (string[i] === 's' || string[i] === 'S') {
            stringHacker += 5
        } else {
            stringHacker += string[i]
        }
    }
    return stringHacker
}t