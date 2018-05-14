import characters from './characters'


class Personagem {
    constructor() {
    }

    _getPersonagemAtivo(lutador) {
        return lutador.active === true;
    }

    _adicionarTextoATelaPorID(id, informacao) {
        document.getElementById(id).innerText = informacao
    }

    personagensDisponiveis(nome) {
        switch (nome) {
            case "Ryu":
                this._adicionarLutadorATela(characters[0], 0)
                break;
            case "Ken":
                this._adicionarLutadorATela(characters[1], 1)
                break;
            case "Chun-Li":
                this._adicionarLutadorATela(characters[2], 2)
                break;
            case "Dee Jay":
                this._adicionarLutadorATela(characters[3], 3)
                break;
            case "Cammy":
                this._adicionarLutadorATela(characters[4], 4)
                break;
            case "Sagat":
                this._adicionarLutadorATela(characters[5], 5)
                break;
            case "Zangief":
                this._adicionarLutadorATela(characters[6], 6)
                break;
            case "Akuma":
                this._adicionarLutadorATela(characters[7], 7)
                break;
            case "Blanka":
                this._adicionarLutadorATela(characters[8], 8)
                break;
            case "Silvio":
                this._adicionarLutadorATela(characters[9], 9)
                break;
            default:
                break;
        }
    }

    _setBackgroundLinear(lutador) {
        if (lutador.birth === 'us' || lutador.birth === 'gb' || lutador.birth === 'ru' || lutador.birth === 'th') {
            document.getElementsByClassName("background")[0].style.setProperty('--background-color', `linear-gradient(to bottom,rgba(50, 50, 50, 0.6), rgb(23, 36, 111))`);
        } else if (lutador.birth === 'jp' || lutador.birth === 'cn') {
            document.getElementsByClassName("background")[0].style.setProperty('--background-color', `linear-gradient(to bottom,rgba(50, 50, 50, 0.6), rgba(67, 2, 3, 1))`);
        } else if (lutador.birth === 'jm' || lutador.birth === 'br') {
            document.getElementsByClassName("background")[0].style.setProperty('--background-color', `linear-gradient(to bottom,rgba(50, 50, 50, 0.6), rgb(30, 86, 58))`);
        }
    }

        
    _adicionarLutadorATela(lutador, posicao) {
        for (let i = 0; i < 10; i++) {
            document.getElementsByClassName('character')[i].classList.remove("active");
            document.getElementsByClassName('character')[i].classList.remove("blink");
            document.getElementsByClassName('nomePersonagem')[i].innerText = ''
        }
        document.getElementsByClassName("background")[0].style.setProperty('--background-image', `url(assets/images/flags/${lutador.birth}.png`);
        this._setBackgroundLinear(lutador)
        this._criarElementoImagemDentroDeClasse('colunaPersonagem', 0, lutador.largeImg, lutador)
        this._adicionarTextoATelaPorID('nome', lutador.name)
        this._adicionarTextoATelaPorID('altura', lutador.height)
        this._adicionarTextoATelaPorID('fighting-style', lutador.fighting)
        this._adicionarTextoATelaPorID('skills', lutador.skills)
        document.getElementsByClassName('nomePersonagem')[posicao].innerText = lutador.name
        document.getElementsByClassName('character')[posicao].classList.add("active");
        document.getElementsByClassName('character')[posicao].classList.add("blink");
    }


    _criarElementoImagemDentroDeClasse(nomeClasse, posicaoClasse, informacao, lutador) {
        const self = this;
        let img = document.createElement('img')
        img.src = informacao
        if (lutador.name !== "Silvio") {
            if (lutador.name !== undefined) {
                img.addEventListener("click", function () {
                    self.personagensDisponiveis(lutador.name)
                });
            }
        }

        if (nomeClasse === 'character') {
            document.getElementsByClassName(nomeClasse)[posicaoClasse].appendChild(img)
        } else {

            if (colunaPersonagem.childNodes.length > 0) {
                let myNode = document.getElementById("colunaPersonagem");
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
            }

            document.getElementById(nomeClasse).appendChild(img)
        }
    }

    pesquisarPersonagemInicial() {
        for (let i = 0; i < characters.length; i++) {
            const character = characters[i];
            if (this._getPersonagemAtivo(character)) {
                this._adicionarLutadorATela(character, i)
                break;
            }
        }
    }

}

export default Personagem