let permissao;

switch (permissao) {
    case 'comum': 
        console.log('Usuario comum');
        break;

    case 'gerente':
        console.log('Usuario gerente');
        break;

    case 'diretor':
        console.log('Usuario diretor');
        break;

    default:
        console.log('Usuário não reconhecido');
}