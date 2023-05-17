//* Função geradora -> um codigo que pode ser pausado

function* geradora1 () { //* Função geradora utiliza (*)
    //* yield -> Retorna um dos valores a seguir
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

// const g1 = geradora1();
// for (let valor of g1) {
//     console.log(valor);
// }
// console.log(g1.next().value); //* Para ver o valor da função geradora precisa usar o metodo (.next())
// console.log(g1.next().value); //* Valor 2
// console.log(g1.next().value); //* Valor 3

function* geradora2 () { //* Geradora de numeros infinitos
    let i = 0;
    
    while(true) {
        yield i;
        i++;
    }
}

// const g2 = geradora2();
// console.log(g2.next().value); //* 0
// console.log(g2.next().value); //* 1
// console.log(g2.next().value); //* 2 
// console.log(g2.next().value); //* 3
// console.log(g2.next().value); //* 4

function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4 () { //* Quero delegar parte do serviço da (geradora4) para a (geradora3)
    yield* geradora3(); //* Continua a contagem que se iniciou na (geradora 3)
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor)
}

function* geradora5 () { //* Um sistema de etapas onde uma função executa uma tarefa, outra função executa outra tarefa
    yield function() {
        console.console('Vim do y1');
    };

    //* return faria com que os codigos abaixo nao se concluam
    return function() {
        console.log('Vim do return');
    };

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value; //* Pegando o valor que esta no (yield)
const func2 = g5.next().value;

func1();
func2();