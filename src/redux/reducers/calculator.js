import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  EQUAL,
  DIVIDE,
  CLEAR,
} from "../actions/types";

//Appの初期値を設定する
const initialAppState = {
  inputValue: 0,
  //演算子
  operetor: "",
  //計算結果の値
  resultValue: 0,
  //計算をおこなっていいかどうか
  calculate: false,
  //計算結果を出してもいいかどうか
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  switch (action.type) {
    //action.typeがINPUT_NUMBERのとき
    case INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        //計算結果はまだ表示しない
        showingResult: false,
      };
    //action.typeがPLUSのとき
    case PLUS:
      //すでにinputValueがあるとき
      if (state.calculate === true) {
        return {
          // いったんstateを展開する
          ...state,
          operetor: "+",
          inputValue: 0,
          resultValue: state.resultValue + state.inputValue,
          showingResult: true,
        };
        //inputValueのstateにまだ何も入っていないとき..、
      } else {
        return {
          ...state,
          operetor: "+",
          inputValue: 0,
          calculate: true,
          //入力された値が直接resultValueになる
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case MINUS:
      if (state.calculate === true) {
        return {
          ...state,
          operetor: "-",
          inputValue: 0,
          resultValue: state.resultValue - state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          operetor: "-",
          inputValue: 0,
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case MULTIPLY:
      if (state.calculate === true) {
        return {
          ...state,
          operetor: "*",
          inputValue: 0,
          resultValue: state.resultValue * state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          operetor: "*",
          inputValue: 0,
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case DIVIDE:
      if (state.calculate === true) {
        return {
          ...state,
          operetor: "/",
          inputValue: 0,
          resultValue: state.resultValue / state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          operetor: "/",
          inputValue: 0,
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case CLEAR:
      //initialAppStateと同じ
      return {
        inputValue: 0,
        operetor: "",
        resultValue: 0,
        calculate: false,
        showingResult: false,
      };
    case EQUAL:
      switch (state.operetor) {
        case "+":
          return {
            operetor: "",
            inputValue: state.resultValue + state.inputValue,
            resultValue: state.resultValue + state.inputValue,
            //calculateはいったんオフ
            calculate: false,
            showingResult: true,
          };
        case "-":
          return {
            operetor: "",
            inputValue: state.resultValue - state.inputValue,
            resultValue: state.resultValue - state.inputValue,

            calculate: false,
            showingResult: true,
          };
        case "/":
          return {
            operetor: "",
            inputValue: state.resultValue / state.inputValue,
            resultValue: state.resultValue / state.inputValue,
            calculate: false,
            showingResult: true,
          };
        case "*":
          return {
            operetor: "",
            inputValue: state.resultValue * state.inputValue,
            resultValue: state.resultValue * state.inputValue,
            calculate: false,
            showingResult: true,
          };
        //defalutはそのままstateを返す処理を書く
        default:
          return state;
      }
    //defalutはそのままstateを返す
    default:
      return state;
  }
};

export default calculator;
