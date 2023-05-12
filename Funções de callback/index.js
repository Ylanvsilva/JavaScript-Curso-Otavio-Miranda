//* Funções de callback -> São funções que sao executadas quando uma ação ocorre, quando uma ação finaliza, executa a função
//* De uma forma literal -> Coisas que sao chamadas, quando algo termina de ocorrer
//* Função que calcula aleatoriamente entre 1seg e 3seg um valor qualquer
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) { //* callback -> uma função que pode ou nao ser recebida
    setTimeout(function() {
        console.log('f1');
        if (callback) callback(); //* Se existir alguma função de callback, ela sera executada
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(function () { //* f1 -> sera executado primeiro e recebe função de (callback)
    f2(function () { //* f2 -> logo apos a f1 e recebe função de (callback)
        f3 (function() { //* f3 -> apos o f1 e f2 serem executados e recebe função (callback)
            console.log('Ola Mundo!');
        })
    })
});

//? OU

f1(f1Callback); //* Vai ser executado no parametro (f1)

function f1Callback() {
    f2 (f2Callback); //* Depois ele fica chamando callback f1
};

function f2Callback() {
    f3 (f3Callback); //* Depois ele fica chamando callback f2
}

function f3Callback() {
    console.log('Olá Mundo!'); //* Depois ele fica chamando callback (f3)
}