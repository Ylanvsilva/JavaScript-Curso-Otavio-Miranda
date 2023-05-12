//* Function hosting -> A engine do js vai elevar as declarações de funções e variaveis definidas com a palavra (var) para o topo do js

//* Declaração de função -> a função normal em si
falaOi(); //* Posso executar tanto no começo
function falaOi () {
    console.log('Oi');
}
falaOi(); //* Como no fim

//* First-class objects -> Objetos de primeira classe
//* Function expression -> Criar uma variavel e jogar uma função nela
const souUmDado = function () {
    console.log('Sou um dado');
}
souUmDado();

//* Posso jogar era variavel como parametro de outra função e faazer com que essa outra função execute a minha função

function executaFuncao (funcao) {
    console.log('Vou executar sua função abaixo: ');
    funcao();
}
executaFuncao(souUmDado);

//* Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//* Dentro de um objeto

const obj = {
    falar: function () {
        console.log('Estou falando...');
    }
}
obj.falar(); //* Jogando uma função como metodo de um objeto