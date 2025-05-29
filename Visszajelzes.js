export default class Visszajelzes{
    #visszajelzesLista = [];
  #szElem;
  constructor(visszajelzesLista) {
    this.#visszajelzesLista = visszajelzesLista;
    this.#szElem = document.querySelector(".jatekter .jateksor .visszajelzes .elem");
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