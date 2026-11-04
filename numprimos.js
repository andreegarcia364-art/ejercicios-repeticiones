let primos = "";
  for (let num = 2; num <= 1000; num++) {
    let esPrimo = true;

    
    for (let d = 2; d * d <= num; d++) {
      if (num % d === 0) {
        esPrimo = false;
        break; 
      }
    }

    if (esPrimo) {
      primos += num + " ";
    }
  }
  console.log(primos);{


