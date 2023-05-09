//* Escreva uma função que recebe um numero e
//* Retorne o seguinte:
//* Numero e divisivel por 3 = Fizz
//* Numero e divisivel por 5 = Buzz
//* Numero e divisivel por 3 e 5 = FizzBuzz
//* Numero NAO e divisivel por 3 e 5 = Retorna o proprio numero
//* Checar se o numero e realmente um numero = Retorna o proprio numero
//* Use a função com numeros de 0 a 100

function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}