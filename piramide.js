for (let i = 1; i <= filas; i++) {
    let fila = "";

    
    for (let e = 1; e <= filas - i; e++) {
      fila += " ";
    }
    
    for (let j = 1; j <= i; j++) {
      fila += j;
    }
    
    for (let j = i - 1; j >= 1; j--) {
      fila += j;
    }

    console.log(fila);
  }
