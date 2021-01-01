import React from "react";
import { connect } from "react-redux";
import {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onClearClick,
  onEqualClick,
} from "./redux/actions";
import Button from "./components/Button";
import Result from "./components/Result";
import "./App.scss";

//(props)にはmapStateToPropsの値と、それぞれのactionが入っている
//その値をコンポーネントに反映する処理を書いていく
export const App = (props) => {
  //propsを取り出す処理を書く（props.calculatorみたいに書かなくてよくなる）
  const {
    calculator,
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onClearClick,
    onEqualClick,
  } = props;
  return (
    <React.Fragment>
      <div className="result">
        <Result
          result={
            calculator.showingrResult
              ? calculator.resultValue
              : calculator.inputValue
          }
        />
        <div className="button-wrapper">
          <div className="number">
            <div className="upper">
              <Button text={"7"} onClick={() => onNumberClick(7)} />
              <Button text={"8"} onClick={() => onNumberClick(8)} />
              <Button text={"9"} onClick={() => onNumberClick(9)} />
            </div>
            <div className="midlle">
              <Button text={"4"} onClick={() => onNumberClick(4)} />
              <Button text={"5"} onClick={() => onNumberClick(5)} />
              <Button text={"6"} onClick={() => onNumberClick(6)} />
            </div>
            <div className="lower">
              <Button text={"1"} onClick={() => onNumberClick(1)} />
              <Button text={"2"} onClick={() => onNumberClick(2)} />
              <Button text={"3"} onClick={() => onNumberClick(3)} />
            </div>
            <div className="bottom">
              <Button text={"0"} onClick={() => onNumberClick(0)} />
              <Button text={"AC"} onClick={() => onClearClick()} />
              <Button text={"="} onClick={() => onEqualClick()} />
            </div>
          </div>
          <div className="operator">
            <Button text={"÷"} onClick={() => onDivideClick()} />
            <Button text={"×"} onClick={() => onMultiplyClick()} />
            <Button text={"-"} onClick={() => onMinusClick()} />
            <Button text={"+"} onClick={() => onPlusClick()} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

//reduxのStoreで保持している状態をpropsとしてこのコンポーネントに渡せるようにしている

const mapStateToProps = (state) => {
  return { calculator: state.calculator };
};

//connectを使うことでAppコンポーネントにmapStateToPropsの値と、それぞれのactionをpropsとして渡すことができる
export default connect(mapStateToProps, {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onClearClick,
  onEqualClick,
})(App);
