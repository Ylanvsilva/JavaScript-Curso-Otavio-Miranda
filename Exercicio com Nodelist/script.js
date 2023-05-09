const paragrafos = document.querySelector('.paragrafos'); //* Pegando a classe paragrafo do html

const ps = paragrafos.querySelectorAll('p'); //* Pegando todos os p dentro da classe paragrafo

const estilosBody = getComputedStyle(document.body); //* Possui tudo de css que foi computado pelo navegador no body

const backgroundColorBody = estilosBody.backgroundColor; //* Pegando o background color do body
console.log(backgroundColorBody); //* Mostra a cor em rgb

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody; //* Colocando as tags p com a cor do body
    p.style.color = '#FFFFFF'; //* Colocando as letras em branco
}