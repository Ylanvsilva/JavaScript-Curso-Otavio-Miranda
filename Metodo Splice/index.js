//!              -5       -4       -3         -2        -1
//*               0        1        2          3         4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

//* No 1° Argumento, qual indice que eu quero começar mexer
//* No 2° Argumento, quantos elementos eu quero remover do meu array
//* No 3° Argumento em diante, elementos para adicionar
//? nomes.splice(indice, delete, elemento1, elemento2, elemento3);

//* Simulando a função pop -> Remover o ultimo indice do elemento
// const removidos = nomes.splice(-1, 1); //* Do ultimo elemento, remove 1
// removidos = nomes.splice(4, 1); //* Do ultimo elemento, remove 1
// nomes.splice(-2, Number.MAX_VALUE); //* Começa do (-2) e vai ate o infinito (Number.MAX_VALUE )
// nomes.splice(3, 0, 'Luiz'); //* Começe no indice (3), nao remova nenhum elemento (0), e no elemento 3 adicione ('Luiz')
// nomes.splice(3, 1, 'Luiz'); //* Começe no indice (3), remova um elemento ('Gabriel'), e no lugar adicione ('Luiz')
// console.log(nomes, removidos, Number.MAX_VALUE);

//* Simulando a função shift -> Remover o primeiro indice do elemento
const removidos = nomes.splice(0, 1); //* No primeiro elemento, remova 1
console.log(nomes, removidos);

//* Simulando a função push -> Adiciona um indice no final do elemento
nomes.splice(nomes.length, 0, 'Luiz'); //* Adiciona um indice no final do array
console.log(nomes);

//* Simulando a função unshift -> Adiciona um indice no começo do array
nomes.splice(0, 0, 'Luiz', 'Otavio', 'Miranda');
console.log(nomes);