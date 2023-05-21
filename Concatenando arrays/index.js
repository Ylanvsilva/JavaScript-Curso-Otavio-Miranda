const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//* Como juntar os valores desse array 
//const a3 = a1.concat(a2); //* Concatena o (a1) com o (a2)
//const a3 = a1.concat(a2, [7, 8, 9], 'Luiz'); //* Outra maneira de concatenar
const a3 = [...a1, 'Luiz',...a2, ...[7, 8, 9]]; //* Spread -> para espalhar outro array dentro do outro