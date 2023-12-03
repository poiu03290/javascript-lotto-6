import { Console } from "@woowacourse/mission-utils";

import { MESSAGE, RESULT } from "../data/constant.js";

const OutPutView = {
  printLotto(publishedLotto) {
    Console.print(MESSAGE.PUBLISH(publishedLotto.length));
    publishedLotto.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  },

  printResult(matchCount) {
    Console.print(matchCount);
  },

  printRate(rate) {
    Console.print(MESSAGE.RATE(rate));
  },
};

export default OutPutView;
