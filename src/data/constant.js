const MESSAGE = Object.freeze({
  AMOUNT: "구입금액을 입력해 주세요.",
  LOTTO: "당첨 번호를 입력해 주세요.",
  BONUS: "보너스 번호를 입력해 주세요.",
  RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
  PUBLISH: (count) => `${count}개를 구매했습니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  NUMBER: "[ERROR] 숫자를 입력해주세요.",
  THOUSAND: "[ERROR] 1000 단위로 입력해주세요.",
  AMOUNT_VALUE: "[ERROR] 최소한 1000원 이상 입력해주세요.",
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_VALUE: "[ERROR] 1부터 45사이의 값을 입력해주세요.",
  DUPLICATE: "[ERROR] 중복된 숫자를 입력하면 안됩니다.",
});

const RESULT = Object.freeze({
  THREE_MATCH: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOUR_MATCH: (count) => `4개 일치 (50,000원) - ${count}개`,
  FIVE_MATCH: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  BONUS_MATCH: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  SIX_MATCH: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
});

const PRIZE = Object.freeze({
  THREE: 5000,
  FOUR: 15000,
  FIVE: 1500000,
  BONUS: 30000000,
  SIX: 2000000000,
});

export { MESSAGE, ERROR_MESSAGE, RESULT, PRIZE };
