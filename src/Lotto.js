import { MissionUtils } from "@woowacourse/mission-utils";

import { ERROR_MESSAGE } from './data/message.js';

class Lotto {
  #numbers;

  constructor(number) {
    this.#validate(number);
    this.#numbers = number;
  };

  get lottoNumber() {
    return this.#numbers;
  }

  #validate(numbers) {
    if(numbers.length !== 6) {
      MissionUtils.Console.print(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
      throw new Error(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
    }
    if(new Set(numbers).size !== numbers.length) {
      MissionUtils.Console.print(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
      throw new Error(`${ERROR_MESSAGE.NUMBER_DUPLICATED_ERROR}`);
    }
    for(const num of numbers) {
      if(+num < 1 || +num > 45) {
        MissionUtils.Console.print(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
        throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE_ERROR}`);
      }
    }
  }
}

export default Lotto;

