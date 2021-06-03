import React from 'react';

import Paint from '../components/Paint'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'

import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Paint color='#f2f2f2' />
      <SearchBar />
      <NavBar />
    </main>
  )
}
