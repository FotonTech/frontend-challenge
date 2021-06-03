import React from 'react';

import styles from './search-bar.module.scss'

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <img src="/icons/circle.svg" alt="none" />
            <input type="text" placeholder="Search book" />
        </div>
    )
}
