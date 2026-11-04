const m = 4;          
  const n = 10;       
  const caracter = "#";  

  for (let fila = 1; fila <= m; fila++) {
    let linea = "";
    for (let columna = 1; columna <= n; columna++) {
      linea += caracter;
    }
    console.log(linea);
  }