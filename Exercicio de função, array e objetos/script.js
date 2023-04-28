/**
 * * Para Selecionar os seletores com o querySelector
 * ! Class -> '.class'
 * ? ID -> '#id'
 * todo Tag -> 'tag'
 */

function meuEscopo () {
    //* Seleciona elementos como se estivesse selecionando classes, id, nome da tag, atributos e outros com CSS
    const form = document.querySelector('form'); //* 1° -> Selecionar o formulario (form)

    //* Pegando um evento
    form.onsubmit = function (evento) { //* Na função anonima colocasse um evento automatico (evento)
        
    }; //* Quando o formulario for enviado o evento de atualizar a pagina e previnido
}

meuEscopo();