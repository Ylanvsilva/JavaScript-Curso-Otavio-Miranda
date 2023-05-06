//* Vetor - array de uma unica dimensão, apenas um array
const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let indice in frutas) { //* Lê os indices ou chaves do objeto
//     console.log(frutas[indice]);
// }

//* Objetos são coisas do mundo real que nos damos atributos e ações (metodos)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

const chave = 'nome';
console.log(pessoa[chave]);

console.log(pessoa.nome); //* Para acessar o valor dentro de nome (Luiz)
console.log(pessoa['nome']); //* A mesma coisa so que outra maneira

// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave]);
// }