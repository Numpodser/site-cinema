let filmes = []
let adicionado = []
const f = document.getElementById('antesSalvar')
const s = document.getElementById('deposiSalvar')

function AddFilme(evento) {
    evento.preventDefault()
    const title = document.getElementById('titulo').value
    const autor = document.getElementById('autor').value
    const data = document.getElementById('data').value
    const gen = document.getElementById('genero').value
    const duracao = document.getElementById('duracao').value
    const capa = document.getElementById('capa').value
    const sip = document.getElementById('sipnose').value

    f.innerHTML =
        `<img src="${capa}">
        <h3>${title}</h3>
        <p>${autor}</p>
        <p>${data}</p>
        <p>${gen}</p>
        <p>${duracao}</p>
        <p>${sip}</p>
        <button class='bota' onclick="salvar(event)">Salvar</button>
        `
}

function salvar() {

    const titles = document.getElementById('titulo').value
    const autors = document.getElementById('autor').value
    const datas = document.getElementById('data').value
    const gens = document.getElementById('genero').value
    const duracaos = document.getElementById('duracao').value
    const capas = document.getElementById('capa').value
    const sips = document.getElementById('sipnose').value

    adicionado.push(capas, titles, autors, datas, gens, duracaos, sips)
    filmes.push(adicionado)

    localStorage.setItem('filmes', JSON.stringify(filmes))

}

const dados = localStorage.getItem('filmes')

if (dados) {
    filmes = JSON.parse(dados)
}

s.innerHTML = ''

for (let i = 0; i < filmes.length; i++) {

    s.innerHTML +=
        `<img src="${filmes[i][0]}">
        <h2>${filmes[i][1]}</h2>
        <p>${filmes[i][2]}</p>
        <p>${filmes[i][3]}</p>
        <p>${filmes[i][4]}</p>
        <p>${filmes[i][5]}</p>
        <p>${filmes[i][6]}</p>
        <button onclick="excluir(${i})" class='bota'>Excluir</button>
        `
}
function excluir(cont) {
    filmes.splice(cont, 1)

    localStorage.setItem('filmes', JSON.stringify(filmes))

    s.innerHTML = ''

    for (let i = 0; i < filmes.length; i++) {

        s.innerHTML +=
            `<img src="${filmes[i][0]}">
            <h3>${filmes[i][1]}</h3>
            <p>${filmes[i][2]}</p>
            <p>${filmes[i][3]}</p>
            <p>${filmes[i][4]}</p>
            <p>${filmes[i][5]}</p>
            <p>${filmes[i][6]}</p>
            <button onclick="excluir(${i})" class='bota'>Excluir</button>
            `
    }
}