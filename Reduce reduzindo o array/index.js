//* Reduce -> reduz o array ate um unico elemento

//* Some todos os numeros (reduce)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     //* Se nao mandar nenhum valor inicial pro acumulador ele pega o primeiro elemento do array
//     acumulador += valor;
//     return acumulador;
// }, 0); //* Valor inicial do (acumulador)

// console.log(total);

//* Retorne um array com os pares (reduce || filter)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// console.log(total);

//* Retorne um array com o dobro dos valores (reduce || map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);

// console.log(total);

//* Retornando apenas os numeros pares somados
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor) {
//     if(valor % 2 === 0) {
//         acumulador += valor;
//     }

//     return acumulador;
// }, 0);

// console.log(total);

//* Retornando apenas os numeros impares somados
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor) {
//     if(valor % 2 !== 0) {
//         acumulador += valor;
//     }

//     return acumulador;
// }, 0);

// console.log(total);

//* Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador; //* Ira retornar o objeto
    return valor;
});

console.log(maisVelha);