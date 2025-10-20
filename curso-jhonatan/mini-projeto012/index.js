function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('Carlos', 'Piçarras', '88380000');
const endereco2 = new Endereco('Carlos', 'Piçarras', '88380000');

function saoIguais(endereco1, endereco2) {
    for (chave in endereco1) {
        if (endereco1[chave] !== endereco2[chave]) {
            return false;
        }
    }
    return true;
} 

function enderecoMemoriaIgual(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log(saoIguais(endereco1, endereco2));
console.log(enderecoMemoriaIgual(endereco1, endereco2));