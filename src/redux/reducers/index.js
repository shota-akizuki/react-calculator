import { combineReducers } from "redux";
import calculator from "./calculator";

//複数のreducerをまとめるためcombineReducerを使う
const reducer = combineReducers({ calculator });

export default reducer;
