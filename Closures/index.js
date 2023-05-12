//* closures -> é a habilidade da função em acessar seu escopo lexico

function retornaFuncao(nome) {
    //* No escopo dessa função eu tenho a variavel luiz
    return function () { //* Essa função tem acesso anonimo a variavel acima (nome)
        return nome; //* O retorno dessa função e retorna esta indo para a variavel (funcao) abaixo
        //* Essa função tem acesso a 3 escopos -> Global, local e o fora dela (mãe/pai)
    };
}

const funcao = retornaFuncao('Luiz'); //* Vai receber a função anonima que e a retornada acima
const funcao2 = retornaFuncao('João');
console.log(funcao); //* [funtion] -> Resulta nisso pq estamos retornando uma função anonima
console.dir(funcao); //* Para exibir no navegador

console.log(funcao(), funcao2());
//* Para constante funcao 'Luiz', sempre sera seu resultado
//* Para constante funcao2 'João', sempre sera seu resultado