import LottoController from "./controller/LottoController.js";

class App {
  async play() {
    const controller = new LottoController();
    controller.RequestAmount();
  }
}

export default App;
