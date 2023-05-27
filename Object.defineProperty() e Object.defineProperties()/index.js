//* defineProperty -> define uma propriedade
//* defineProperties -> define varias de uma vez

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        //* Estoque ser exibido (mostra a chave)
        enumerable: true,
        //* parametro estoque recebe valor
        value: estoque,
        //* Posso alterar o valor da propriedade estoque?
        writable: false,
        //* Posso configurar o valor da propriedade estoque?
        //* Apagar a chave?
        //* Editar a chave?
        //* Pode reconfigurar a chave?
        configurable: false
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
//* Variavel publica -> posso acessar ela fora do meu objeto
console.log(p1.nome);