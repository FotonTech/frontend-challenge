import Link from 'next/link'

import Book from '../../types/Book'
import Bookshelf from '../../types/Bookshelf'

import DiscoveryShelf from './DiscoveryShelf'

import styles from './home-content.module.scss'

interface HomeContentProps {
    books: Book[]
    discoveries: Bookshelf
    reading: Bookshelf
}

export default function HomeContent({ discoveries, reading, books }: HomeContentProps) {
    let discoveryShelf: Book[] = []
    let readingShelf: Book[] = []

    if (discoveries)
        discoveryShelf = discoveries.books.map(item => books.find(book => item.id === book.id))

    if (reading)
        readingShelf = reading.books.map(item => books.find(book => item.id === book.id))

    return (
        <div className={styles.homeContent}>
            <DiscoveryShelf title={discoveries?.title} books={discoveryShelf} />
        </div>
    )
}
