let num1 = 9.54578;

let num2 = Math.floor(num1); //* Arrendoda o numero para baixo
num2 = Math.ceil(num1); //* Arrendoda o numero para cima
num2 = Math.round(num1); //* Arrendonda para o mais proximo de cima ou baixo
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //* Pega o maior numero da sequencia de numeros
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //* Pega o menor numero da sequencia de numeros
const aleatorio = Math.random() * (10 - 5) + 5; //* Gera um numero aleatorio entre 10 e 5
console.log(Math.random()); //* Gera um numero aleatorio entre 0 e 1
console.log(Math.PI); //* Pega o valor de PI
console.log(Math.pow(2, 10)); //* Ela o numero a outro (Potenciação)
console.log(num1 ** 0.5); //* Para pegar a raiz quadrada de um numero
console.log(100 / 0); //* Mostra um valor infinito