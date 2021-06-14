import { endpoints } from "../constants/endpoints";
import { Books } from "../models/books";
import { BooksSearchApiModelResponse } from "../models/booksApiModel";
import { HttpMethod } from "../models/dataFetching";
import { fetcher } from "./fetcher";
import { bookSearchAPIModelToClientModel } from "./mappers";

export const getBooksBySearch = async (searchQuery: string): Promise<Books> => {
  const apiResponse = await fetcher<BooksSearchApiModelResponse>({
    url: endpoints.searchBooks(searchQuery),
    method: HttpMethod.GET
  })

  return bookSearchAPIModelToClientModel(apiResponse)
}
