let nome = 'João';

console.log(nome, 'nasceu em 1984.');
console.log('Em 200', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

//* Posso fazer com que eu declare uma variavel sem valor concebido, mas para o motor do javascript ele tem o valor undefined
let semValor;
//* Posso colocar um valor
semValor = 'Algum valor';
//* Posso trocar o valor conforme vou construindo o programa
semValor = 'Outro valor';
console.log(semValor);
//! Não se pode redeclarar a mesma variavel
let semValor;
//! Não podemos criar variaveis com palavras reservadas
let let;
let console;
let if;
//? As variaveis precisam ter nomes significativos
let nomeCliente = 'Joao';
console.log(nomeCliente);
//! Não pode começar o nome de uma variavel com um numero
let 1nome;
//! Não podem conter espaços ou traços
let nome-Client;
//* Utilizamos camelCase
let nomeCompletoDoCliente = 'Ylan Vinicio';
console.log(nomeCompletoDoCliente);
//* Case-sensitive
let nomeFuncionario = 'Ylan'
let nomefuncionario = 'Vinicio'
console.log(nomeFuncionario, nomefuncionario);
//! Não podemos redeclarar variaveis com let
let nomePessoa = 'Ylan';
nomePessoa = 'Vinicio';
console.log(nomePessoa);
//! Não utilize VAR, utilize LET