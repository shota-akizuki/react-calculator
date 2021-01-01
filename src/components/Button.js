import React from "react";

//propsとして{text}を分割代入で受け取る
//
export const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
