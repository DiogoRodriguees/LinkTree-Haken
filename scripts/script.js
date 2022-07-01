'strict mode';

const body = document.querySelector('body')
const header = document.querySelector('header')
const botoes = document.querySelectorAll('[id*=botao]')
const container = document.querySelector('.container')
const msgPerfil = document.querySelector('.msgPerfil')
const nomeUsuario = document.querySelector('.nomeUsuario')

// Arrway com imagens
const imgs = [
    {'id' : '0', 'url' : './img/darkModeInativo.jpg'},
    {'id' : '1', 'url' : './img/darkMode.jpg'}
]

// Coloca a imagem que está na posição recebida por parametro
const criaColocaImg = (id)=>{
    var img = document.createElement('img')
    
    img.classList.add('img-background')
    img.src = imgs[id].url
    body.insertBefore(img, header)
}

// Coloca a primeira imagem ao carregar a página
const loadPage = () => {
    var img = document.createElement('img')

    img.id = 'imgPerfil'
    img.src = './img/foto-perfil.png'
    img.classList.add('imgPerfil')
    container.insertBefore(img, nomeUsuario)
    
    criaColocaImg(0);
}

body.addEventListener('onload', loadPage())