/**
 * * Aritmeticos
 * * + -> Adiçao / Concatenação
 * * - -> Subtração
 * * / -> Divisão
 * * * -> Multiplicação
 * * ** -> Potenciação
 * * % -> Resto da divisão
 * 
 * ? Ordem de precedencia
 * ? 1 -> ()
 * ? 2 -> **
 * ? 3 -> * / %
 * ? 4 -> + -
 * 
 * ! NaN -> Not a number
 */

let contador = 1;
console.log(++contador); //* Faz um pre incremento, somando o valor +1 depois mostrando o valor com a soma
console.log(contador++); //* Faz um pos incremento, somara o valor +1 nas linhas seguintes enquanto mostra o primeiro valor da variavel

let Contador = 1;
console.log(--Contador); //! Faz um pre decremento, subtrai o valor -1 depois mostrando o valor com a soma
console.log(Contador--); //! Faz um pos decremento, subtraindo o valor -1 nas linhas seguintes enquanto mostra o primeiro valor da variavel

//* Operadores de atribuição
contador += passo; //? contador = contador + passo(valor)
contador -= passo; //? contador = contador - passo(valor)
contador *= passo; //? contador = contador * passo(valor)
contador /= passo; //? contador = contador / passo(valor)
contador **= passo; //? contador = contador ** passo(valor)

//? Convertendo string -> number
const num = parseInt('5'); //* Conversão para inteiro
const num1 = parseFloat('5'); //* Conversão para flutuante(decimais)
const num2 = Number('5'); //* Conversão para numero(Qualquer)