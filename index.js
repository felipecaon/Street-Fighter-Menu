import Personagem from './scripts/personagem'
import characters from './scripts/characters'
import ListaDePersonagens from './scripts/listaDePersonagens'


const personagem = new Personagem();
const listaDePersonagens = new ListaDePersonagens();


listaDePersonagens.gerarListaDePersonagens();
personagem.pesquisarPersonagemInicial()

