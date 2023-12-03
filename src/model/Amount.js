import { Console } from "@woowacourse/mission-utils";

import { MESSAGE, ERROR_MESSAGE } from "../data/constant.js";

class Amount {
  #amount;

  constructor(amount) {
    this.#isAllCheck(amount);
    this.#amount = amount;
  }

  async #isAllCheck(amount) {
    let input = amount;
    while (true) {
      try {
        Amount.isCheckNumber(input);
        Amount.isCheckThousandUnit(input);
        Amount.isCheckAtLeastValue(input);
        break;
      } catch (error) {
        Console.print(error.message);
        input = await Console.readLineAsync(MESSAGE.AMOUNT);
      }
    }
  }

  static isCheckNumber(input) {
    if (isNaN(input)) {
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

  test() {
    console.log("ss", this.#amount);
  }
}
export default Amount;
