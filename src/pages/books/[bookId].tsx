import { GetStaticPaths, GetStaticProps } from 'next';
import Router from 'next/router'
import { IoMdArrowBack } from 'react-icons/io'

import Book from '../../types/Book'

import Paint from '../../components/Paint'
import BookOptions from './BookOptions'

import styles from './book-details.module.scss'

interface BookDetailsProps {
    book: Book
}

export default function BookDetails({ book }: BookDetailsProps) {
    return (
        <main className={styles.bookDetails}>
            {book != undefined &&
                <>
                    <Paint color="#fff6e5" height={282} />
                    <IoMdArrowBack className={styles.backButton} onClick={() => Router.back()} />
                    <img src={book.imageLinks.thumbnail} alt="cover" />
                    <div className={styles.content} >
                        <h1><strong>{book.title}</strong>{book.subtitle && `: ${book.subtitle}`}</h1>
                        <h2>{book.authors[0]}</h2>
                        <p dangerouslySetInnerHTML={{ __html: book.description }}></p>
                    </div>
                    <BookOptions />
                </>
            }
        </main>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { bookId: '' } }],
        fallback: true
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { bookId } = params

    const book = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then(response => response.json())
        .then(data => data.volumeInfo) as Book

    return { props: { book } }
};