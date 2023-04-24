//* Para escapar o caractere de aspas da string
let umaString = "Um \"texto\"";

//* Para colocar a barra invertida na string
umaString = "Um \\texto";

//* Todas as strings contem indices, ou seja, sao iteraveis
//?          01234567
umaString = "Um texto"
console.log(umaString[4]); //* Pegando um valor na string
console.log(umaString.charAt(4)); //* Pegando um valor na string, no caso de numero fora do indice nao aparecera nada
console.log(umaString.concat(' ', 'em', ' ', 'um', ' lindo dia')); //* Concatena a string
console.log(umaString.indexOf('texto')); //* Qual indice ta a palavra texto, qual indice se inicia a palavra texto
console.log(umaString.lastIndexOf('0')); //* Começa do indice final para tras
console.log(umaString.match(/[a-z]/g)); //* Para encontrar uma expressao regular
console.log(umaString.search(/x/)); //* Mostra o indice onde o que eu pedi e encontrado
console.log(umaString.replace(/Um/, 'Outra')); //* Faz uma substituição na string, colocando a flag g, faz com que se repita
console.log(umaString.length); //* Para pegar o tamanho da string
console.log(umaString.slice(2, 6)); //* Para fatiar a string
console.log(umaString.substring(umaString.length - 5, umaString.length -1)); //* Pegaria os (5) ultimos indices da string menos o ultimo (-1)
console.log(umaString.split(' ', 2)); //* Divide a string, ao por um numero no final concede limite de vezes
console.log(umaString.toUpperCase); //* Deixa as letras tudo maiusculas
console.log(umaString.toLowerCase); //* Deixa as letras tudo minisculas