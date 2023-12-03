import Amount from "../model/Amount.js";
import Lotto from "../model/Lotto.js";
import Result from "../model/Result.js";

import InputView from "../view/InputView.js";
import OutPutView from "../view/OutputView.js";

class LottoController {
  #amount;
  #publishedLotto;
  #lotto;
  #bonus;

  async requestAmount() {
    this.#amount = await InputView.amount();

    const amount = new Amount(this.#amount);
    this.#publishedLotto = amount.getPublishedNumbers();
    OutPutView.printLotto(this.#publishedLotto);

    await this.requestLotto();
  }

  async requestLotto() {
    this.#lotto = await InputView.lotto();
    await this.requestBonus();
  }

  async requestBonus() {
    this.#bonus = await InputView.bonus(this.#lotto);
    this.compareNumber();
  }

  compareNumber() {
    const lotto = new Lotto(this.#lotto);
    const matchCount = lotto.getMatchCount(this.#publishedLotto, this.#bonus);
    this.winningLotto(matchCount);
  }

  winningLotto(matchCount) {
    const result = new Result();
    result.calculrateSum(matchCount);
    OutPutView.printResult(matchCount);
    OutPutView.printRate(result.calculrateRate(this.#amount));
  }
}
export default LottoController;
