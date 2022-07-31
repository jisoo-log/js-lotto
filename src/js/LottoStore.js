export class LottoStore {
  #lottos = [];
  #winningNumber = [];
  #bonusNumber = 0;

  get lottos() {
    return this.#lottos;
  }
  set lottos(lottos) {
    this.#lottos = lottos;
  }
  set winningNumber(numbers) {
    this.#winningNumber = numbers.sort();
  }
  set bonusNumber(number) {
    this.#bonusNumber = number;
  }
}
