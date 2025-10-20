function Endereco(rua, cidade, cep) {
    this.rua = rua
    this.cidade = cidade    
    this.cep = cep
}

function exibirEndereco(endereco) {
    console.log(`Você mora na rua ${endereco.rua}`);
    console.log(`Na cidade ${endereco.cidade}`);
    console.log(`Com cep ${endereco.cep}`);
    console.log(`No bairro ${endereco.bairro}`);
}

const meuEndereco = new Endereco('Carlos Eduardo', 'Piçarras', '88380000');
meuEndereco.bairro = 'centro';

const novoEndereco = Object.assign({
    Local: 'norte'
}, meuEndereco);

exibirEndereco(meuEndereco);