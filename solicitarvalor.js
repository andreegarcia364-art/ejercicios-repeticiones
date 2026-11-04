if (n >= 1) {
    for (let i = 1; i <= n; i++) {
      let fila = "";
      for (let e = 1; e <= n - i; e++) {
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
  } else {
    console.log("n debe ser 1 o mayor");
  }