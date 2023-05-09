//* Escreva uma função que recebe 2 numeros e retorne o maior deles

function max (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(1, 2));

//! Refatorando o codigo (melhorando) ----------------------

const max2 = (x, y) => x > y ? x : y;

console.log(max2(1, 2));