//! Não podemos criar constantes com palavras reservadas
//* Constantes precisam ter nomes significativos
//! Não pode começar o nome de uma constante com um numero
//! Não pode conter espaços ou traços
//* Utilizamos camelCase
//* Case-sensitive
//! Não pode modificar o valor de uma constante
//! Não utilize VAR, utilize CONST


//* String = Text | Number = Numero
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

//* Para descobrir o tipo da variavel
console.log(typeof primeiroNumero);