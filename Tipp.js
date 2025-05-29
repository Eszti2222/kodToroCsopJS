export default class Tipp {
  #tippListaM = [];
  #szElem;
  constructor(tippListaM, szElem) {
    this.#tippListaM = tippListaM;
    this.#szElem = szElem;
    this.#megjelenit();
  }

  #megjelenit() {
    let html = `<div class="sor">
                  <div class="elem" style="background-color:${this.#tippListaM[0]}"}></div>
                  <div class="elem" style="background-color:${this.#tippListaM[1]}"}></div>
                  <div class="elem" style="background-color:${this.#tippListaM[2]}"}></div>
                  <div class="elem" style="background-color:${this.#tippListaM[3]}"}></div>
                </div>`;

    this.#szElem.insertAdjacentHTML("beforeend", html);
  }
}
