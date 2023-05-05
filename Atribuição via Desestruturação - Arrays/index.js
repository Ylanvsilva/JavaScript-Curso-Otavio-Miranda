let a = 'A'; //* B
let b = 'B'; //* C
let c = 'C'; //* A

const letras = [b, c, a]; //* Atribuição -> atribuir valores as variaveis
[a, b, c] = letras;

//! Lado esquerdo - Desestruturação
[a, b, c] = [1, 2, 3]; //* Para cada indice desse array esta sendo atribuido um valor de alguma variavel

console.log(a, b, c);

//! -----------------

//* ... rest -> Pegar alguma coisa
//* ... spread -> Espalhar, distribuir alguma coisa

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; //* Assim pegaria o primeiro e segundo valor do array
//* A ultima expressão e criar uma variavel onde ela vai pegar o restante dos indeces e armazenar nelas

const [um, , tres, , cinco, , sete] = numeros; //* Faz com que pule os indices que foram deixados em vazio

console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);

//! Array dentro de array? ------------
//*                   0          1          2
//*                0  1  2    0  1  2    0  1  2
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

const [,[,,seis]] = numbers; //* Atribuição por desestruturação para pegar o numero 6

console.log(numeros[1][2]); //* Para pegar o numero 6 do array
console.log(seis);