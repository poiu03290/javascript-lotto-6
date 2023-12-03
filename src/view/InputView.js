import { Console } from "@woowacourse/mission-utils";

import Amount from "../model/Amount.js";

import { MESSAGE } from "../data/constant.js";
import Lotto from "../model/Lotto.js";
import Bonus from "../model/Bonus.js";

const InputView = {
  async amount() {
    const input = await Console.readLineAsync(MESSAGE.AMOUNT);
    const result = Amount.isAllCheck(input);

    return result;
  },

  async lotto() {
    const input = await Console.readLineAsync(MESSAGE.LOTTO);
    const result = Lotto.isAllCheck(input);

    return result;
  },

  async bonus(lotto) {
    const input = await Console.readLineAsync(MESSAGE.BONUS);
    const result = Bonus.isAllCheck(input, lotto);

    return result;
  },
};

export default InputView;
