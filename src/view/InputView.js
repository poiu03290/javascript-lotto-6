import { Console } from "@woowacourse/mission-utils";

import Amount from "../model/Amount.js";

import { MESSAGE } from "../data/constant.js";
import Lotto from "../model/Lotto.js";

const InputView = {
  async amount() {
    const input = await Console.readLineAsync(MESSAGE.AMOUNT);
    const result = Amount.isAllCheck(input);

    return result;
  },

  async lotto() {
    const input = await Console.readLineAsync(MESSAGE.LOTTO);
    const result = Lotto.isAllCehckNum(input);

    return result;
  },
};

export default InputView;
