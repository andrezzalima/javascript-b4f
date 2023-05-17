function calculaDiaDoAno(dia, mes){
    // escreve aqui a função
    console.log(dia, mes)   
    let meses30 = [4, 6, 9, 11]

    if (dia < 1 || dia > 31){
        return "Por favor introduza um dia entre 1 e 31."
    }
    if (mes < 1 || mes > 12){
        return "Por favor introduza um mês entre 1 e 12."
    }
    if ((mes == meses30) && (dia < 1 || dia > 30)){
        return "Por favor introduza um dia entre 1 e 30."
    }
    if ((mes == 2) && (dia < 1 || dia > 28)){
        return "Por favor introduza um dia entre 1 e 28."
    }
 

    let diaDoAno = 0
    let meses = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (mes === 1){
        return dia
} 

    let somaDosMeses = 0
    for(let i = 0; i < mes; i++){
        somaDosMeses += meses[i]
    
    }

    diaDoAno = somaDosMeses + dia

    return diaDoAno 


} 