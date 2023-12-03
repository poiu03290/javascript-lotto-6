import { PRIZE } from "../data/constant.js";

class Result {
  #sum = 0;

  calculrateSum(matchCount) {
    Object.keys(matchCount).forEach((key) => {
      this.switch(key, matchCount);
    });
    return this.#sum;
  }

  calculrateRate(amount) {
    return ((this.#sum / amount) * 100).toFixed(1).toLocaleLowerCase();
  }

  switch(key, matchCount) {
    switch (key) {
      case "3":
        this.#sum += matchCount[key] * PRIZE.THREE;
        break;
      case "4":
        this.#sum += matchCount[key] * PRIZE.FOUR;
        break;
      case "5":
        this.#sum += matchCount[key] * PRIZE.FIVE;
        break;
      case "bonus":
        this.#sum += matchCount[key] * PRIZE.BONUS;
        break;
      case "6":
        this.#sum += matchCount[key] * PRIZE.SIX;
        break;
    }
  }
}

export default Result;
