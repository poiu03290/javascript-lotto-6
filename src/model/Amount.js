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

  static async isAllCheck(input) {
    let temp = input;
    while (true) {
      try {
        Amount.isCheckNumber(temp);
        Amount.isCheckThousandUnit(temp);
        Amount.isCheckAtLeastValue(temp);
        break;
      } catch (error) {
        Console.print(error.message);
        temp = await InputView.amount(MESSAGE.AMOUNT);
      }
    }

    return temp;
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
      throw new Error(ERROR_MESSAGE.AMOUNT_VALUE);
    }
  }

  getPublishedNumbers() {
    const publishedNumber = [];
    let index = 0;

    while (index < this.#count) {
      const numbers = this.#getUniqueNumbers();
      publishedNumber.push(numbers);

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
