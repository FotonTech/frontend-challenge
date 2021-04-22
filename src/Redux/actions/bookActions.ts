import { ACTION_TYPES } from "../reducers/db";
import { BookType } from "../../types";

const sendToDb = (books: BookType[], totalItem: number) => {
   return {
      type: ACTION_TYPES.ADD_BOOK,
      payload: {
         books: books,
         totalNumber: totalItem,
      },
   };
};

export const getAllBooks = (setLoading: (arg0: boolean) => void, setError: (arg0: string) => void) => (
   dispatch: (arg0: { type: string; payload: { books: BookType[]; totalNumber: number } }) => void,
) => {
   const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
   };
   setLoading(true);
   setError("");

   const area = "harry potter";

   fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(area)}&orderBy=relevance&maxResults=40`,
      requestOptions,
   )
      .then((response) => response.json())
      //apos conversao pra json
      .then((result) => {
         const BookArray: BookType[] = [];
         let totalItems = result.totalItems;
         const resultArray = result.items;

         for (let i = 0; i < result.items.length; i++) {
            let current = resultArray[i];
            let temp: BookType = { name: "", author: "", pageCount: 0, id: "", categories: "" };
            temp.name = current.volumeInfo.title;

            //se for uma string de arrays agrupar em comma separated
            temp.author = current.volumeInfo.authors?.join(", ");

            temp.description = temp.pageCount = current.volumeInfo.description;
            temp.pageCount = current.volumeInfo.pageCount;

            //possivelmente undefined
            temp.smallThumbnail = current.volumeInfo?.imageLinks?.smallThumbnail;
            temp.thumbnail = current.volumeInfo?.imageLinks?.thumbnail;

            //não é garantido de ter
            temp.categories = current.volumeInfo?.categories;

            //colocar imagem padrão do google caso não haja no json uma thumb
            if (!temp.thumbnail) {
               temp.thumbnail = "https://books.google.com.br/googlebooks/images/no_cover_thumb.gif";
               temp.smallThumbnail = temp.thumbnail;
            }

            //inserir no array o item
            BookArray.push(temp);
         }
         dispatch(sendToDb(BookArray, totalItems));
         setLoading(false);
      })
      .catch((error) => {
         setError(error.message || "Um erro aconteceu ao baixar os livros");
         setLoading(false);
      });
};
