import characters from './characters'
import Personagem from './personagem'


const personagem = new Personagem();

class ListaDePersonagens{

    gerarListaDePersonagens(){
        for (let i = 0; i < characters.length-1; i++) {
            const character = characters[i];
            personagem._criarElementoImagemDentroDeClasse('character', i, character.smallImg, character)
         }
    }
}

export default ListaDePersonagens