// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

//* Na estrutura do for, ele precisa dentro dos parenteses criar:
//* Uma variavel 1°
//* Uma condição 2°
//* Uma incrementação ou decrementação 3°
//* i -> Index

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 5; i += 10) { //* Assim ele vai pulando de 10 em 10
    console.log(`Linha ${i}`);
    const par = i % 2 === 0 ? 'Par' : 'Impar'; //* Para saber se o numero e (par)
}

//! Percorrendo um array
//*               0       1       2
const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i); //* Numeros de arrays
    console.log(frutas[i]); //* Valor dos arrays
}