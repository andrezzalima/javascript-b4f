class Pessoa {
    // Escreve aqui o teu código
    constructor (nome, idade, sexo) {
        this.nome = nome
        this.idade = idade
        this. sexo = sexo
    }

    comparaIdade(pessoa){

        if ((this.idade === pessoa.idade) && (pessoa.sexo === ('f' || 'F'))){
            return `A ${pessoa.nome} é da mesma idade que eu.`
        } else if ((this.idade === pessoa.idade) && (pessoa.sexo === ('m' || 'M'))){
           return `O ${pessoa.nome} é da mesma idade que eu.`
        }



        if ((this.idade < pessoa.idade) && (pessoa.sexo === ('f' || 'F'))){
            return `A ${pessoa.nome} é mais velha do que eu.`
        } else if ((this.idade < pessoa.idade) && (pessoa.sexo === ('m' || 'M'))){
           return `O ${pessoa.nome} é mais velho do que eu.`
        }       



        if ((this.idade > pessoa.idade) && (pessoa.sexo === ('f' || 'F'))){
            return `A ${pessoa.nome} é mais nova do que eu.`
        } else if ((this.idade > pessoa.idade) && (pessoa.sexo === ('m' || 'M'))){
           return `O ${pessoa.nome} é mais novo do que eu.`
        }   
        
    }
}