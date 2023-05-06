//* For classico -> Geralmente com iteraveis (arrays ou strings)
//* For in -> Retorna o indice ou chave (string, arrays ou objetos)
//* For of -> Retorna o valor em si (iteraveis, arrays ou strings)

//* for of -> especifico para objetos iteraveis (ex: strings, arrays)

const nome = ['Luiz', 'Otavio', 'Henrique'];

//* Iterando sobre a string (nome)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

for (let i in nome) {
    console.log(nome[i]);
}

for (let valor of nome) { //* com of vem o valor
    console.log(valor);
}

nome.forEach(function (valor, indice, array) { //* forEach mostra o valor e o indice e o array
    console.log(valor, indice, array);
});

//! Com objeto ---------------

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

for (let chave in pessoa) { //* for in -> funciona com objetos
    console.log(chave, pessoa[chave]);
}

for (let valor of pessoa) { //* for of -> Não funciona com objetos, pra ele nao e iteravel

}