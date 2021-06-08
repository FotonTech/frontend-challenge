import React from 'react';

import styles from './search-bar.module.scss'

interface SearchBarProps {
    searchSetState: any;
}

export default function SearchBar({ searchSetState }: SearchBarProps) {
    return (
        <div className={styles.searchBar}>
            <img src="/icons/circle.svg" alt="none" />
            <input onChange={(e) => searchSetState(e.target.value)} type="text" placeholder="Search book" />
        </div>
    )
}
