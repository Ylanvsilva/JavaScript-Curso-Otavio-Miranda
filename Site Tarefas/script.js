const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi () { //* Função que ira criar um li e retornar ele
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener ('keypress', function(e) { //* Quando uma tecla for pressionada
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value); //* Quando enter for pressionado adiciona um li dentro do ul com o valor ja escrito
    }
});

function limpaInput() {
    inputTarefa.value = ''; //* Com isso ele ira limpar o valor que esta naquele input
    inputTarefa.focus(); //* O evento de clicar no botao de input
}

function criaBotaoApagar(li) { //* Preciso saber onde vou adicionar esse botao, entao coloquei (li) no parametro
    li.innerText += ' '; //* O texto que ja esta la + um espaço
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar'); //* Com isso estou setando um atributo (class) por valor (apagar)
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li); //* Com isso ira adicionar o valor dentro de um li que esta dentro de uma ul
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
    //console.log(textoInput);
}

btnTarefa.addEventListener('click', function (e) { //* Pegando o evento de click no botao
    if (!inputTarefa.value) return; //* Retorna um valor caso seja colocado, e se nao, nao retorna nada
    //console.log(inputTarefa.value); //* Estou pegando o valor dentro de input-tarefa
    criaTarefa(inputTarefa.value); //* Joga o texto para a função (criaTarefa) e (criaTarefa) ira apenas exibir o valor
});

document.addEventListener('click', function (e) {
    const el = e.target;

    //* Quero realmente saber se o onde estou clicando realmente e o botao de apagar e nao outra coisa
    if (el.classList.contains('apagar')) { //* Se esse botao contem a classe (apagar)
        el.parentElement.remove(); //* Do meu elemento o pai dele sera removido
        salvarTarefas();
    }
})

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li'); //* Dentro da class tarefas quero pegar todos os (li) que estao dentro dela
    const listaDeTarefas = []; //* Cria uma nodelist

    for (let tarefa of liTarefas) { //* Iterando sobre a nodelist e pegar os textos que estiverem dentro dele
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //* Quando eu pegava o texto vinha o texto apagar junto, com isso eu faço o texto apagar ser '' nada
        listaDeTarefas.push(tarefaTexto); //* Jogar o texto dentro do array (listaDeTarefas)
    }

    //* Sera criado um JSON em uma unica string (JSON -> salvar os dados entre os sistemas)
    const tarefasJSON = JSON.stringify(listaDeTarefas); //* O array foi convertido para JSON em string
    //* Local no navegador onde posso salvar coisas no navegador
    localStorage.setItem('tarefas', tarefasJSON); //* O que eu quer salvar //* E qual o nome que eu vou usar para recuperar o valor de novo
}

//* Essa função vai ler as tarefas e vai jogar elas de volta na (ul)
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); //* Convertendo a string para array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();