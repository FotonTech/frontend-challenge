import Link from 'next/link'

import Book from '../../types/Book'
import Bookshelf from '../../types/Bookshelf'

import styles from './home-content.module.scss'

interface HomeContentProps {
    books: Book[]
    discoveries: Bookshelf
    reading: Bookshelf
}

export default function HomeContent({ discoveries, reading, books }: HomeContentProps) {
    let discoverShelf: Book[] = []
    let readingShelf: Book[] = []

    if (discoveries)
        discoverShelf = discoveries.books.map(item => books.find(book => item.id === book.id))

    if (reading)
        readingShelf = reading.books.map(item => books.find(book => item.id === book.id))

    return (
        <div className={styles.homeContent}>
            <div className={styles.discoveries}>
                <h2>{discoveries?.title}</h2>
                <div>
                    {discoverShelf.map(book => {
                        return (
                            <Link href="#" key={book.title}>
                                <div>
                                    <section>
                                        <div>
                                            <h3>{book.title}</h3>
                                            <h4>{book.authors[0]}</h4>
                                        </div>
                                        <span><img src="icons/statistics.svg"></img> <strong>120+</strong> Read Now</span>
                                    </section>
                                    <img src={book.imageLinks.thumbnail} alt="bookCover" />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
