import Link from 'next/link'

import Book from '../../../types/Book'

import styles from './discovery-shelf.module.scss'

interface DiscoveryShelfProps {
    title: string
    books: Book[]
}

export default function DiscoveryShelf({ title, books }: DiscoveryShelfProps) {
    return (
        <div className={styles.discoveryShelf}>
            <div>
                <h2>{title}</h2>
                <span>More</span>
            </div>
            <div>
                {books &&
                    books.map(book => {
                        return (
                            <Link href={`books/${book.id}`} key={book.title}>
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
                    })
                }
            </div>
        </div>
    )
}
