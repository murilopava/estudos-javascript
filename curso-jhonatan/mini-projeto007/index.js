function somar(num) {
    let soma = 0;
    for(let i = num; i > 0; i--) {
        if (i % 3 === 0) {
            soma += i;
        }
        if (i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}
console.log(somar(10))