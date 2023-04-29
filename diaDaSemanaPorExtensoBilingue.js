function diaDaSemanaPorExtensoBilingue(data, lingua){
    // escreve aqui a função
    let portugues = ['domingo','segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    let ingles = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    let diaSemana = data.getDay()

    if (lingua == 'pt'){
           return portugues[diaSemana]

    } else if (lingua == 'en') {
            return ingles[diaSemana]
    } 

}