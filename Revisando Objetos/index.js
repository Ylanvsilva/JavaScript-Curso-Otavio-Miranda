//* Objeto literal

const pessoa = {
    nome: 'Luiz', //* (nome) é uma chave e (Luiz) o valor
    sobrenome: 'Otavio',
};

//* Anotação de ponto
console.log(pessoa.nome); //* Acessando a chave 
console.log(pessoa.sobrenome); //* Acessando a chave

//* Anotação de colchete
const chave = 'nome'; //* Acessando a chave dinamicamente
console.log(pessoa['nome']); //* Outra forma de acessar as chaves
console.log(pessoa['sobrenome']); //* Outra forma de acessar as chaves

//* Construtor de objeto -> Criando um novo objeto
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//* O mesmo objeto

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
};

//* Apagando pessoa nome do objeto

delete pessoa1.nome;

console.log(pessoa1, pessoa2);

//* Metodos são funções que estao dentro do objeto e executam ações
//* Quando for utilizado a palavra (this) ela vai apontar para o objeto (pessoa1)
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa.idade = 30;

pessoa1.falarNome = function() {
    return(`${this.nome} esta falando seu nome`);
}

//* Função que usa a idade para pegar a data de nascimento
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());
//pessoa1.falarNome(); //* Uma ação que esta dentro de um objeto que tem acesso as chaves do objeto

//* Ver todas as chaves na pessoa1
for (let chave in pessoa1) {
    console.log(chave); //* (chave)
    console.log(pessoa1[chave]); //* (valor) da chave
}

//* Factory function

function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

//const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto);

//* Constructor function

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(p1); //* Para travar o objeto
}

const p1 = new Pessoa('Luiz', 'Miranda');
//* p1 = (Endereçomemoria) -> 'valor'
//* p1.Endereçomemoria = {nome: 'Outra coisa'}
p1.nome = 'Outra coisa';
console.log(p1);

//* O que a palavra (new) faz?
//* {} -> ela cria um objeto vazio -> atrela a palavra (this) ao objeto -> e (return) esse (this)