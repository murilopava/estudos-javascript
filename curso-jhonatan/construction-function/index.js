// Factory Function
// camel case - camelCase

function criarCelular (marca, tamanhoTela, capacidadeBateria) {
    return {
        marca,
        tamanhoTela,
        capacidadeBateria,
        ligar () {
            console.log("Fazendo ligação");
        }
    }
}

let celular1 = criarCelular ("ASUS", 10.2, 6000);
console.log(celular1.marca);


// Contruction Function
// Pascal case - UmDoisTresQuatro

function Celular(marca, tela, bateria) {
    this.marcaCelular = marca,
    this.tamanhoTela = tela,
    this.capacidadeBateria = bateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    }
}

const celular = new Celular("Samsung", 8.3, 7000);
console.log(celular.tamanhoTela);
