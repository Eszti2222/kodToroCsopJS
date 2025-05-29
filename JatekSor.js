import Tipp from "./Tipp.js";
import Visszajelzes from "./Visszajelzes.js";

export default class JatekSor{
    #tippLista=[];
    #visszajelzesLista=[];
    #szElem=[];
    constructor(tippLista,visszajelzesLista,szElem){
        this.#tippLista=tippLista;
        this.#visszajelzesLista= visszajelzesLista;
        this.#szElem=document.querySelector(".jatekter.jateksor");
        this.#megjelenit();
    }
    #megjelenit(){
        for (let index = 0; index < this.#szElem.length; index++) {
            const element = this.#szElem[index];
            this.#szElem.insertAdjacentHTML("beforeend", element);
            
        }
    }
}