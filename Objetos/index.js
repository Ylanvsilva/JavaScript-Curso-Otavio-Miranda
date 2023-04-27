//? [] -> Arrays
//* {} -> Objetos

const pessoa1 = {
    nome: 'Luiz', //* Os atributos sao muito semelhante como as variaveis
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome); //* Ocorrera a exibição do atributo dentro do objeto selecionado
console.log(pessoa1.sobrenome); //* Ocorrera a exibição do atributo dentro do objeto selecionado

//! Criando uma função para criar objetos -----------------

function criaPessoa (nome, sobrenome, idade) { //* Parametro
    return {nome, sobrenome, idade}
}

//* Argumento e o valor que e passado para o parametro
const pessoa = criaPessoa('Luiz', 'Otavio', 25); //* Argumento que vai ser passado para o parametro
console.log(pessoa.nome);

//! Criando um objeto, criando uma variavel ---------------

//? THIS -> Posso referenciar esse objeto (pessoa2) e qualquer atributo desse objeto dentro do metodo (fala())
const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();