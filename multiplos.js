 if (n > 6) {
    let multiplos = "";
    let numero = 6;             // 6 ya es múltiplo de 3
    while (numero <= n) {
      multiplos += numero + " ";
      numero += 3;              // saltamos de 3 en 3
    }
    console.log(multiplos);
  } else {
    console.log("n debe ser mayor que 6");
  }