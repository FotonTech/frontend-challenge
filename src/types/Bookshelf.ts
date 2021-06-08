import Book from './Book'

export default interface Bookshelf {
    title: string;
    books: Book[];
}