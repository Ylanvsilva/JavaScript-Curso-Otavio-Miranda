//* Indices        0         1        2
//const nomes = ['Eduardo', 'Maria', 'Joana'];
//* String, Objetos, Funções, Números

//* Construtor do array
//const nomes = new Array ('Eduardo', 'Maria', 'Joana');

//* Valor passado por referencia
//const nomes = ['Eduardo', 'Maria', 'Joana']; //* Se eu quero pegar tudo que esta dentro desse array e espalhar isso dentro de outro array

//const novo = [...nomes]; //* Spread operator // Com isso oq ocorre em (novo) nao reflete mais em (nomes)

//const novo = nomes; //* Tudo que for feito em (novo) reflete em (nomes) e virse-versa

//const removido = nomes.pop(); //* Posso jogar o nome removido para dentro de uma variavel

//const removido = nomes.shift(); //* Vai deslocar os indices para remover o primeiro elemento

//nomes.push('João'); //* Adicionar um elemento no final do array

//nomes.unshift('João'); //* Adciona um elemento no começo do array

//const novo = nomes.slice(1, 3); //* Pode tambem fatiar o array -> ir de um indice (1) ao outro (3)
//const novo = nomes.slice(0, -1); //* Pode tambem fatiar o array -> todos menos (-1) o ultimo

//* Convertendo string num array
//const nome = 'Luiz Otavio Miranda';
//const nomes = nome.split(' '); //* Foi utilizado o espaço (' ') para dividir a string e formar um array

//* Convertendo array numa string
const nomes = ['Luiz', 'Otavio', 'Miranda'];
const nome = nomes.join(' '); //* Une todos os valores do array // Foi utilizado como separador o espaço (' ') para unir a string e formar um array

novo.pop(); //* Faz tanto com que (nomes) e (novo) percam um elemento
console.log(nomes.length); //* Quantos elementos tem dentro do array
nomes[2] = 'João'; //* Trocando 'Joana' por 'João'
delete nomes[2]; //* Paga apagar o array 2, o indice permanece