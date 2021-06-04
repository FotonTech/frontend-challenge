import React from 'react';

import Paint from '../components/Paint'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'

import styles from './home.module.scss'

export default function Home() {
  const key = 'AIzaSyCMe1GHh0PynH7AvrTt4h2nq0m-vZ40nuo'
  const user = '100881681654827357753'
  fetch(``)
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <main className={styles.main}>
      <Paint color='#f2f2f2' />
      <SearchBar />
      <p className={styles.hello}>Hi, <strong>Mehmed Al Fatih</strong> 👋</p>
      <NavBar />
    </main>
  )
}
