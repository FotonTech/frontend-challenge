import Link from 'next/link'

import Book from '../../../types/Book'

import styles from './reading-shelf.module.scss'

interface ReadingShelfProps {
    title: string
    books: Book[]
}

export default function ReadingShelf({ title, books }: ReadingShelfProps) {
    return (
        <div className={styles.readingShelf}>
            <div>
                <h2>{title}</h2>
                <span>All</span>
            </div>
            <div>
                {books.map(book => {
                    return (
                        <Link href={`books/${book.id}`} key={book.title}>
                            <div>
                                <img src={book.imageLinks.thumbnail} alt="bookCover" />
                                <section>
                                    <div>
                                        <h3>{book.title}</h3>
                                        <h4>by {book.authors[0]}</h4>
                                    </div>
                                    <span><img src="icons/book-marked.svg"></img>Chapter <strong>2</strong> from 9</span>
                                </section>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
