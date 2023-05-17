//* Função recursiva -> uma função que chama ela mesma se chama de volta

function recursiva(max) {
    console.log(max);
    if (max >= 10) return; //* O limite de minha função
    max++;
    recursiva(max); //* Executa o codigo dela e se chama de volta
}

recursiva(0);