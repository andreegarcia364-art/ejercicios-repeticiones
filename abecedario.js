for (let cantidad = total; cantidad >= 1; cantidad--) {
    let linea = "";
    for (let k = 0; k < cantidad; k++) {
      linea += abecedario[total - 1 - k];   // recorre de atrás hacia adelante
    }
    console.log(linea);
  }