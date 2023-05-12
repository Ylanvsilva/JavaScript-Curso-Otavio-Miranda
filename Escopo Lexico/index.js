//* Escopo lexico -> a função conhece o local que ela foi declarada, tudo que esta declarado dentro dela e o que esta nos vizinhos dela

const nome = 'Luiz';

function falaNome() {
    //* Posso acessar as variaveis vizinhas a minha função
    console.log(nome);
}

falaNome();

function usaFalaNome() {
    const nome = 'Otavio';
    falaNome();
}

usaFalaNome();