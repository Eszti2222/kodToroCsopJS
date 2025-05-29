import Tipp from "./Tipp.js";
import Visszajelzes from "./Visszajelzes.js";
/*pédányosítsa a TIPP és VIsszajelzés oszt a megfelelo listával */
export default class JatekSor {
  #tippListaM = [];
  #visszajelzesListaM = [];
  #szElem;
  constructor(tippListaM, visszajelzesListaM, szElem) {
    this.#tippListaM = tippListaM;
    this.#visszajelzesListaM = visszajelzesListaM;
    this.#szElem =szElem;
    this.#megjelenit();

  }
  #megjelenit() {
    let html = `<div class="jateksor"></div>`;

      this.#szElem.insertAdjacentHTML("beforeend", html);
      this.sorSzuloElem= document.querySelector(".jatekter .jateksor:last-child");
      new Visszajelzes(this.#visszajelzesListaM, this.sorSzuloElem)
      new Tipp(this.#tippListaM, this.sorSzuloElem)
    
  }
}
