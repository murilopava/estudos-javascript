// Estrutura condicional if

// if (expressão) {}

const rl = require("node:readline");
const { backup } = require("node:sqlite");

const prompt = rl.createInterface({
    input:  process.stdin, output: process.stdout
})

let banco = 500;

prompt.question("Digite o valor da transferência: ", answer => {
    const valor = Number.parseInt(answer);
    if(Number.isNaN(valor)) {
        console.log("O que você digitou não é um número válido!");

    } else if (valor > banco) {
        console.log("Saldo insuficiente!");

    } else if (valor >= 0) {
        console.log("O valor deve ser um número positivo");

    } else {
        banco -= valor;

        console.log(`Você transferiu R$${valor}`);
        console.log(`Valor total do banco no momento é de R$${banco}`);
    }

    prompt.close();
})