const btnDarkMode = document.querySelector("#darkMode")

/* Elementos que serão modificados pelo darkMode */
const body = document.querySelector('body')
const container = document.querySelector('.container')
const msgPerfil = document.querySelector('.msgPerfil')
const botoes = document.querySelectorAll('[id*=botao]')
const nomeUsuario = document.querySelector('.nomeUsuario')
const msgDarkMode = document.querySelector('#msgDarkMode')

let statusDarkMode = false; 
// statusDarkMode = false: DarkMode está desativado.
// statusDarkMode = true: DarkMode está ativado.

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

const ativaDarkMode = () => {
    body.classList.add('darkMode')
    msgPerfil.classList.add('muda-letra')
    nomeUsuario.classList.add('muda-letra')
    container.classList.add('container-after')
    btnDarkMode.classList.add('btnDarkMode-after')
    botoes.forEach((botoes) => botoes.classList.add('botao-after'))
}

const desativaDarkMode = () => {
    body.classList.remove('darkMode')
    msgPerfil.classList.remove('muda-letra')
    nomeUsuario.classList.remove('muda-letra')
    container.classList.remove('container-after')
    btnDarkMode.classList.remove('btnDarkMode-after')
    botoes.forEach((botoes) => botoes.classList.remove('botao-after'))
}

const darkMode = () => {
    apagaMsg();
    statusDarkMode ? desativaDarkMode() : ativaDarkMode();
    statusDarkMode = alteraStatusDarkMode();
}

btnDarkMode.addEventListener('mouseover', ativaMsg)
btnDarkMode.addEventListener('mouseout',apagaMsg)
btnDarkMode.addEventListener('click',darkMode)