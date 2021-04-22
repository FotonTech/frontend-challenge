import searchReducer from "./searchReducer";
import db from "./db";
import { combineReducers } from "redux";

//uso esse combineReducer por motivos de escalabilidade, isto é,
//caso mais reducers se façam necessários no desenvolvimento.
const rootReducer = combineReducers({
   searchReducer,
   db,
});

export default rootReducer;
