export default class Tipp {
  #tippLista = [];
  #szElem;
  constructor(tippLista) {
    this.#tippLista = tippLista;
    this.#szElem = document.querySelector(".jatekter .jateksor .sor .elem");
    this.#megjelenit();
  }

  #megjelenit() {
    this.#szElem.innerHTML = "";
    for (let index = 0; index < this.#tippLista.length; index++) {
      const element = this.#tippLista[index];
      this.#szElem.insertAdjacentHTML("beforeend", element);
    }
  }
}
