import Amount from "../src/model/Amount.js";

describe("금액 클래스 테스트", () => {
  test("입력한 금액에 맞춰 로또 발행 개수가 정해진다.", () => {
    const amount = new Amount("4000");
    expect(amount.getPublishedNumbers().length).toBe(4);
  });

  test("숫자가 아닌 값이 입력된다면 에러가 발생한다.", () => {
    const input = "100s";
    expect(() => {
      Amount.isCheckNumber(input);
    }).toThrow(Error);
  });

  test("1000단위로 입력하지 않으면 에러가 발생한다.", () => {
    const input = "1500";
    expect(() => {
      Amount.isCheckThousandUnit(input);
    }).toThrow(Error);
  });

  test("1000 이상 입력하지 않으면 에러가 발생한다.", () => {
    const input = "500";
    expect(() => {
      Amount.isCheckAtLeastValue(input);
    }).toThrow(Error);
  });
});
