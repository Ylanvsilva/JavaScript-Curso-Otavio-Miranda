//* Função construtura -> Faz muita coisa automaticamente, cria o objeto, retorna o objeto
//* Construtora -> Pessoa (new) -> são um molde para gerar novos objetos

//* Começa com a primeira letra maiuscula (Pessoa)
function Pessoa (nome, sobrenome) { //* O corpo da função ja vai ser o objeto que vai ser criado
    //* Considerados atributos privados
    const ID = 123456;
    const metodoInterno = function () { //* Esse metodo nao vai estar disponivel fora do objeto

    }
    
    //* Nao precisa do uso de (,)

    //* Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    //* Nao precisa de (return) pois ele ja faz isso

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo');
    };
}

//* A palavra (new) -> cria um novo objeto vazio faz o (this) apontar para o objeto (p1) e retorna para a mesma variavel (p1)

const p1 = new Pessoa ('Luiz', 'Otavio'); //* Criando uma pessoa
const p2 = new Pessoa ('Maria', 'Oliveira');
p1.metodo();