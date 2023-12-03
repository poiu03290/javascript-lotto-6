import InputView from "./view/InputView.js";

class App {
  async play() {
    const amount = await InputView.amount();
  }
}

export default App;
