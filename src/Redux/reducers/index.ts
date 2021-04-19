import cartReducer from "./cartReducer";
import db from './db'
import { combineReducers } from "redux";

//uso esse combineReducer por motivos de escalabilidade, isto é,
//caso mais reducers se façam necessários no desenvolvimento.
const rootReducer = combineReducers({
   cartReducer,
   db
});

export default rootReducer;
