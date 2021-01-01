import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
//Providerがあることいよってreduxとreactが連携できる
import { Provider } from "react-redux";
import reducer from "./redux/reducers";

//Storeはindex.jsに書く
//reducersをcreateStoreという関数でくくることで、Storeが完成するイメージ
const Store = createStore(reducer);

ReactDOM.render(
  //AppコンポーネントをProviderで囲うとreduxの情報がreactと連携される
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
