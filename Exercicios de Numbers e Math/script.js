const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo'); //* Quero obter um elemento por ID

const texto = document.getElementById('texto'); //* Para selecionar o ID texto no HTML

numeroTitulo.innerHTML = numero; //* Faz a alteração do HTML pelo texto digitado na variavel

//* Coloca um texto dentro do html selecionado pelo id
texto.innerHTML = '';

texto.innerHTML = `<p>
Raiz quadrada: ${numero ** 0.5} <br>
${numero} é inteiro? ${Number.isInteger(numero)} <br>
É NaN? ${Number.isNaN(numero)} <br>
Arredondado para baixo: ${Math.floor(numero)} <br>
Arrendondado para cima: ${Math.ceil(numero)} <br>
Com duas casas decimais: ${numero.toFixed(2)}
</p>`; 

//? Uma opção ao inves de colocar da forma acima

//! texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`
//! texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`
//! texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`
//! texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
//! texto.innerHTML += `<p>Arrendondado para cima: ${Math.ceil(numero)}</p>`
//! texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`