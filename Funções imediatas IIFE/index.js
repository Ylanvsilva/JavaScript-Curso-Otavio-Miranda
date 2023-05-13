//* IIFE -> Immediately invoked function expression
//* Expressao de funçao invocada imediatamente

//* Fugindo do escopo global
function qualquerCoisa () { //* Essa função toca o escopo global
    console.log(11123455); 
}
qualquerCoisa();

//* Função invocada imediatamente
//* Precisa primeiro colocar dentro de um parenteses
(function (idade, peso, altura) { //* E nao toca o escopo global
    const nome = 'Luiz';
    console.log(nome);

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    };

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80); //* <- Passando valores pros parametros

const nome = 'Qualquer coisa';