// Operadores Aritiméticos(matemáticos)
// Operadores Atribuição
// Operadores Aritméticos

let salario = 100;

// +, -, *, /, **

// ++ --

console.log(--salario);
console.log(salario++);
console.log(salario);

salario += salario;

console.log((1 === 1));
console.log((1 === '1')); // false
console.log((1 == '1')); // true

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

console.log(true && true);
console.log(true || false);

let corPersonalizada = '';
let corPadrao = 'verde';

let cor = corPersonalizada || corPadrao;

console.log(cor);