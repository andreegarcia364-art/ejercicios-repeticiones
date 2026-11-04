 if (n > 6) {
    let multiplos = "";
    let numero = 6;              
    while (numero <= n) {
      multiplos += numero + " ";
      numero += 3;              
    }
    console.log(multiplos);
  } else {
    console.log("n debe ser mayor que 6");
  }
