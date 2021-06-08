import Book from '../types/Book'

const fetchSearch = async (search: string): Promise<Book[]> => {
    let books = []

    books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+intitle`)
        .then(response => response.json())
        .then(data => data.items)

    books = books.map(book => {
        const id = book.id
        const bookData = book.volumeInfo

        return { ...bookData, id }
    }) as Book[]

    return books
}

export default fetchSearch