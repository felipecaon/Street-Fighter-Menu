import Personagem from './personagem'
import characters from './characters'
const personagem = new Personagem();

var teclas = {
  37: 'esquerda',
  38: 'cima',
  39: 'direita',
  40: 'baixo',
  65: 'a',
  66: 'b'
};

if(localStorage.getItem("desbloqueado")){
  ativarPersonagemNovo();
}


var konamiCode = ['cima', 'cima', 'baixo', 'baixo', 'esquerda', 'direita', 'esquerda', 'direita', 'b', 'a'];
var posicaoDoCheat = 0;

document.addEventListener('keydown', function (e) {
  var key = teclas[e.keyCode];
  var requiredKey = konamiCode[posicaoDoCheat];
  if (key == requiredKey) {
    posicaoDoCheat++;
    if (posicaoDoCheat == konamiCode.length) {
      if(!localStorage.getItem("desbloqueado")){
          ativarPersonagemNovo();
      }
      posicaoDoCheat = 0;
    }
  } else {
    posicaoDoCheat = 0;
  }
});

function ativarPersonagemNovo() {
  localStorage.setItem("desbloqueado", true);
  mensagemDesbloqueio();
  adicionarImagem();
  document.getElementsByClassName("character")[9].addEventListener("click", function () {
    personagem.personagensDisponiveis(characters[9].name)
  });
}

function adicionarImagem(){
  let img = document.createElement('img')
  img.src = characters[9].smallImg
  document.getElementsByClassName('character')[9].appendChild(img)
}
function mensagemDesbloqueio() {
  document.getElementsByClassName('novoPersonagem')[0].classList.add("fadeout");
  document.getElementsByClassName("novoPersonagem")[0].style.setProperty('visibility', 'visible');
  document.getElementsByClassName("character")[9].classList.remove("secreto");
}
