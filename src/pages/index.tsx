import React from 'react';

import SearchBar from '../components/SearchBar'

import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchBar />
    </main>
  )
}
