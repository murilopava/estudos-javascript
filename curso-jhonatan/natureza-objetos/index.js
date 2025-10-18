// Natureza dinâmica dos objetos

const mouse = {
    cor: 'vermelho',
    marca: 'razer'
}
mouse.velocidade = 5000;

mouse.trocarDPI = function (novaDPI) {
    mouse.velocidade = novaDPI;
    console.log('Mudando DPI')
}

console.log(mouse.velocidade);
mouse.trocarDPI(3000);
console.log(mouse.velocidade);

delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);