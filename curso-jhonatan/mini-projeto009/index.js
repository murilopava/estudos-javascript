function contarLinhas(numLinhas) {
    for (let linha = 1; linha <= numLinhas; linha++) {
        let asteristico = '';
        for (let i = 0; i < linha; i++) {
            asteristico += '*';
        }
        console.log(asteristico);
    }
}

contarLinhas(4);