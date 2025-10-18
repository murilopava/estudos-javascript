function Celular() {

    return {marca: 'asus',
    tela: {
        vertical:  10,
        horizontal: 4
    },
    ligar: function() {
        console.log("Ligando...");
    }
}
}

const celular1 = Celular();

const novoCelular = Object.assign({
    bateria: 4000
}, celular1);

const objeto2 = {...celular1};

console.log(novoCelular);
console.log(objeto2)

