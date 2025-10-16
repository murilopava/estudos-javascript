function parImpar(numero) {
    for (numero; numero >= 0; numero--) {
        numero % 2 === 0 ? console.log(numero, "Par") : console.log(numero, "Ímpar");
    }
}

parImpar(11)