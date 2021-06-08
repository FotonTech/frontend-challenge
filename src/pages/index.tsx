import React, { useState, useEffect } from 'react';

import Paint from '../components/Paint'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'

import fetchBookshelf from '../lib/fetchBookshelf'
import fetchBook from '../lib/fetchBook'

import styles from './home.module.scss'

import Bookshelf from '../types/Bookshelf'

export default function Home() {
  const user = '100881681654827357753' //my user id

  const [discoveries, setDiscoveries] = useState<Bookshelf | {}>({})
  const [reading, setReading] = useState<Bookshelf | {}>({})

  async function getBookshelf(id: string, bookshelfSetState) {
    const bookshelfData = await fetchBookshelf(user, id)

    bookshelfData.books.map(book => fetchBook(book.id))

    bookshelfSetState(bookshelfData)
  }

  useEffect(() => {
    getBookshelf('1001', setDiscoveries)
    getBookshelf('1002', setReading)
  }, [])

  return (
    <main className={styles.main}>
      <Paint color='#f2f2f2' />
      <SearchBar />
      <p className={styles.hello}>Hi, <strong>Mehmed Al Fatih</strong> 👋</p>
      <NavBar />
    </main>
  )
}