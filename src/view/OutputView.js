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
    Console.print(RESULT.THREE_MATCH(matchCount[3] ?? 0));
    Console.print(RESULT.FOUR_MATCH(matchCount[4] ?? 0));
    Console.print(RESULT.FIVE_MATCH(matchCount[5] ?? 0));
    Console.print(RESULT.BONUS_MATCH(matchCount["bonus"] ?? 0));
    Console.print(RESULT.SIX_MATCH(matchCount[6] ?? 0));
  },

  printRate(rate) {
    Console.print(MESSAGE.RATE(rate));
  },
};

export default OutPutView;
