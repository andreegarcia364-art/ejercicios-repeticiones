  let sumaFor = 0;
  for (let i = 1; i <= 100; i++) {
    sumaFor += i;
  }

  let sumaWhile = 0;
  let j = 1;
  while (j <= 100) {
    sumaWhile += j;
    j++;
  }

  let sumaDoWhile = 0;
  let k = 1;
  do {
    sumaDoWhile += k;
    k++;
  } while (k <= 100);

  console.log("for:", sumaFor);
  console.log("while:", sumaWhile);
  console.log("do-while:", sumaDoWhile);{
  }

