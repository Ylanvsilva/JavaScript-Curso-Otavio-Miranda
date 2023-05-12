//* Argumentos que sustenta todos os argumentos enviados

function funcao (a, b, c) { //* a, b, c sustentam os valores 1, 2, 3
    //console.log(arguments); //* A variavel (arguments) sustenta todas os valores que enviei dos argumentos
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c); //* A soma dos argumentos entre 1 e 7
}

//* O js nao se incomoda com eles ou com que eu fiz com ele, porem joga eles para uma variavel por nome de (arguments)
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //* Com isso estou enviando um argumento para suprir o valor de um parametro

//! -------------
function funcao (a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); //* Argumentos sao os valores que sao enviados para os parametros

//! -------------
function funcao (a, b) {
    b = b || 0; //* Com isso evitaria o erro, pois o b teria algum valor padrao
    console.log(a + b);
}
funcao(2); //* Com apenas um parametro recebendo um argumento ocorreria um erro

//! ------------- Forma mais atualizada de se resolver o problema da falta de parametro
function funcao (a, b = 2, c = 4) { //* Com isso b vai possuir um valor padrao caso nao seja enviando um argumento para ele
    console.log(a + b, c)
}
funcao(2, undefined, 20); //* Com o valor (undefined) ele ira assumir o valor do parametro

//! ------------- Atribuição via desestruturação
function funcao ({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao({ nome: 'Luiz', sobrenome: 'Otavio', idade: 30 });

//! ------------- Desestruturação de array
function funcao ({ valor1, valor2, valor3 }) {
    console.log(valor1, valor2, valor3);
}
funcao(['Luiz Otavio', 'Miranda', 30]);

//! ------------- Função que realiza algo
function conta(operador, acumulador, ...numeros) { //* Com os (...) pego os restante dos argumentos que nao foram usados
    //* Operador -> +, -, *, /
    //* Acumulador -> Começa com um valor inicial (total)
    //* Numeros -> Valores
    //console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

//! -------------- Function expression
const conta = (operador, acumulador, ...numeros) => { //* Com os (...) pego os restante dos argumentos que nao foram usados
    console.log(operador, acumulador, numeros);
};
conta('+', 0, 20, 30, 40, 50);