import { AnyAction, Reducer } from "redux";
import { ProductType } from "../../types/index";

type InitialStateType = {
   products: ProductType[];
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
      case ACTION_TYPES.ADD_TO_CART: {
         const addedProduct: ProductType = { ...action.payload };

         //checking if product already on cart
         let found = false;
         let i;

         console.log("Array de produtos: ");
         console.log(state.products);

         //verificando se o id já existe dentro do array de produtos
         for (i = 0; i < state.products.length; ++i) {
            if (state.products[i].id === addedProduct.id) {
               found = true;
               break;
            }
         }

         const newProductArray = state.products.filter((item, key) => item.id !== addedProduct.id);
         //se o produto já existir, aumentar a quantidade
         if (found) {
            addedProduct.quantity += 1;
         }

         newProductArray.push(addedProduct);

         return {
            totalPrice: addedProduct.sellingPrice + state.totalPrice,
            products: newProductArray,
         };
      }
      case ACTION_TYPES.CHANGE_QUANTITY: {
         const changedProduct: ProductType = action.payload.product;
         const changedQuantity: number = action.payload.change;

         //checking if product already on cart

         let i;
         let newProductArray = state.products;

         //calculando o índice do produto
         for (i = 0; i < state.products.length; ++i) {
            if (state.products[i].id === changedProduct.id) {
               break;
            }
         }

         //se o produto tiver quantidade igual a 1, remover definitivamente
         // do carrinho
         if (changedQuantity === -1 && newProductArray[i].quantity === 1) {
            //array sem o produto
            newProductArray = newProductArray.filter((product) => product.id !== changedProduct.id);
         }
         //variar na quantidade especificada
         else {
            newProductArray[i].quantity += changedQuantity;
         }

         return {
            totalPrice: state.totalPrice + changedQuantity * changedProduct.sellingPrice,
            products: newProductArray,
         };
      }
      case ACTION_TYPES.REMOVE_FROM_CART: {
         const removedProduct: ProductType = action.payload;

         //checking if product already on cart

         const newProductArray = state.products.filter((product) => product.id !== removedProduct.id);

         return {
            totalPrice: state.totalPrice - removedProduct.sellingPrice,
            products: newProductArray,
         };
      }
      case ACTION_TYPES.EMPTY_CART: {
         return initialCartState;
      }
      default:
         return initialCartState;
   }
};

export default cartReducer;
