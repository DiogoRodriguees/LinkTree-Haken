'strict mode';

const btnDarkMode = document.querySelector("#darkMode")
let statusDarkMode = false; 

//  Mensagens dos eventos mouseout e mouseover
const msgDarkModeLigado = () =>  btnDarkMode.textContent = "Desligar Dark Mode?"
const msgDarkModeDesligado = () => btnDarkMode.textContent = "Ligar Dark Mode?"

// Ativa e desativa a mensagem que está no botão darkMode
const ativaMsg = () => statusDarkMode ? msgDarkModeLigado() : msgDarkModeDesligado();
const apagaMsg = () => btnDarkMode.textContent = "Dark Mode";

const alteraStatusDarkMode = () => statusDarkMode = (statusDarkMode ? false : true);

const ligarDarkMode = () => {
    criaColocaImg(1)

    msgPerfil.classList.add('muda-letra')
    container.classList.add('container-darkModeAtivo')
    imgPerfil.classList.add('imgPerfil-darkModeAtivo')
    nomeUsuario.classList.add('muda-letra')
    btnDarkMode.classList.add('btnDarkMode-darkModeAtivo')

    botoes.forEach((botoes) => botoes.classList.add('botao-darkModeAtivo'))
}

const desligarDarkMode = () => {
    criaColocaImg(0)

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

btnDarkMode.addEventListener('click',darkMode)
btnDarkMode.addEventListener('mouseout',apagaMsg)
btnDarkMode.addEventListener('mouseover', ativaMsg)
