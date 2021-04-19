import { AnyAction, Reducer } from "redux";
import { BookType } from "../../types/index";

type InitialStateType = {
   products: BookType[];
   totalPrice: number;
};

//estado inicial, com tipos inferidos
export const initialCartState: InitialStateType = {
   products: [],
   totalPrice: 0,
};

export const ACTION_TYPES = {
   ADD_TO_CART: "ADD_TO_CART",
   REMOVE_FROM_CART: "REMOVE_FROM_CART",
   CHANGE_QUANTITY: "CHANGE_QUANTITY",
   EMPTY_CART: "EMPTY_CART",
};

const cartReducer: Reducer<InitialStateType> = (state = initialCartState, action: AnyAction) => {
   switch (action.type) {
      default:
         return initialCartState;
   }
};

export default cartReducer;
