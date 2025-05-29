export default class Visszajelzes{
    #visszajelzesLista = [];
  #szElem;
  constructor(tippLista) {
    this.#visszajelzesLista = tippLista;
    this.#szElem = document.querySelector(".jatekter .jateksor .sor .elem");
    this.#megjelenit();
  }

  #megjelenit() {
    this.#szElem.innerHTML = "";
    for (let index = 0; index < this.#visszajelzesLista.length; index++) {
      const element = this.#visszajelzesLista[index];
      this.#szElem.insertAdjacentHTML("beforeend", element);
    }
  }
}