import { MissionUtils } from "@woowacourse/mission-utils";

import Validate from '../controller/Validate.js';

import { MESSAGE } from '../data/message.js';

class UserInput {
    constructor() {
        this.validate = new Validate();
    }
    
    async amount() {
        const amount = await MissionUtils.Console.readLineAsync(`${MESSAGE.PURCHASE_AMOUNT}\n`);
        if(
            !this.validate.isCheckNumber(amount) || 
            !this.validate.isCheckProperRange(amount) || 
            !this.validate.isCheckThousand(amount)
        ) {
            return 
        }

        return amount;
    }

    async makeWinningNumbers() {
        const input = await MissionUtils.Console.readLineAsync(`\n${MESSAGE.WINNING_NUMBERS}\n`);
        const winningNumbers = input.split(',');

        if(
            !this.validate.isCheckDuplicate(winningNumbers) ||
            !this.validate.isCheckProperNumberRange(winningNumbers) || 
            !this.validate.isCheckProperNumberLength(winningNumbers)
        ) {
            return
        }

        return winningNumbers;
    }
}

export default UserInput;