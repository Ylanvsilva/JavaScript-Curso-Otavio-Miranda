/**
 * * Para Selecionar os seletores com o querySelector
 * ! Class -> '.class'
 * ? ID -> '#id'
 * todo Tag -> 'tag'
 */

function meuEscopo () {
    //* Seleciona elementos como se estivesse selecionando classes, id, nome da tag, atributos e outros com CSS
    const form = document.querySelector('form'); //* 1° -> Selecionar o formulario (form)

    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // //* Pegando um evento
    // form.onsubmit = function (evento) { //* Na função anonima colocasse um evento automatico (evento)
    //     evento.preventDefault(); //* Navegador previne esse evento que era pra ocorrer por padrao, nao enviar o formulario
    // }; //* Quando o formulario for enviado o evento de atualizar a pagina e previnido

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //* Assim que esse formulario for enviado os valores e resultados serao passados para o objeto abaixo

        pessoas.push({
            nome: nome.value,   //* Value para pegar o valor dentro da variavel
            sobrenome: sobrenome.value, 
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm); //* Adiciona um escutador de eventos no meu formulario
}

meuEscopo();