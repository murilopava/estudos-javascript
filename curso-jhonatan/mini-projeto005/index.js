function parImpar(numero) {
    for (numero; numero >= 0; numero--) {
            if (numero % 2 == 0) {
                console.log(numero, "PAR");
            } else {
                console.log(numero, "ÍMPAR");
            }
    }
}

parImpar(11)