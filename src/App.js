import Lotto from './Lotto.js';
import UserInput from './view/userInput.js';
import makeLottoNumbers from './controller/makeLottoNumbers.js';

class App {

  constructor() {
    this.UserInput = new UserInput();
  }

  async play() {
    const amount = await this.UserInput.RequestAmount();
    const lottoNumbers = makeLottoNumbers(amount);
    const winningNumbers = await this.UserInput.RequestWinningNumbers();
    this.lotto = new Lotto(amount, lottoNumbers, winningNumbers);
    this.lotto.print();
  }
}

export default App;
