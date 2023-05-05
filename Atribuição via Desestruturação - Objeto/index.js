const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        nuemro: 320
    }
};

//const { endereco } = pessoa;
//console.log(endereco); //* Vai mostrar o objeto inteiro

//const { endereco: { rua, numero } } = pessoa;
//console.log(rua, numero); //* Vai mostrar a rua e o endereço

//const { endereco: { rua, numero }, endereco } = pessoa;
//console.log(rua, numero, endereco); //* Pode-se haver a possibilidade de ver o objeto endereco inteiro, colocando-o apos virgula

// const {
//     endereco: { rua: r = 12345, numero }, //* Rua foi atribuida a uma variavel (r)
//     //* E atribuir a ela um valor padrao
//     endereco
// } = pessoa;
// console.log(r, numero, endereco);

//const { nome: teste = ''} = pessoa; //* Na chave (nome), quero que voce crie essa variavel (teste), e a variavel tera o valor recebido anteriormente (Luiz)
//console.log(teste);

//* Atribuição via desestruturação
//const { nome } = pessoa;
//console.log(nome);

//const { nome = 'Não existe' } = pessoa; //* Existe possibiliade de setar um valor se caso a variavel nao exista


//const nome = pessoa.nome; //* Atribuição e pegar um valor de um array ou objeto e pedir para ele extrair
//console.log(nome);

//console.log(pessoa.nome); //* Com notação de ponto consigo pegar o nome dentro do objeto