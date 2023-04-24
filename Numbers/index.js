//! IEEE 754-2008 -> Padrão que o javascript segue para mostrar a precisao dos numeros

let num1 = 1; //* Number
let num2 = 2.5; //* Number

console.log(num1.toString() + num2); //* toString -> Pegando o numero e transformando para string
num1 = num1.toString(); //* Faz com que a variavel se torne uma string
console.log(num1.toString(2)); //* Mostra a versão binaria da variavel
console.log(num1.toFixed(2)); //* Colocar casas decimais
console.log(Number.isInteger(num1)); //* Vai fazer com que retorne verdadeiro ou falso, dizendo se o numero e inteiro ou nao

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); //* Esse numero e uma conta invalida?, e um NaN?
