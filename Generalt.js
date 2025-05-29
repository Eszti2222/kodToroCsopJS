//generaltLista
import { szinekLista } from "./listak.js";
export default class Generalt{
    #generaltLista=[];
    #szElem;
    constructor(generaltLista){
        this.#generaltLista=generaltLista;
        this.#szElem=document.querySelector(".generalt.jateksor.sor")
        this.#megjelenit();
        this.#kever();
    }
    #kever(){
        for (let i = this.#generaltLista.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [generaltLista[i], generaltLista[j]] = [generaltLista[j], generaltLista[i]];
          }
          console.log(generaltLista);
    }
    #megjelenit(){
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
    }
}