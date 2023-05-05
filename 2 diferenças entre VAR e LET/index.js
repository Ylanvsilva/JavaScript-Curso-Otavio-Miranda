const verdadeira = true;

//? Let tem escopo de bloco { ... bloco }
//! Var so tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz'; //* var permite redeclarar a variavel com outro valor para ficar no lugar da que ja estava

if (verdadeira) {
    let nome = 'Otavio'; //* Otavio apareceria pois let e uma variavel de bloco 
    var nome2 = 'Rogerio' //* Redeclarando e mudando seu valor
    console.log(nome, nome2);

    if (verdadeira) {
        var nome2 = 'Ronaldo'; //* Redeclarando a mudando seu valor
        let nome = 'Outra coisa'; //* Outra coisa apareceria nesse caso
        console.log(nome, nome2);
    }
}

//! -----------------------

var sobrenome = 'Miranda'; //* Se caso ocorrer da variavel for definida fora da função ela pode ser declarada dentro de uma função

function falaOi () {
    var nome = 'Luiz' //* Dentro do bloco da função var so se adequa a ele
    console.log(sobrenome);

    if (verdadeira) {
        let nome = 'Luiz';
        console.log(sobrenome); //* Para var nao tem diferença em qual escopo estiver se ja fora declarado
    }

    console.log(nome); //* Para o let so poderia ser mostrado se fosse em um mesmo bloco escopo
}

falaOi();

//! Hosting ------- Elevação -> faz com que a variavel seja declarada por debaixo dos panos
//! So funciona com var

console.log(sobrenome)

var sobrenome = 'Miranda'; 