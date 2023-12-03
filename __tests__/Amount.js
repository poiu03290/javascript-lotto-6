import Amount from "../src/model/Amount.js";

describe("금액 클래스 테스트", () => {
  test("입력한 금액에 맞춰 로또 발행 개수가 정해진다.", () => {
    const amount = new Amount("4000");
    expect(amount.getPublishedNumbers().length).toBe(4);
  });
});
