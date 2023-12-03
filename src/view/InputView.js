import { Console } from "@woowacourse/mission-utils";

import Amount from "../model/Amount.js";

import { MESSAGE } from "../data/constant.js";

const InputView = {
  async amount() {
    const input = await Console.readLineAsync(MESSAGE.AMOUNT);

    return new Amount(input);
  },
};

export default InputView;
