const nome = 'Luiz';

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

while (i <= nome.length) {
    console.log(nome[i]);
    i++;
}

//! ---------------------
//* Função fara uma contagem aleatoria de um numero entre 0 e 50
function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);
console.log(rand);

//* Quando esse numero for 10 ele para o laço

while (rand !== 10) { //* Enquanto for diferente de 10, continua executando o laço
    rand = random(min, max);
    console.log(rand);
}

//* While (enquanto) -> checa a condição e depois executa o codigo
//* Do While -> Executa o codigo primeiro e depois checa a condição

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);