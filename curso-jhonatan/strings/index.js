// Tipo primitivo
const mensagem = ' minha mensagem ';

// Tipo objeto
const outraMensagem = new String ('outra mensagem');
console.log(typeof(mensagem));
console.log(typeof(outraMensagem));

outraMensagem.length;

console.log(outraMensagem[3]);
console.log(mensagem.includes('minha'));
console.log(mensagem.startsWith('mensagem'));
console.log(mensagem.endsWith('mensagem'));
console.log(mensagem.indexOf('mensagem'));
console.log(mensagem.replace('mensagem', 'outra mensagem'));
console.log(mensagem.trim());
console.log(mensagem.split(' '));

