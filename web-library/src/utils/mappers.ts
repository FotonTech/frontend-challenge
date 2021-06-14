import { Book, Books } from "../models/books";
import { BooksSearchApiModelResponse, DetailedBookApiModel } from "../models/booksApiModel";

export const bookSearchAPIModelToClientModel = (input: BooksSearchApiModelResponse): Books => {
  const books: Book[] = input.items.map(book => {
    const { title, subtitle, authors, description, imageLinks } = book.volumeInfo

    return {
      title,
      subtitle,
      authors: authors ? authors.join(', ') : 'Unknown author',
      description,
      image: imageLinks.thumbnail,
      id: book.id,
    }
  })

  return {
    totalItems: input.totalItems,
    items: books
  }
}


export const detailedBookAPiModelToClientModel = (input: DetailedBookApiModel): Book => {
  return {
    title: input.volumeInfo.title,
    subtitle: input.volumeInfo.subtitle,
    authors: input.volumeInfo.authors.join(', '),
    description: input.volumeInfo.description,
    image: input.volumeInfo.imageLinks.medium,
    id: input.id,
  }
}
