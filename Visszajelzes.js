export default class Visszajelzes {
  #visszajelzesLista = [];
  #szElem;
  constructor(visszajelzesLista) {
    this.#visszajelzesLista = visszajelzesLista;
    this.#szElem = document.querySelectorAll(
      ".jatekter .jateksor .visszajelzes .vElem"
    );
    this.#megjelenit();
  }

  #megjelenit() {
    this.#szElem.forEach((elem, index) => {
      elem.innerHTML = "";
      if (this.#visszajelzesLista[index]) {
        elem.insertAdjacentHTML("beforeend", this.#visszajelzesLista[index]);
      }
    });
  }
}
