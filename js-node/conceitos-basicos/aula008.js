// Switch cases

const rl = require("node:readline");

const prompt = rl.createInterface({ 
    input: process.stdin, output: process.stdout
});

console.log("Bem-vindo ao programa");
console.log("[1] Data atual");
console.log("[2] Horário atual");
console.log("[3] Ver animais");
console.log("[4] Ver comidas");
console.log("[5] Ver linguagens");
console.log("[0] Sair do programa");

prompt.question("> Selecione o que deseja fazer ", answer => {
    switch(answer) {
        case "1": {
            const data = new Date();
            const dia = data.getDate();
            const mes = data.getMonth() + 1;
            const ano = data.getFullYear();
            console.log(`Hoje é ${dia}/${mes}/${ano}`)
            break;
        }
        case "2": {
            const tempo = new Date();
            const seg = tempo.getSeconds();
            const min = tempo.getMinutes();
            const hora = tempo.getHours();
            console.log(`Hora atual: ${seg}:${min}:${hora}`)
            break;
        }
        case "3": {
            console.log("Vaca");
            console.log("Pato");
            console.log("Cachorro");
            break;
        }
        case "4": {
            console.log("Pizza");
            console.log("Bolo");
            console.log("Lasanha");
            break;
        }
        case "5": {
            console.log("Python");
            console.log("C++");
            console.log("Go");
            break;
        }
        default: {
            console.log("Obrigado")
            break;
        }
    }
    prompt.close();
})