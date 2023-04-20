const nome = 'Ylan Vinicio';
const sobrenome = 'Santos Silva';
const idade = 21;
const peso = 60
const alturaEmM = 1.76;

let imc; //* peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)