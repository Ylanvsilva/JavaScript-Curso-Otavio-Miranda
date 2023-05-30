//* defineProperty -> Getter e Setters

//* Getter -> para obter o valor
//* Setter -> para configurar o valor
function Produto(nome, preco, estoque) {
    this.name = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() { //* Pega e retorna o valor (getter)
            return estoquePrivado;
        },
        set: function(valor) { //* Alterando o valor de estoque (setter)
            if (typeof valor !== 'Number') {
                console.log('Bad Value');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    } 
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'dasdas'
console.log(p1.estoque);
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);