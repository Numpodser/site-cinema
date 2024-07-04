let array = []
let todos = []
const div = document.getElementById('Prota')
// const antesD = document.getElementById('antes')

function addProta(evento) {
    evento.preventDefault()
    const nome = document.getElementById('nome').value
    const ator = document.getElementById('ator').value
    const foto = document.getElementById('foto').value
    const skill = document.getElementById('skill').value
    const descri = document.getElementById('descri').value

    // divFoto.innerHTML = foto
    div.innerHTML += `
    <div class = 'item'>
    <img class="ProtaFoto" src="${foto}">
    <h1>${ator}</h1>
    <p> ${nome}</p>
    <p> ${skill}</p>
    <p> ${descri} </p>
    <button onclick="salvar()">Salvar</button>
    </div>
`
}

function salvar() {

    const nomeSave = document.getElementById('nome').value
    const atorSave = document.getElementById('ator').value
    const fotoSave = document.getElementById('foto').value
    const skillSave = document.getElementById('skill').value
    const descriSave = document.getElementById('descri').value

    array.push(fotoSave, atorSave, nomeSave, skillSave, descriSave)
    todos.push(array)

    localStorage.setItem('Protagonistas', JSON.stringify(todos))
}

const dadosSalvos = localStorage.getItem('Protagonistas')

if (dadosSalvos) {
    todos = JSON.parse(dadosSalvos)
}

div.innerHTML = ''

for (let i = 0; i < todos.length; i++) {

    div.innerHTML += `
    <div class = 'item'>
    <img class="ProtaFoto"src ="${todos[i][0]}">
    <h1>${todos[i][1]}</h1>
    <p> ${todos[i][2]} </p>
    <p> ${todos[i][3]} </p>
    <p> ${todos[i][4]} </p>
    <button onclick="excluir(${i})">excluir</button>
    </div>
`
}


function excluir(indice) {
    todos.splice(indice, 1)
    // atualizar localStorage
    localStorage.setItem('Protagonistas', JSON.stringify(todos))
    // limpar div
    div.innerHTML = ''

    for (let i = 0; i < todos.length; i++) {

        div.innerHTML += `
        <div class = 'item'>
        <img class="ProtaFoto"src ="${todos[i][0]}">
        <h1>${todos[i][1]}</h1>
        <p> ${todos[i][2]} </p>
        <p> ${todos[i][3]} </p>
        <p> ${todos[i][4]} </p>
        <button onclick="excluir(${i})">excluir</button>
        </div>
   `
    }

}
// limpar div

// repetição para alimentar a div

