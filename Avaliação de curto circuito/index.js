/**
 * * && -> false && true -> false
 * * || -> true || false -> vai retornar "o valor verdadeiro"
 * ? FALSY -> Avaliam em falso quando necessario
 * ! false -> false literal
 * ? 0 
 * ? '' 
 * ? "" 
 * ? `` 
 * ? null 
 * ? undefined 
 * ? NaN
 * ? Qualquer coisa que seja diferente desses avalia em true no js
 */

//* && -> retorna o primeiro valor falso que encontrar
console.log('Luiz Otavio' && true && 'Maria'); //* O valor que mostraria seria 'Maria'
console.log('Luiz Otavio' && true && NaN); //* Retorna o valor da expressão NaN
console.log('luiz Otavio' && 0 && 'Maria'); //* Retorna o valor falso no caso (0)

//? || -> retorna o primeiro valor verdadeiro que encontrar
console.log(0 || false || null || 'Luiz Otavio' || false); //* O valor retornado sera 'Luiz Otavio'

const a = 0;
const b = null;
const c = 'false'; //* AQUI
const d = false;
const e = NaN;

console.log(a || b || c || d || e);