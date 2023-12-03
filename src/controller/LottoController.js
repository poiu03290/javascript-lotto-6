import Amount from "../model/Amount.js";
import InputView from "../view/InputView.js";

class LottoController {
  #amount;
  #lotto;
  #bonus;

  async RequestAmount() {
    this.#amount = await InputView.amount();
    this.#lotto = await InputView.lotto();
    this.#bonus = await InputView.bonus(this.#lotto);
  }
}
export default LottoController;
