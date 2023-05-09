//* Continue -> continua para proxima iteração
//! Break -> sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero in numeros) {

    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue; //* Continua para proxima iteração do laço, faz o codigo voltar para o começo
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; //* Faz com que o laço seja finalizado
    }

    console.log(numero);
}

//! for in

for (let i in numeros) {
    let numero = numero[1];

    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue; //* Continua para proxima iteração do laço, faz o codigo voltar para o começo
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; //* Faz com que o laço seja finalizado
    }

    console.log(numero);
}

//! for classico

for (let i = 0; i < numeros.length; i++) {
    let numero = numero[1];

    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue; //* Continua para proxima iteração do laço, faz o codigo voltar para o começo
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; //* Faz com que o laço seja finalizado
    }

    console.log(numero);
}

//! while

let i = 0;

for (i < numeros.length) {
    let numero = numero[1];

    if (numero === 2) {
        console.log('Pulei o numero 2');
        i++;
        continue; //* Continua para proxima iteração do laço, faz o codigo voltar para o começo
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break; //* Faz com que o laço seja finalizado
    }

    console.log(numero);

    i++;
}

//! do while

let i = 0;

do {
    let numero = numero[1];

    if (numero === 2) {
        console.log('Pulei o numero 2');
        i++;
        continue; //* Continua para proxima iteração do laço, faz o codigo voltar para o começo
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break; //* Faz com que o laço seja finalizado
    }

    console.log(numero);

    i++;
} for (i < numeros.length);