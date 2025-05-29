import Tipp from "./Tipp.js";
import Visszajelzes from "./Visszajelzes.js";

export default class JatekSor{
    #tippLista=[];
    #visszajelzesLista=[];
    #szElem;
    constructor(tippLista,visszajelzesLista,szElem){
        this.#tippLista=tippLista;
        this.#visszajelzesLista= visszajelzesLista;
        this.#szElem=szElem;
    }
}