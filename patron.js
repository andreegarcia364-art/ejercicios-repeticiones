for (let fila = 1; fila <= 2 * n - 1; fila++) {
    let nivel;
    if (fila <= n) {
      nivel = fila;           
    } else {
      nivel = 2 * n - fila;    
    }
    console.log(" ".repeat(n - nivel) + "*".repeat(2 * nivel - 1));
  }