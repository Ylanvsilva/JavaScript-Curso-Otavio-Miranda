//* ? : -> Em partes que precisam de if e else, isso pode encurtar o codigo

const pontuacaoUsuario = 999;

//! Usando os operadores ternarios
//? ? - Valor para verdadeiro
//? : - Valor para falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

//* A constante (corPadrao), tera um valor predito como null se nao for selecionado nenhum, ou preto de no caso de nao tiver
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP');
} else {
    console.log('Usuario Normal');
}