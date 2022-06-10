const btnDarkMode = document.querySelector("#darkMode")

/* Elementos que serão modificados pelo darkMode */
const body = document.querySelector('body')
const header = document.querySelector('header')
const botoes = document.querySelectorAll('[id*=botao]')
const container = document.querySelector('.container')
const msgPerfil = document.querySelector('.msgPerfil')
const nomeUsuario = document.querySelector('.nomeUsuario')

let statusDarkMode = false; 
// statusDarkMode = false: DarkMode está desativado.
// statusDarkMode = true: DarkMode está ativado.

// Arrway das imagens
const imgs = [
    {'id' : '0', 'url' : './img/dia.jpg'},
    {'id' : '1', 'url' : './img/noite.jpg'}
]

// Funções com uma linha
const apagaMsg = () => btnDarkMode.textContent = "Dark Mode";
const ativaMsg = () => statusDarkMode ? msgDarkModeLigado() : msgDarkModeDesligado();
const alteraStatusDarkMode = () => statusDarkMode = (statusDarkMode ? false : true);

const msgDarkModeLigado = () => {
    btnDarkMode.textContent = "Desligar Dark Mode?"
}

const msgDarkModeDesligado = () => {
    btnDarkMode.textContent = "Ligar Dark Mode?"
}

const criaColocaImg = (id)=>{
    var img = document.createElement('img')
    
    img.classList.add('img-dia')
    img.src = imgs[id].url
    
    body.insertBefore(img, header)
}

const loadPage = () => {
    var img = document.createElement('img')
    img.classList.add('imgPerfil')
    img.src = './img/foto-perfil.png'
    img.id = 'imgPerfil'
    container.insertBefore(img, nomeUsuario)
    criaColocaImg(0);
}

const ligarDarkMode = () => {
    criaColocaImg(1)
    body.classList.add('darkMode')
    msgPerfil.classList.add('muda-letra')
    container.classList.add('container-darkModeAtivo')
    imgPerfil.classList.add('imgPerfil-darkModeAtivo')
    nomeUsuario.classList.add('muda-letra')
    btnDarkMode.classList.add('btnDarkMode-darkModeAtivo')
    botoes.forEach((botoes) => botoes.classList.add('botao-darkModeAtivo'))
}

const desligarDarkMode = () => {
    criaColocaImg(0)
    body.classList.remove('darkMode')
    msgPerfil.classList.remove('muda-letra')
    container.classList.remove('container-darkModeAtivo')
    imgPerfil.classList.remove('imgPerfil-darkModeAtivo')
    nomeUsuario.classList.remove('muda-letra')
    btnDarkMode.classList.remove('btnDarkMode-darkModeAtivo')
    botoes.forEach((botoes) => botoes.classList.remove('botao-darkModeAtivo'))
}

const darkMode = () => {
    apagaMsg();
    statusDarkMode ? desligarDarkMode() : ligarDarkMode();
    statusDarkMode = alteraStatusDarkMode();
}

body.addEventListener('onload', loadPage())
btnDarkMode.addEventListener('mouseover', ativaMsg)
btnDarkMode.addEventListener('mouseout',apagaMsg)
btnDarkMode.addEventListener('click',darkMode)