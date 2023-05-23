//* map -> altera valores do array
//* com map retornamos o valor com um valor diferente

//* Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function (valor, indice, array) {
    return  valor * 2; //* map sempre mantem o mesmo tamanho do array original
});

console.log(numerosEmDobro);

//* Para cada elemento:
//* Retorne apenas uma string com o nome da pessoa
//* Remova apenas a chave "nome" do objeto
//* Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(function(valor) {
    return valor.nome; //* so para retornar os nomes
});

const idades = pessoas.map(function(obj) {
    delete obj.nome; //* Deletando a chave nome do objeto
    //return { idade: obj.idade }; //* ou
    return obj;
});

const comIds = pessoas.map(function(obj, indice) {
    //obj.id = indice; //* Retornando os indices, se tornam os Ids de cada objeto
    const newObj = { ...obj };
    newObj.id = indice;    //* Alterando o objeto principal e possivel criar um novo objeto original
    return newObj;
});

console.log(nomes, idades, comIds);