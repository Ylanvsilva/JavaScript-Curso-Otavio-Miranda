//* defineProperty -> define uma propriedade
//* defineProperties -> define varias de uma vez

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        //* Estoque ser exibido (mostra a chave)
        enumerable: true,
        //* parametro estoque recebe valor
        value: function() {
            return estoque;   
        },
        //* Posso alterar o valor da propriedade estoque?
        writable: false,
        //* Posso configurar o valor da propriedade estoque?
        //* Apagar a chave?
        //* Editar a chave?
        //* Pode reconfigurar a chave?
        configurable: false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false    
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
//* Deletar a chave estoque
delete p1.estoque;
//* Variavel publica -> posso acessar ela fora do meu objeto
console.log(p1.nome);
//* Estoque se tornando função
console.log(p1.estoque());
//* Mostrar as chave em array
console.log(Object.keys(p1));
//* Iterar sobre as chaves do objeto
for (let chave in p1) {
    console.log(chave);
}