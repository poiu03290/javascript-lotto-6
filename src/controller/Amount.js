import { MissionUtils } from "@woowacourse/mission-utils";

import { ERROR_MESSAGE } from '../data/message.js';

class Amount {
    constructor() {}

    static async changeIntoInt(input) {
        let amount = await Amount.#validateRepeat(input);

        return Number(amount);
    }

    static async #validateRepeat(input) {
        let amount = input;
        let isCorrect = false;

        while(!isCorrect) {
            try {
                await Amount.#validateCorrectFormat(amount);
                isCorrect = true;
            } catch(error) {
                amount = await MissionUtils.Console.readLineAsync(`${ERROR_MESSAGE.AMOUT_NUMBER_ERROR}`);
            }
        }

        return amount;
    }

    static async #validateCorrectFormat(amount) {
        if(isNaN(+amount) || +amount % 1000 !== 0 || +amount < 1000 || +amount > 20000) {
            throw 'error';
        }
    }
}

export default Amount;