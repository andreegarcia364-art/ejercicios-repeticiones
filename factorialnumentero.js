  let n = 5;

if (n < 0) {
    console.log("El factorial no existe para números negativos");
} else {
    let factorial = 1;

    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    console.log(n + "! = " + factorial);
}