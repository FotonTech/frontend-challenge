import Link from 'next/link'

import Bookshelf from '../../types/Bookshelf'

import styles from './home-content.module.scss'

interface HomeContentProps {
    discoveries: Bookshelf
    reading: Bookshelf
}

export default function HomeContent({ discoveries, reading }: HomeContentProps) {
    return (
        <div className={styles.homeContent}>
            <div className={styles.discoveries}>
                <h2>{discoveries.title}</h2>
                <div>
                    {discoveries?.books.map(book => {
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
