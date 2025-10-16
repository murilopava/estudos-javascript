// For loop

for (let i = 1; i <= 5; i++) {
    console.log('Estou aprendendo!');
    if (i % 2 === 0) {
        console.log(i);
    }
}

// While loop

let i = 1;

while (i <= 5) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Do..While

let a = 0;

do {
    console.log('digitando');
    a++;
} while (a < 10); 

// for-in

const pessoa = {
    nome: 'Murilo',
    idade: 18
};

for (let chave in pessoa) {
    console.log(chave,pessoa['idade']);
}

const cores = ['azul', 'amarelo', 'marrom', 'vermelho', 'branco'];

for (let indice in cores) {
    console.log(cores[indice])
}

// For-of

for (let cor of cores) {
    console.log(cor);
}
