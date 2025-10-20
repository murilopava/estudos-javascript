let faixas = [
    {tooltip: 'De R$6000 ou mais', precoMax: 999999999999, precoMin: 6000},
    {tooltip: 'De R$3000 a R$6000', precoMax: 6000, precoMin: 3000},
    {tooltip: 'Até R$3000', precoMax: 3000, precoMin: 0}
];

function criarFaixaDePreco(tooltip, precoMax, precoMin) {
    return {
        tooltip,
        precoMax,
        precoMin 
    };
};

let faixas2 = [
    criarFaixaDePreco('De R$6000 ou mais', 9999999999, 6000),
    criarFaixaDePreco('De R$3000 a R$6000', 6000, 3000),
    criarFaixaDePreco('Até R$3000', 3000, 0)
];

function FaixaDePreco(tooltip, precoMax, precoMin) {
    this.tooltip = tooltip,
    this.precoMax = precoMax,
    this.precoMin = precoMin
}

let faixas3 = [
    new FaixaDePreco('a', 30, 0),
    new FaixaDePreco('b', 100, 30),
    new FaixaDePreco('c', 300, 100)
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3);