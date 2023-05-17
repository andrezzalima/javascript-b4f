function diaDoAno(data) {
  let diaDoAno = 0;
  let ano = data.getFullYear();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;

  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    let meses = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes === 1) {
      return dia;
    }

    let somaDosMeses = 0;
    for (let i = 0; i < mes; i++) {
      somaDosMeses += meses[i];
    }

    diaDoAno = somaDosMeses + dia;

    return diaDoAno;
  } else {
    let meses = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes === 1) {
      return dia;
    }

    let somaDosMeses = 0;
    for (let i = 0; i < mes; i++) {
      somaDosMeses += meses[i];
    }

    diaDoAno = somaDosMeses + dia;

    return diaDoAno;
  }
}



