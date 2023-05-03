//* Capturar evento de submit do formulario

const form = document.querySelector('#formulario'); //* Para selecionar o id dentro do form

form.addEventListener('submit', function (e) { //* Captura o evento
    e.preventDefault(); //* Previni o evento, nao deixa o formulario ser enviado
    const inputPeso = e.target.querySelector('#peso'); //* Vai me informar o elemento que ta recebendo o elemento, ex: um clique de mouse, ele ira me mostrar qual examente foi esse evento 
    const inputAltura = e.target.querySelector('#altura'); //* Vai me informar o elemento que ta recebendo o elemento, ex: um clique de mouse, ele ira me mostrar qual examente foi esse evento 
    
    //! Capturou os dados inputs ^
    //! Conversão pra number v
    
    const peso = Number(inputPeso.value); //* Pegue o valor desse inputPeso
    const altura = Number(inputAltura.value); //* Pegue o valor do inputAltura
    
    if (!peso) { //* Se peso resultar num valor NaN. Se peso for falso
        setResultado('Peso Inválido.', false); //* O false colocado no final liga com o parametro isValid, para modificar a cor para vermelhor 
        return; //* Para a funçao parar.
    } 

    if (!altura) { //* Se altura nao for valida
        setResultado('Altura Inválida.', false); //* O false colocado no final liga com o parametro isValid, para modificar a cor para vermelhor 
        return; //* Para a funçao parar.
    }

    const imc = getImc(peso, altura); //* Calculando o IMC

    const nivelImc = getNivelImc(imc); //* Pegando o nivel do imc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; //* Mensagem que aparecera

    setResultado(msg, true);
    //console.log('Evento previnido.');
    //setResultado();
}); //* Qual evento eu desejo assistir ou escutar

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    //! Array com valores, baseado no imc ele mostra um indice da lista ^
    //! Checou de tras para frente v
    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >= 34.9) {
        return nivel[4];
    } else if (imc >= 29.9) {
        return nivel[3];
    } else if (imc >= 24.9) {
        return nivel[2];
    } else if (imc >= 18.5) {
        return nivel[1];
    } else if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2; //* Calculo do IMC
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p'); //* Que elemento sera criado, nesse caso paragrafo
    return p;
    //p.classList.add('paragrafo-resultado'); //* Adiciona uma classe nessa lista de classes (p), se nao houver, ele criara o atributo class e adicionara
    //p.innerHTML = 'Qualquer coisa'; //* Foi colocado um valor dentro de p
}

function setResultado (msg, isValid) { //* Função criada com a finalidade de colocar algo dentro da div com o id resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //* Limpa qualquer resultado que esteja no HTML
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg; //* Para mandar a mensagem da function form no console
    //resultado.innerHTML = `<p>${msg}</p>`; //* O que for mandado aqui sera mostrado no HTML do resultado
    resultado.appendChild(p); //* Inseri um elemento, um filho dentro desse elemento, nesse caso p
} //* Toda vez que eu quiser mandar uma mensagem, escrevo algo para o parametro (msg) que ele adiciona no meu HTML