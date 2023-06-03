/*
    Javascript é baseado em prototipos para passar propriedades e metodos de um objeto para outro

    Definição de prototipo -> Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

    Todos os objetos tem uma referencia interna para um prototipo (__proto__)
    que vem da propriedade prototype da função construtora que foi usada para
    cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
    do JS vai tentar encontrar este membro no proprioobjeto e depois a cadeia
    de prototipos e usada ate o topo (null) ate encontrar (ou nao) tal membro.
*/

//* Construtora -> Molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

//* Instancia
const pessoa1 = new Pessoa('Luiz', 'O.'); //* <- Pessoa = Função construtora 
const pessoa2 = new Pessoa('Maria', 'A.');
const data = new Date(); //* <- Pessoa = Função construtora 

console.dir(Pessoa1);
console.dir(data);

//* Onde o motor do JS vai buscar os membros -> pessoa1
//* Se nao encontrar ele vai para -> __proto__ ou (Pessoa.prototype)
//* Se nao encontrar ele vai para -> Object.prototype