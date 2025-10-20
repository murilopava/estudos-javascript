function Endereco(rua, cidade, cep) {
    this.rua = rua
    this.cidade = cidade    
    this.cep = cep
}

function exibirEndereco(endereco) {
    for (chave in endereco) {
        console.log(chave, endereco[chave]);
    }
}

const meuEndereco = new Endereco('Carlos Eduardo', 'Piçarras', '88380000');
meuEndereco.bairro = 'centro';

const novoEndereco = Object.assign({
    Local: 'norte'
}, meuEndereco);

exibirEndereco(meuEndereco);