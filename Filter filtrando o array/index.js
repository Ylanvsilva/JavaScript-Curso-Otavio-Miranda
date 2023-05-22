//* Filter -> filtra o array -> sempre retorna um array, com a mesma quantidade de elementos ou menos
//! Map -> modifica o array
//? Reduce -> reduzir o array em um unico valor

//* Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//* Criando a função de callback
// function callbackFilter(valor) {
//     // if (valor > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return valor > 10; //* O valor vai retornar (verdadeiro ou falso)
// } 

//* Esse metodo (filter) vai receber uma (função) de (callback) e vai iterar sobre cada um dos elementos do array
//* Metodo filter precisa ser passado um valor boleano para ele (true, false)
//* True -> para que o novo elemento seja colocado no novo array
//* False -> para nao ser colocado no novo array
//const numerosFiltrados = numeros.filter(valor => valor > 10); //* Filter vai executar a função que esta dentro dos parenteses
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});
console.log(numerosFiltrados);


//* Retorne as pessoas que tem o nome com 5 letras ou mais
//* Retorne as pessoas com mais de 50 anos
//* Retorne as pessoas cujo nome termina com (a)
const pessoas = [
    //* Indices, dentro de um objeto
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); //* (endsWith) -> termina com
console.log(pessoasComNomeGrande);