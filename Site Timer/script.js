function relogio() {
    function criaHoraDosSegundos (segundos) { //* A função vai receber os segundos, criar a data e retornar a data
        //* o javascript recebe em milesimo de segundos, multiplicando a 1000 fica segundos
        const data = new Date(segundos * 1000); //* Com isso estou criando a data dos segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT' //* Com isso ele esta considerando o time zone de 1970, nao o meu
        })
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    
    let segundos = 0;
    //* A cada um segundo da função abaixo (iniciaRelogio) vai somar +1 na variavel acima (segundos)
    let timer;
    function iniciaRelogio () {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos); //* Com a função criaHoraDosSegundos ele vai formatar minha horas, minutos e segundos
        }, 1000);
    }
    
    // iniciar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });
    
    // pausar.addEventListener('click', function(event) {
    //     relogio.classList.add('pausado');
    //     clearInterval(timer);
    // });
    
    // zerar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     relogio.classList.remove('pausado');
    //     relogio.innerHTML = '00:00:00';
    //     segundos = 0;
    // });
    
    //* Ou dessa forma
    
    document.addEventListener('click', function(e) {
        const el = e.target; //* target -> o local com o qual eu estou clicando na pagina
        if (el.classList.contains('zerar')) { //* Se dentro de onde eu cliquei conter (contains) a classe (zerar, pausar, iniciar)
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if (el.classList.contains('pausar')) { //* Se dentro de onde eu cliquei conter (contains) a classe (zerar, pausar, iniciar)
            relogio.classList.add('pausado');
            clearInterval(timer);
        } 
    
        if (el.classList.contains('iniciar')) { //* Se dentro de onde eu cliquei conter (contains) a classe (zerar, pausar, iniciar)
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        } 
    });
}