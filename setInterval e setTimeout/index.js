function mostraHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval () {
    console.log(mostraHora());
}

//* Estou passando a referencia do setInterval para a função abaixo e no segundo parametro é de quanto em quanto tempo isso sera executado (milesegundo)
setInterval(funcaoDoInterval, 1000); //* Vai configurar um intervalo de tempo para que alguma função seja executada em determinado momento

//* Tambem pode funcionar com uma função anonima
setInterval(function() {
    console.log(mostraHora());
}, 1000);

//* Tambem posso jogar para uma variavel
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

//* setTimeout ->  Executa apenas uma vez
setTimeout(function() {
    clearInterval();
}, 3000)

//* Fara com que exiba uma mensagem depois de um tempo determinado
setTimeout(function() {
    console.log('Ola mundo!');
}, 5000)