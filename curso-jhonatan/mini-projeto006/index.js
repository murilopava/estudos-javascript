const filme = {
    filme: 'Madagascar',
    ano: 2015,
    diretor: 'Carlos',
    avaliacao: 'Positiva'
};

exibirPropriedades(filme);
function exibirPropriedades(objeto) {
    for (propriedade in objeto) {
        if (typeof(objeto[propriedade]) === typeof('string')) {
            console.log(propriedade, objeto[propriedade]);
        }
    }
}