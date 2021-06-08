import Book from '../types/Book'

const fetchBook = async (id: string): Promise<Book> => {
    let book = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(response => response.json())
        .then(data => data.volumeInfo)

    book.id = id

    return book
}

export default fetchBook

