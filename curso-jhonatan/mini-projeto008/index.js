
const notas = [80,90,70];

function mediaDoAluno(arrayNotas) {
    
    const media = calcularMedia(arrayNotas);
    console.log(media);
    
    if (media < 60) {
        return "F";
    }
    else if (media < 70) {
        return "D";
    }
    else if (media < 80) {
        return "C";
    }
    else if (media < 90) {
        return "A";
    }
    else {
        return "S";
    }
}

function calcularMedia(arrayNotas) {
    let somaNotas = 0;
    for (nota in arrayNotas) {
        somaNotas += arrayNotas[nota];
    };

    return somaNotas /= arrayNotas.length;
}

console.log(mediaDoAluno(notas));

