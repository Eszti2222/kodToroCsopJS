export default class Visszajelzes {
  #visszajelzesListaM = [];
  #szElem;
  constructor(visszajelzesListaM, szElem) {
    this.#visszajelzesListaM = visszajelzesListaM;
    this.#szElem = szElem;
    this.#megjelenit();
  }

  #megjelenit() {
    let html = `<div class="visszajelzes">
                  <div class="vElem" style="background-color:${this.#visszajelzesListaM[0]}"}></div>
                  <div class="vElem" style="background-color:${this.#visszajelzesListaM[1]}"}></div>
                  <div class="vElem" style="background-color:${this.#visszajelzesListaM[2]}"}></div>
                  <div class="vElem" style="background-color:${this.#visszajelzesListaM[3]}"}></div>
                </div>`;

    this.#szElem.insertAdjacentHTML("beforeend", html);
  }
}
