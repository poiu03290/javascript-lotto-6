import Lotto from "../src/model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 문자가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "s"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1~45 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  describe("로또 번호 개수 맞추기 테스트", () => {
    let lotto;

    beforeEach(() => {
      lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    });

    test("5등일 경우인데, 보너스 번호를 맞힐 경우 테스트", () => {
      const publishedLotto = [[1, 2, 3, 4, 5, 7]];
      const bonus = 7;
      const matchCount = { bonus: 1 };
      expect(lotto.getMatchCount(publishedLotto, bonus)).toEqual(matchCount);
    });

    test("5등일 경우인데, 보너스 번호를 못 맞힐 경우 테스트", () => {
      const publishedLotto = [[1, 2, 3, 4, 5, 7]];
      const bonus = 8;
      const matchCount = { 5: 1 };
      expect(lotto.getMatchCount(publishedLotto, bonus)).toEqual(matchCount);
    });

    test("3개를 맞혔을 경우 테스트", () => {
      const publishedLotto = [[1, 2, 3, 10, 11, 12]];
      const bonus = 8;
      const matchCount = { 3: 1 };
      expect(lotto.getMatchCount(publishedLotto, bonus)).toEqual(matchCount);
    });

    test("하나도 못 맞혔을 경우 테스트", () => {
      const publishedLotto = [[10, 11, 12, 13, 14, 15]];
      const bonus = 8;
      const matchCount = {};
      expect(lotto.getMatchCount(publishedLotto, bonus)).toEqual(matchCount);
    });
  });
});
