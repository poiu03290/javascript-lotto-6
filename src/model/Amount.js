import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

import InputView from "../view/InputView.js";

import { MESSAGE, ERROR_MESSAGE } from "../data/constant.js";

class Amount {
  #amount;
  #count;

  constructor(amount) {
    this.#amount = amount;
    this.#count = this.#amount / 1000;
  }

  static async isAllCheck(amount) {
    let input = amount;
    while (true) {
      try {
        Amount.isCheckNumber(input);
        Amount.isCheckThousandUnit(input);
        Amount.isCheckAtLeastValue(input);
        break;
      } catch (error) {
        Console.print(error.message);
        input = await InputView.amount(MESSAGE.AMOUNT);
      }
    }

    return input;
  }

  static isCheckNumber(input) {
    if (input.length < 1 || isNaN(input)) {
      throw new Error(ERROR_MESSAGE.NUMBER);
    }
  }

  static isCheckThousandUnit(input) {
    if (Number(input) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.THOUSAND);
    }
  }

  static isCheckAtLeastValue(input) {
    if (Number(input) < 1000) {
      throw new Error(ERROR_MESSAGE.VALUE);
    }
  }

  getPublishedNumbers() {
    const publishedNumber = [];
    let index = 0;

    while (index < this.#count) {
      const test = this.#getUniqueNumbers();
      publishedNumber.push(test);

      index += 1;
    }

    return publishedNumber;
  }

  #getUniqueNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return numbers.sort((a, b) => a - b);
  }
}
export default Amount;
