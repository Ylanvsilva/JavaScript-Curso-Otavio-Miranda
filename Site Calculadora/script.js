//* Criando uma Factory Function
function criaCalculadora () {
    return {
        //* Atributos
        display: document.querySelector('.display'), //* Para ter acesso a esse atributo e apenas selecionar ele com (this)
        
        //* Criando um metodo
        inicia() {
            this.cliqueBotoes(); //* Este (this) Objeto (calculadora.inicia)
            this.pressionaBackSpace();
            this.pressionaEnter(); //* Quando (ENTER) for pressionado ele realiza a conta
        },

        //* Criando outro metodo
        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        //* Criando outro metodo
        pressionaEnter() {
            this.display.addEventListener('keyup', e => { //* (keyup) quando soltar a tecla ele dispara o evento
            if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        //* Criando outro metodo
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta); //* Ele vai pegar oq estiver escrito no display da calculadora e tentar realizar a conta
                
                if (!conta) { //* Se a conta nao existir ou qualquer valor falso
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta); 
            } catch(e) {
                alert('Conta inválida'); //* Caso chegue ate aqui e sinal de que ocorreu algum erro e para a função
                return;
            }
        },

        //* Criando outro metodo
        //* Configurando o limpar da calculadora
        clearDisplay () {
            this.display.value = '';
        },

        //* Criando outro metodo
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); //* Apaga tamanho da string -1
        },


        //* Criando outro metodo
        //* Pegando os cliques dos botoes
        cliqueBotoes() {
            //* Tudo que for clicado no documento vai ser exibido
            document.addEventListener('click', e => { //* Se for utilizado arrow function vai sempre ter o (this) travado em quem criou o elemento
                const el = e.target;

                if (el.classList.contains('btn-num')) { //* Se o elemento contem a classe (btn-num)
                    //* Fazer um link com o que esta no botao e vai pro display
                    
                    //* Criando outro metodo
                    //* Quando um metodo e chamado dentro de outro metodo e necessario o uso da palavra (this)
                    //* InnerText -> tudo que estiver dentro da tag
                    this.btnParaDisplay(el.innerText); //* Nesse metodo tera que ser enviado um valor (btnParaDisplay(valor))
                }

                if (el.classList.contains('btn-clear')) { //* Se o botao clicado for o (btn-clear)
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) { //* Se o botao clicado for o (btn-del)
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) { //* Se o botao clicado for o (btn-eq)
                    this.realizaConta();
                }
            }); //*.bind(this)); Ao inves de usar o seu (this) use o meu (this -> calculadora)
        },

        btnParaDisplay(valor) {
            this.display.value += valor; //* Vai ser concatenado oq estiver no display + o botao que foi clicado
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia(); //* Rodando o metodo