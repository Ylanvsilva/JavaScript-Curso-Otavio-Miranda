//* Factory Functions -> funções que retornam objetos

function criaPessoa(nome, sobrenome, a, p) { 
    return {
        nome, 
        sobrenome,

        //? Getter
        //* Metodo que retorna o nome completo
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //? Setter
        set nomeCompleto(valor) {
            //* Para extrair o primeiro nome
            valor = valor.split(' '); //* A cada espaço esse valor sera devidido e retornara um array
            this.nome = valor.shift(); //* (shift) vai retornar o primeiro valor para a variavel (nome) e vai remover o valor do array
            this.sobrenome = valor.join(' '); //* Pegar o resto ('Oliveira', 'Silva') juntar numa string e separar por alguma coisa (' ')
        },

        //* Quando uma função esta dentro de um objeto, chama-se metodo
        fala: function(assunto = 'Falando sobre nada') {
            //* (nome) esta puxando do parametro dentro de (criaPessoa)
            //* (assunto) esta puxando o parametro da propria função
            return `${nome} esta ${assunto} e pesa ${this.peso}.`;
            //! Quem pediu para esse metodo (fala) ser executado?
            //! (p1), logo (this) seria o (p1)
        },
        altura: a,
        //* (this) para acessar peso
        peso: p,

        //? Getter -> bota o get atras apenas para obter o valor
        get imc() {
            //* Ele finge ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80); //* Colocando os valores dos parametros (nome, sobrenome)
p1.nomeCompleto = 'Luiz Otavio Miranda'; //* O nome valor que ira para (setter) apos colocar uma variavel no parametro com o nome (valor)
console.log(p1.imc());
console.log(p1.nomeCompleto);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42); //* Quando adicionado mais uma variavel e declarada logo abaixo
console.log(p2.fala('this esta assumindo o valor de p2'));
console.log(p2.imc());
console.log(p2.imc); //* usando o (get) faço com que ele se finga ser um atributo da minha classe
//* (this) sempre sera que chamar o objeto
//console.log(p1.fala('falando sobre JS')); //* Colocando os valores no parametro (assunto)