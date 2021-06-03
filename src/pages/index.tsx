import React from 'react';

import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'

import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchBar />
      <NavBar />
    </main>
  )
}
