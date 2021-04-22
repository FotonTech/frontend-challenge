import { AnyAction, Reducer } from "redux";

type InitialStateType = {
   search: string;
};

//estado inicial, com tipos inferidos
export const initialSearchState: InitialStateType = {
   search: "",
};

export const ACTION_TYPES = {
   ADD_SEARCH: "ADD_SEARCH",
   CLEAR_SEARCH: "CLEAR_SEARCH",
};

const searchReducer: Reducer<InitialStateType> = (state = initialSearchState, action: AnyAction) => {
   switch (action.type) {
      case ACTION_TYPES.ADD_SEARCH: {
         return {
            search: action.payload,
         };
      }
      case ACTION_TYPES.CLEAR_SEARCH: {
         return initialSearchState;
      }
      default:
         return initialSearchState;
   }
};

export default searchReducer;
