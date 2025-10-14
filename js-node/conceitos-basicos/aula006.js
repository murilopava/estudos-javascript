// Ternário

// (expressão) ? (se verdadeiro) : (se falso)


/*
const numero = 6;

console.log(
    (numero % 2 == 0) 
    ? "Par" 
    : "Ímpar"
)
*/

const horas = 5;

console.log(
    "Esta de",
    horas >= 0 && horas < 6 ? "madrugada" 
    : horas >= 6 && horas < 12 ? "manhã"
    : horas >= 12 && horas <= 18 ? "tarde" 
    : "noite"
)