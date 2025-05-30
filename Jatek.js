import JatekSor from "./JatekSor.js";
import Generalt from "./Generalt.js";
import {
  szinekLista,
  generaltLista,
  visszajelzesListaM,
  tippListaM,
} from "./listak.js";
//tippListaM *10
//visszajelzesListaM *10

export default class Jatek {
  #szinekLista = szinekLista;
  #generaltLista = generaltLista;
  #visszajelzesListaM = visszajelzesListaM;
  #tippListaM = tippListaM;
  #jatekter;
  #sor = 0;
  #oszlop = 0;
  #szin1Elem;
  #szin2Elem;
  #szin3Elem;
  #szin4Elem;
  #szin5Elem;
  #szin6Elem;
  constructor() {
    this.#jatekter = document.querySelector(".jatekter");
    this.generaltListaEloallit();
    this.#szin1Elem = document.querySelector(".szin:nth-child(1)");
    this.#szin2Elem = document.querySelector(".szin:nth-child(2)");
    this.#szin3Elem = document.querySelector(".szin:nth-child(3)");
    this.#szin4Elem = document.querySelector(".szin:nth-child(4)");
    this.#szin5Elem = document.querySelector(".szin:nth-child(5)");
    this.#szin6Elem = document.querySelector(".szin:nth-child(6)");
    this.megjelenit();
  }
  megjelenit() {
    new Generalt(this.#generaltLista);

    for (let index = 0; index < 10; index++) {
      new JatekSor(
        this.#tippListaM[index],
        this.#visszajelzesListaM[index],
        this.#jatekter
      );
    }
  }
  generaltListaEloallit() {
    //4véletlen szín a listából
    while (this.#generaltLista.length < 4) {
      let veletlen = Math.floor(Math.random() * 6);
      let aktSzin = this.#szinekLista[veletlen];
      if (this.#generaltLista.indexOf(aktSzin) < 0) {
        this.#generaltLista.push(aktSzin);
      }
    }
  }

  szin1Esemenykezelo() {}
  szin2Esemenykezelo() {}
  szin3Esemenykezelo() {}
  szin4Esemenykezelo() {}
  szin5Esemenykezelo() {}
  szin6Esemenykezelo() {}
  visszajelzes() {}
}
