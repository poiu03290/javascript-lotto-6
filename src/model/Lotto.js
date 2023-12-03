import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR_MESSAGE } from "../data/constant.js";
import InputView from "../view/InputView.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  static async isAllCheck(input) {
    let temp = input;
    while (true) {
      try {
        const lotto = temp.split(",");
        Lotto.isTryValidate(lotto);
        break;
      } catch (error) {
        Console.print(error.message);
        temp = await InputView.lotto(MESSAGE.LOTTO);
      }
    }

    return temp;
  }

  static isTryValidate(lotto) {
    Lotto.isCheckProperLength(lotto);
    Lotto.isCheckDuplicatedNumber(lotto);
    lotto.forEach((number) => {
      Lotto.isCheckNumber(number);
      Lotto.isCheckProperValue(number);
    });
  }

  static isCheckProperLength(lotto) {
    if (lotto.length !== 6) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
  }

  static isCheckDuplicatedNumber(lotto) {
    if (lotto.length !== new Set(lotto).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  static isCheckNumber(number) {
    if (number.length < 1 || isNaN(number)) {
      throw new Error(ERROR_MESSAGE.NUMBER);
    }
  }

  static isCheckProperValue(number) {
    if (Number(number) < 1 || Number(number) > 45) {
      throw new Error(ERROR_MESSAGE.LOTTO_VALUE);
    }
  }

  getMatchCount(publishedLotto, bonus) {
    let matchCount = [];

    publishedLotto.forEach((lotto) => {
      let count = this.getMatchCountByLotto(lotto);
      if (count < 3) return;
      if (count === 5 && this.compareBonus(lotto, bonus)) {
        return matchCount.push("bonus");
      }
      matchCount.push(count);
    });

    return this.#modifyObj(matchCount);
  }

  getMatchCountByLotto(lotto) {
    const count = lotto.filter((num) => this.#numbers.includes(num)).length;

    return count;
  }

  compareBonus(lotto, bonus) {
    if (lotto.includes(Number(bonus))) {
      return true;
    }

    return false;
  }

  #modifyObj(matchCount) {
    return matchCount.reduce((object, count) => {
      if (count in object) {
        return (object[count] += 1);
      }
      object[count] = 1;

      return object;
    }, {});
  }
}

export default Lotto;
