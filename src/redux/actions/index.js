//actionを記述するファイル

import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  EQUAL,
  DIVIDE,
  CLEAR,
} from "./types";

//clickされた時のactionを定義
//引数にnumberを受け取り、payloadとしてreducerに渡す
//type:に指定したactionが発火してreducerで状態の遷移が行われる

export const onNumberClick = (number) => ({
  type: INPUT_NUMBER,
  //keyとvalueが同じならnumber,だけで良い
  //reducerにnumberというkeyでvalueのnumberを渡す
  number: number,
});

export const onPlusClick = () => ({
  type: PLUS,
});

export const onMinusClick = () => ({
  type: MINUS,
});

export const onMultiplyClick = () => ({
  type: MULTIPLY,
});

export const onDivideClick = () => ({
  type: DIVIDE,
});

export const onClearClick = () => ({
  type: CLEAR,
});

export const onEqualClick = () => ({
  type: EQUAL,
});
