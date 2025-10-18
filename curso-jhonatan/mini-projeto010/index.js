function verificarPrimos (numero) {
    for (let i = 1; i <= numero; i++) {
        if (!verificarNumero(i)) {
            console.log(i);
        }
    }
}

function verificarNumero(indice) {
    for (let num = 2; num < indice; num++) {
        if (indice % num === 0) {
            return true;
        }
    }
}

verificarPrimos(15);
