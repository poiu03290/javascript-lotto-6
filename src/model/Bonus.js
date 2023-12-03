import { Console } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";

import { MESSAGE, ERROR_MESSAGE } from "../data/constant.js";
import Lotto from "./Lotto.js";

class Bonus {
  constructor() {
    this.lotto = new Lotto();
  }

  static async isAllCheck(input, lotto) {
    let temp = input;
    while (true) {
      try {
        Bonus.isCheckNumber(temp);
        Bonus.isCheckProperValue(temp);
        Bonus.isCheckDuplicatedValue(temp, lotto);
        break;
      } catch (error) {
        Console.print(error.message);
        temp = await InputView.bonus(MESSAGE.BONUS);
      }
    }

    return temp;
  }

  static isCheckNumber(input) {
    if (input.length < 1 || isNaN(input)) {
      throw new Error(ERROR_MESSAGE.NUMBER);
    }
  }

  static isCheckProperValue(input) {
    if (Number(input) < 1 || Number(input) > 45) {
      throw new Error(ERROR_MESSAGE.LOTTO_VALUE);
    }
  }

  static isCheckDuplicatedValue(input, lotto) {
    if (lotto.includes(input)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }
}

export default Bonus;
