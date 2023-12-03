import Bonus from "../src/model/Bonus.js";

describe("보너스 클래스 테스트", () => {
  test("숫자가 아닌 값이 온다면 에러가 발생한다.", () => {
    const input = "10s";
    expect(() => {
      Bonus.isCheckNumber(input);
    }).toThrow(Error);
  });

  test("1 ~ 45 숫자를 입력하지 않으면 에러가 발생한다.", () => {
    const input = 46;
    expect(() => {
      Bonus.isCheckProperValue(input);
    }).toThrow(Error);
  });

  test("이미 입력한 로또 번호와 중복된 보너스 번호를 입력하면 에러가 발생한다.", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const input = 6;
    expect(() => {
      Bonus.isCheckDuplicatedValue(input, lotto);
    }).toThrow(Error);
  });
});
