//* Função -> Executa ação

//! As funções normalmente possuem nomes, como descrito (saudacao)
function saudacao (nome) { //* Parametro -> Semelhante a variavel
    console.log(`Bom dia ${nome}`);
    return `Bom dia ${nome}`; //* Variaveis precisam de um valor de retorno para serem mostradas
};

//! Os parenteses diz oq eu quero mandar, valor ou argumento para o parametro
saudacao('Ylan'); //* Para chamar a função e ser executada

const variavel = saudacao('Luiz'); //? Para este caso, o console mostrara o valor undefined, pois precisa que dentro da função exista um retorno de algo
console.log(variavel);

//!---------------------

function soma (x = 1, y = 1) {
    const resultado = x + y;
    return resultado; //* A partir do momento que a palavra return e encontrada, ele encerra a função, nao le mais nada abaixo de return
};

//* Toda vez que nao for enviado um parametro, o x recebe o valor de 1 assim como o y
console.log(soma(2, 2));

//* Mesmo tendo uma variavel por nome de resultado dentro da funcao soma, ela possui o escopo local e nao podera ser reutilizada fora da função
//* Crio uma variavel pelo mesmo nome (Isso pode ocorrer pois esta fora do escopo), e dou o valor atribuido pelos parametros para a funçao
//* Fazendo com que minha variavel resultado possua os mesmos valores que teria os de dentro da função
const resultado = soma(4, 2);
console.log(resultado);

//! Função anonima --------------------
//* Colocar uma função dentro de uma variavel
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

//! Arrow Function -------------------------------
//* Simplifica funçoes de codigo curto
const quadrada = n => n ** 0.5;

console.log(quadrada(9));