import Link from 'next/link'
import { useEffect, useState } from 'react'

import fetchSearch from '../../lib/fetchSearch'

import Book from '../../types/Book'

import styles from './search-content.module.scss'

interface SearchContentProps {
    search: string;
}

export default function HomeContent({ search }: SearchContentProps) {
    const [books, setBooks] = useState<Book[]>([])

    async function getSearch() {
        const fetchedBooks = await fetchSearch(search)

        setBooks(fetchedBooks)
    }

    useEffect(() => {
        getSearch()
    }, [search])

    return (
        <div className={styles.searchContent}>
            {books &&
                books.map(book =>
                    <Link href={`/books/${book.id}`} key={book.title}>
                        <a className={styles.book}>
                            {book.imageLinks && <img src={book.imageLinks.thumbnail} alt="none" />}
                            <div>
                                {book.title && <h3>{book.title}</h3>}
                                {book.authors && <h4>{book.authors[0]}</h4>}
                            </div>
                        </a>
                    </Link>
                )
            }
        </div>
    )
}
