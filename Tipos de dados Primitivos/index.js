//* String, number, undefined, null, boolean, symbol

const nome = 'Luiz'; //* String
const nome1 = `Luiz`; //* String
const nome2 = "Luiz"; //* String

const num1 = 10; //? Number
const num2 = 10.52; //? Number

let nomeAluno; //! undefined -> não aponta para local nenhum na memoria, quando nao colocamos valor dentro da variavel
const sobrenomeAluno = null; //! Nulo -> Não aponta para local nenhum na memoria, desconfigura a variavel

const boolean = true; //Todo Boolean -> true, false (Logico)

const a = [1, 2];
const b = a;

b.push(3); //* push -> adiciona o valor em parenteses
console.log(a, b);