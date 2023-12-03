import { Console } from "@woowacourse/mission-utils";

import Amount from "../model/Amount.js";
import Lotto from "../model/Lotto.js";
import Bonus from "../model/Bonus.js";

import { MESSAGE } from "../data/constant.js";

const InputView = {
  async amount() {
    const input = await Console.readLineAsync(MESSAGE.AMOUNT);
    const result = Amount.isAllCheck(input);

    return result;
  },

  async lotto() {
    try {
      const input = await Console.readLineAsync(MESSAGE.LOTTO);
      const split = input.split(",").map((num) => Number(num));
      Lotto.isAllCheck(split);

      return split;
    } catch (error) {
      Console.print(error.message);
      return InputView.lotto();
    }
  },

  async bonus(lotto) {
    const input = await Console.readLineAsync(MESSAGE.BONUS);
    const result = Bonus.isAllCheck(input, lotto);

    return result;
  },
};

export default InputView;
