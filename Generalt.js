//generaltLista
import { szinekLista } from "./listak.js";
export default class Generalt{
    #generaltLista=[];
    #szElem;
    constructor(generaltLista){
        this.#generaltLista=generaltLista;
        this.#szElem=document.querySelector(".generalt .jateksor .sor")
    }
    megjelenit(){
        for (let index = 0; index < this.#generaltLista.length; index++) {
            const j = Math.floor(Math.random() * (i + 1));
            [lista[i], lista[j]] = [lista[j], lista[i]]; 
            
        }
    }
}