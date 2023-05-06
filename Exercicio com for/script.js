const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //* 0 Indice
    {tag: 'div', texto: 'Frase 2'}, //* 1 Indice
    {tag: 'footer', texto: 'Frase 3'}, //* 2 Indice 
    {tag: 'section', texto: 'Frase 4'} //* 3 Indice
];

console.log(elementos);

const container = document.querySelector('.container');
const div = document.createElement('div');

//* Com isso vamos ter a div com todos os elementos e com os textos dentro de cada elemento
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; //* O que eu quero desestruturar esta dentro das chaves
    let tagCriada = document.createElement(tag); //* Enquanto eu estiver iterando sobre a variavel elemento vou estar pegando cada valor dentro de tag
    tagCriada.innerText = texto; //* Pegando o valor dentro de texto de elementos
    div.appendChild(tagCriada);
    //let textoCriado = document.createElementNode(texto); //* Com isso esta sendo criado um no de texto
    //tagCriada.appendChild(textoCriado);
    //console.log(elementos[i].tag); //* Para pegar as tags dentro dos objetos dentro do array elementos
}

container.appendChild(div);