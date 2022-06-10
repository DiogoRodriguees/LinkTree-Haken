const btnDarkMode = document.querySelector("#darkMode")

/* Elementos que serão modificados pelo darkMode */
const body = document.querySelector('body')
const header = document.querySelector('header')
const botoes = document.querySelectorAll('[id*=botao]')
const container = document.querySelector('.container')
const msgPerfil = document.querySelector('.msgPerfil')
const imgPerfil = document.querySelector('#imgPerfil')
const nomeUsuario = document.querySelector('.nomeUsuario')
const msgDarkMode = document.querySelector('#msgDarkMode')

let statusDarkMode = false; 
// statusDarkMode = false: DarkMode está desativado.
// statusDarkMode = true: DarkMode está ativado.


// Arrway das imagens
const imgs = [
    {'id' : '0', 'url' : './img/dia.jpg'},
    {'id' : '1', 'url' : './img/noite.jpg'}
]

// Funções com uma linha
const apagaMsg = () => msgDarkMode.textContent = "";
const ativaMsg = () => statusDarkMode ? msgDarkModeLigado() : msgDarkModeDesligado();
const alteraStatusDarkMode = () => statusDarkMode = (statusDarkMode ? false : true);

const msgDarkModeLigado = () => {
    msgDarkMode.classList.remove('parag-after')
    msgDarkMode.textContent = "Desligar Dark Mode?"
}

const msgDarkModeDesligado = () => {
    msgDarkMode.classList.add('parag-after')
    msgDarkMode.textContent = "Ligar Dark Mode?"
}

const criaColocaImg = (id)=>{
    var img = document.createElement('img')

    img.classList.add('img-dia')
    img.style.position = "absolute"
    img.src = imgs[id].url

    body.insertBefore(img, header)
}

const ligarDarkMode = () => {
    criaColocaImg(1)
    body.classList.add('darkMode')
    msgPerfil.classList.add('muda-letra')
    container.classList.add('container-after')
    imgPerfil.classList.add('imgPerfil-after')
    nomeUsuario.classList.add('muda-letra')
    btnDarkMode.classList.add('btnDarkMode-after')
    botoes.forEach((botoes) => botoes.classList.add('botao-after'))
}

const desligarDarkMode = () => {
    criaColocaImg(0)
    body.classList.remove('darkMode')
    msgPerfil.classList.remove('muda-letra')
    container.classList.remove('container-after')
    imgPerfil.classList.remove('imgPerfil-after')
    nomeUsuario.classList.remove('muda-letra')
    btnDarkMode.classList.remove('btnDarkMode-after')
    botoes.forEach((botoes) => botoes.classList.remove('botao-after'))
}

const darkMode = () => {
    apagaMsg();
    statusDarkMode ? desligarDarkMode() : ligarDarkMode();
    statusDarkMode = alteraStatusDarkMode();
}

btnDarkMode.addEventListener('mouseover', ativaMsg)
btnDarkMode.addEventListener('mouseout',apagaMsg)
btnDarkMode.addEventListener('click',darkMode)