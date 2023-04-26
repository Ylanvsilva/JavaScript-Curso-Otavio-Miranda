//* Arrays -> Lista ou coleção de coisas
//? Indices ->    0        1       2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos[0]); //* Para exibir o indice selecionado pelo colchetes
console.log(alunos); //* Mostra o array completo
alunos[0] = 'Eduardo'; //* Para editar um indice, como trocar o nome
alunos[3] = 'Luiza'; //* Se o indice nao existir, sera criado um indice com o valor colocado
console.log(alunos.length); //* Para saber o tamanho do array
alunos[alunos.length] = 'Fabio'; //* Acrescenta mais um indice, juntamente com o valor colocado
alunos.push('Otavio'); //* Coloca um elemento ao final do meu array
alunos.unshift('Luiza'); //* Coloca um elemento no começo do array
alunos.pop(); //* Remove o ultimo array
delete alunos[1]; //* Deleta o indice selecionado
console.log(alunos[50]); //* Quando pedimos para o js mostrar um indice inesxistente ele nos dara como resultado, undefined
console.log(alunos.slice(0, 2)); //* Quero fatiar meu array do elemento x ao elemento y
console.log(typeof alunos); //* O tipo teria o resultado de OBJECT
console.log(alunos instanceof Array); //* Essa variavel e instancia de array?