import React, { useState, useEffect } from 'react';

import Paint from '../components/Paint'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import HomeContent from '../components/HomeContent'
import SearchContent from '../components/SearchContent'

import fetchBookshelf from '../lib/fetchBookshelf'
import fetchBook from '../lib/fetchBook'

import styles from './home.module.scss'

import Bookshelf from '../types/Bookshelf'
import Book from '../types/Book'

export default function Home() {
  const user = '100881681654827357753' //my user id

  const [search, setSearch] = useState<string>('')

  const [books, setBooks] = useState<Book[]>()

  const [discoveries, setDiscoveries] = useState<Bookshelf>()
  const [reading, setReading] = useState<Bookshelf>()

  useEffect(() => {
    getBookshelf('1001', setDiscoveries)
    getBookshelf('1002', setReading)
  }, [])

  async function getBookshelf(id: string, bookshelfSetState) {
    const bookshelfData = await fetchBookshelf(user, id)

    const books = await Promise.all(bookshelfData.books.map(async (book): Promise<Book> => await fetchBook(book.id)))

    setBooks(books)
    bookshelfSetState(bookshelfData)
  }

  return (
    <main className={styles.main}>
      <Paint color='#f2f2f2' />
      <SearchBar searchSetState={setSearch} />
      {search.length === 0 ?
        books &&
        <>
          <p className={styles.hello}>Hi, <strong>Mehmed Al Fatih</strong> 👋</p>
          <HomeContent books={books} discoveries={discoveries} reading={reading} />
          <NavBar />
        </>
        :
        <>
          <SearchContent search={search} />
        </>
      }
    </main>
  )
}