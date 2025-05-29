//generaltLista
import { szinekLista } from "./listak.js";
export default class Generalt{
    #generaltLista=[];
    #szElem;
    constructor(generaltLista,szElem){
        this.#generaltLista=generaltLista;
        this.#szElem=szElem
    }
    megjelenit(){
        let html = `<div class="visszajelzes"></div>
                    <div class="sor">
                        <div class="elem" style="background-color:${this.#generaltLista[0]}"}></div>
                        <div class="elem" style="background-color:${this.#generaltLista[1]}"}></div>
                        <div class="elem" style="background-color:${this.#generaltLista[2]}"}></div>
                        <div class="elem" style="background-color:${this.#generaltLista[3]}"}></div>
                    </div>`;
        this.#szElem.insertAdjacentHTML("beforeend", html);
        for (let index = 0; index < this.#generaltLista.length; index++) {
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