import Bookshelf from '../types/Bookshelf'

const fetchBookshelf = async (user: string, bookshelf: string): Promise<Bookshelf> => {
    let title = ''
    let books = []

    await fetch(`https://www.googleapis.com/books/v1/users/${user}/bookshelves/${bookshelf}`)
        .then(response => response.json())
        .then(data => title = data.title)

    await fetch(`https://www.googleapis.com/books/v1/users/${user}/bookshelves/${bookshelf}/volumes`)
        .then(response => response.json())
        .then(data => books = data.items)

    return { title, books }
}

export default fetchBookshelf