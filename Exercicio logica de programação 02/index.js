//* Escreva uma função chamada ePaisagem que
//* Recebe dois argumentos, largura e altura
//* de uma imagem (number).
//* Retorne true se a imagem estiver no modo
//* Paisagem

function ePaisagem (l, a) {
    if (l > a) {
        return `Paisagem`;
    }
    return `Retrato`;
};

console.log(ePaisagem(1080, 1920));

//! Forma melhorada 

const ePaisagem = (l, a) => l > a;

console.log(ePaisagem(1080, 1920));