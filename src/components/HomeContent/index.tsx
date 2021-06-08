import React, { useEffect, useState } from 'react'

import Book from '../../types/Book'
import Bookshelf from '../../types/Bookshelf'

import DiscoveryShelf from './DiscoveryShelf'
import ReadingShelf from './ReadingShelf'
import ReviewsShelf from './ReviewsShelf'

import styles from './home-content.module.scss'

interface HomeContentProps {
    books: Book[]
    discoveries: Bookshelf
    reading: Bookshelf
}

export default function HomeContent({ discoveries, reading, books }: HomeContentProps) {
    const [discoveryShelf, setDiscoveryShelf] = useState<Book[]>([])
    const [readingShelf, setReadingShelf] = useState<Book[]>([])

    function fillShelf(shelf: Bookshelf, shelfSetState) {
        const fillShelf = shelf.books.map(item => books.find(book => item.id === book.id))
        shelfSetState(fillShelf)
    }

    useEffect(() => {
        if (discoveries)
            fillShelf(discoveries, setDiscoveryShelf)

        if (reading)
            fillShelf(reading, setReadingShelf)
    }, [])

    useEffect(() => {
        if (discoveries)
            fillShelf(discoveries, setDiscoveryShelf)
    }, [discoveries])

    useEffect(() => {
        if (reading)
            fillShelf(reading, setReadingShelf)
    }, [reading])

    return (
        <div className={styles.homeContent}>
            {discoveryShelf != undefined && <DiscoveryShelf title={discoveries?.title} books={discoveryShelf} />}
            {readingShelf != undefined && <ReadingShelf title={reading?.title} books={readingShelf}></ReadingShelf>}
            <ReviewsShelf/>
        </div>
    )
}
