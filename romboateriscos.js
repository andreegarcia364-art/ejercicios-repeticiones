 for (let i = 1; i <= n; i++) {
    let fila = "";
    for (let e = 1; e <= n - i; e++) {      // espacios a la izquierda
      fila += " ";
    }
    for (let a = 1; a <= 2 * i - 1; a++) {  // asteriscos
      fila += "*";
    }
    console.log(fila);
  }

  for (let i = n - 1; i >= 1; i--) {
    let fila = "";
    for (let e = 1; e <= n - i; e++) {
      fila += " ";
    }
    for (let a = 1; a <= 2 * i - 1; a++) {
      fila += "*";
    }
    console.log(fila);
  }
