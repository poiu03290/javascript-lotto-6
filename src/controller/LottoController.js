import Amount from "../model/Amount.js";
import InputView from "../view/InputView.js";

class LottoController {
  async start() {
    const input = await InputView.amount();
    const amount = new Amount(input);
    console.log(amount.getPublishedNumbers());
    const lotto = await InputView.lotto();
    console.log(lotto);
  }
}
export default LottoController;
