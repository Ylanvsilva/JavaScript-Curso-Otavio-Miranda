//* Altera o valor (outraCoisa) do mesmo local
const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = produto;

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

//* Copia o primeiro valor (produto) e modifica o segundo (produto) com (spread)
const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = { 
    ...produto,
    material: 'porcelana'
    //* Espalhando o objeto (produto) dentro da constante (outraCoisa) consigo tambem adicionar elemento como (material)
};

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

//* Usando o Object.assign (para copiar um objeto)
const produto = { nome: 'Caneca', preco: 1.8 };
//* Tudo que esta dentro de (produto) esta dentro (assign)
//* Joga os elementos adicionais para as (chaves)
const caneca = Object.assign({}, produto, { material: 'porcelana' });

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

//* Aconselhado, para pegar um elemento do objeto para outro
const produto = { nome: 'Caneca', preco: 1.8 };
const caneca = { nome: produto.nome, preco: produto.preco };

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

//* Array com as chaves dos produtos (keys)
const produto = { nome: 'Caneca', preco: 1.8 };
const caneca = { nome: produto.nome, preco: produto.preco };
console.log(Object.keys(produto));

//* (freeze) nao alterando nada no objeto
const produto = { nome: 'Caneca', preco: 1.8 };
Object.freeze(produto);
const caneca = { nome: produto.nome, preco: produto.preco };

//* Pegando do objeto(produto) o que e a propriedade (nome)
const produto = { nome: 'Produto', preco: '1.8' };
//* alterando propriedade
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
//* Retorna o descritor da propriedade dentro do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

//* Pegando os valores (values)
const produto = { nome: 'Produto', preco: '1.8' };
console.log(Object.values(produto))

//* Pegando os valores e as chaves e jogando dentro de array (entries)]
const produto = { nome: 'Produto', preco: '1.8', material: 'porcelana' };
for (let entry of Object.entries(produto)) {
    console.log(entry);
}