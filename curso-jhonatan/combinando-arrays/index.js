const primeiro = [{id: 1}];
const segundo = [5,6,7,8];

// Combinar um array
const combinado = primeiro.concat(segundo);
console.log(combinado);

// Dividir um array
const cortado = combinado.slice(0,4);
console.log(cortado);

// Referência
primeiro[0].id = 10;

// Operador spread

const primeiro2 = [1,2,3];
const segundo2 = [4,5,6];

const combinado2 = [...primeiro2, 'a', ...segundo2, 'b'];
console.log(combinado2);

// Clonando o array
const clonado = [...combinado2];
console.log(clonado);


