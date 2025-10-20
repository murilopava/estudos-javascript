// Adicionando elementos em um array
const numeros = [1,2,3];

// início
numeros.unshift(0);
console.log(numeros);

// meio 
numeros.splice(1,0,'a');
console.log(numeros);

// Final
numeros.push(5);
console.log(numeros);


// Encontrando elementos dentro de um array
const numeros1 = [1,2,3,1,4];

console.log(numeros.indexOf(2)); // 1 - achou, -1 - não achou 
console.log(numeros.includes(2)); // retorna true | (numeros.indexOf(2) !== -1)
console.log(numeros.lastIndexOf(1));

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}    // includes não funciona
]

const acharMarca = marcas.find(function(marca){
    return marca.nome === 'a';
})

console.log(acharMarca);

// Removendo elementos de um array

const numeros2 = [1,2,3,4,5,6,7];

// Início
console.log(numeros2.shift());
console.log(numeros2);

// Meio
console.log(numeros2.splice(2,1));
console.log(numeros2);

// Final
console.log(numeros2.pop());
console.log(numeros2);


// Esvaziando um array
let numeros3 = [1,2,3,4,5,6,7,8];
outro = numeros3;

// Solução 1
// apaga apenas o numeros3
// numeros3 = [];
// console.log(outro);

// Solução 2
// apaga todas as referências
numeros.length = 0;
console.log(numeros3);
console.log(outro);

// Solução 3
// apaga todas as referências
// numeros.splice(0,numeros.length)
// console.log(numeros3);
// console.log(outro);

// Solução 4
// while (numeros3 > 0) {
//     numeros.pop();
// }