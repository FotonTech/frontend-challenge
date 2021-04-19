import { AnyAction, Reducer } from "redux";
import {  BookType } from "../../types/index";

/**
 * Banco de dados contendo todos os livros recuperados da API, 
 * periodicamente atualizados.
 */


type InitialStateType = {
   books: BookType[];
   totalNumber: number;
};

//estado inicial, com tipos inferidos
export const initialCartState: InitialStateType = {
    books: [],
    totalNumber: 0,
};

export const ACTION_TYPES = {
   ADD_BOOK: "ADD_BOOK",

};

const db: Reducer<InitialStateType> = (state = initialCartState, action: AnyAction) => {
   switch (action.type) {
       case ACTION_TYPES.ADD_BOOK: {
           // eu PODERIA fazer adição no array, porém como não faço revalidação, não tem sentido essa op,
           //levaria apenas a redundancias no array completo.
           // books: [...state.books, ...action.payload.books],
           return {
               books:action.payload.books,
               totalNumber:  action.payload.totalNumber
           }
       }
      default:
         return initialCartState;
   }
};

export default db;
