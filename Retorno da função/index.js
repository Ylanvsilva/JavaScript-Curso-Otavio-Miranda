//* return -> Retorna um valor -> Termina a função

function soma (a, b) {
    return a + b; //* Retorna esse valor somado, para futuro uso
}
console.log(soma(5, 2));

function soma2 (a, b) {
    console.log(a + b); //* Se torna um valor inutil pq nao retorna nada
}
soma2(5, 2);

document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red'; //* Função nao retorna nada mas faz alguma coisa util
})

function criaPessoa (nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome }; //* Retorna objetos
}

function falaFrase (comeco) {
    function falaResto (resto) {
        return resto;
    }

    return falaResto; //* Essa função retorna (falaResto) sem executar ela 
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!')
console.log(resto);

//! Função funcional com os return
function duplica(n) {
    return n * 2;
}

function triplica(n){
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

//* De outra forma

function criaMultiplicador (multiplicador) {
    //* multiplicador esta neste escopo
    //* uma função que crie e ja retorne uma outra função
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));