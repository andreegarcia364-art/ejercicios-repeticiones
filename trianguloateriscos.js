 const filas = 5;
  for (let i = 1; i <= filas; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {   // en la fila i van i asteriscos
      fila += "*";
    }
    console.log(fila);
  }