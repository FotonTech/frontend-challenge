import { endpoints } from "../constants/endpoints";
import { Book } from "../models/books";
import { DetailedBookApiModel } from "../models/booksApiModel";
import { HttpMethod } from "../models/dataFetching";
import { fetcher } from "./fetcher";
import { detailedBookAPiModelToClientModel } from "./mappers";

export const getBooksBySearch = async (bookId: string): Promise<Book> => {
  const apiResponse = await fetcher<DetailedBookApiModel>({
    url: endpoints.getBookDetails(bookId),
    method: HttpMethod.GET
  })

  return detailedBookAPiModelToClientModel(apiResponse)
}
