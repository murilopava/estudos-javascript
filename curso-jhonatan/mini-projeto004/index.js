function medidorVelocidade(valor) {
    const velociadeMaxima = 70;
    const kmPorPonto = 5;

    if (valor <= velociadeMaxima) {
        return "ok";
    }
    else {
        const pontos = Math.floor((valor - velociadeMaxima) / kmPorPonto);

        if (pontos > 12) {
            console.log("Carteira Suspensa");
        } else {
            console.log("Pontos: ", pontos);
        }
    } 

}

console.log(medidorVelocidade(76))