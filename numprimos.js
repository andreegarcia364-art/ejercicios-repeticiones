let primos = "";
  for (let num = 2; num <= 1000; num++) {
    let esPrimo = true;

    // basta probar divisores hasta la raíz cuadrada de num (d * d <= num)
    for (let d = 2; d * d <= num; d++) {
      if (num % d === 0) {
        esPrimo = false;
        break; // ya no es primo, no hace falta seguir probando
      }
    }

    if (esPrimo) {
      primos += num + " ";
    }
  }
  console.log(primos);{
}

