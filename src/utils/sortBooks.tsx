import { BookType } from "../types";

/**
 * Sorts the books by a given parameter, in desc or asc order.
 */
export const bookSort = (property: "name" | "author", order: "desc" | "asc" | undefined) => {
   let sort_order = 1;
   if (order === "desc") {
      sort_order = -1;
   }
   return function (a: BookType, b: BookType) {
      // a should come before b in the sorted order
      if (a[property] < b[property]) {
         return -1 * sort_order;
         // a should come after b in the sorted order
      } else if (a[property] > b[property]) {
         return 1 * sort_order;
         // a and b are the same
      } else {
         return 0 * sort_order;
      }
   };
};

export default bookSort;
