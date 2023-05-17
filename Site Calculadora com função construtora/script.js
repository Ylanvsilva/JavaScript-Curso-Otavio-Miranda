function Calculadora () {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target; //* Toda vez que eu utilizar o (el) esta sendo referido ao botao (event.target) que esta sendo pressionado
            if (el.classList.contains('btn-num')) this.addNumDisplay(el); //* Se na lista de botoes que esta sendo clicados contem a classe (btn-num)
            if (el.classList.contains('btn-clear')) this.clear(); //* Se na lista de botoes que esta sendo clicados contem a classe (btn-num)
            if (el.classList.contains('btn-del')) this.del(); //* Se na lista de botoes que esta sendo clicados contem a classe (btn-num)
            if (el.classList.contains('btn-eq')) this.realizaConta(); //* Se na lista de botoes que esta sendo clicados contem a classe (btn-num)
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta Inválida.');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta Inválida.');
            return;
        }
    }

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText; //* Pegar oq ja tem no display e colocar o valor do botao que foi clicado ou texto interno
        this.display.focus();
    };//* Adiciona o numero que esta sendo clicado no display

    this.clear = function(el) {
        this.display.value = ''; //* Limopando o display da calculadora
    }


    this.del = function () {
        this.display.value = this.display.value.slice(0, -1);
    }
}

const calculadora = new Calculadora(); //* Use meu molde (função construtura) para criar um novo objeto de calculadora
calculadora.inicia();