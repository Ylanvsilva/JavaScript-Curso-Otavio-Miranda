const data = new Date(); //* Uma função construtora | Primeira letra sempre sera maiuscula

//const data = new Date(0); //* 01/01/1970 Timestamp unix ou epoca unix

const tresHoras = 60 * 60 * 3 * 1000; //* As horas no javascript sao contadas por milesimo de segundo
//! 60 segundos * 60 segundos = 1 hora * 3 = 3 horas * 1000 milesimo de segundo

const umDia = 60 * 60 * 24 * 1000;
//! 60 segundos * 60 segundos = 1 hora * 24 = 24 horas * 1000 milesimo de segundo

const dataEspecifica = new Date(2019, 3, 20, 15, 14, 17, 500); //* Pegando uma data especifica 20/03/2019 as 15:14:27
//! 2019 ano, 3 abril, 20 dia, 15 hora, 14 minutos, 17 segundos, 500 milesimo de segundo
//! Formato descrito acima -> a, m, d, h, M, s, ms

const dataString = new Date('2019-04-20 20:20:59');
//! A data em formato de string

console.log('Dia', dataString.getDate()); //* Para pegar o numero do dia
console.log('Mês', dataString.getMonth()); //* Para pegar o numero do mês | Mes começa do 0
console.log('Ano', dataString.getFullYear()); //* Para pegar o numero do ano
console.log('Hora', dataString.getHours()); //* Para pegar o numero do hora
console.log('Minuto', dataString.getMinutes()); //* Para pegar o numero do minuto
console.log('Segundo', dataString.getSeconds()); //* Para pegar o numero do segundo
console.log('Milesimo de Segundo', dataString.getMilliseconds()); //* Para pegar o numero do milesimo de segundo
console.log('Dia da Semana', dataString.getDay()); //* Para pegar o numero do dia da semana | 0 -> Domingo, 6 -> Sabado
console.log('Milesimo de segundo atual', dataString.now()); //* Pega o numero de milesimo de segundo atual

//? Os meses vao de 0 - 11
//? 1000 milesegundo e igual a 1 segundo

//* Função para colocar zeros a esquerda
function zeroAEsquerda (num) {
    return num >= 10 ? num : `${num}`;
}

//* Função para formatar data brasileira
function formataData (dataF) {
    const dia = zeroAEsquerda(dataF.getDate());
    const mes = zeroAEsquerda(dataF.getMonth() + 1);
    const ano = zeroAEsquerda(dataF.getFullYear());
    const hora = zeroAEsquerda(dataF.getHours());
    const min = zeroAEsquerda(dataF.getMinutes());
    const seg = zeroAEsquerda(dataF.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataF = new Date();
const dataBrasil = formataData(dataF);
console.log(dataBrasil)