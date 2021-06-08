import styles from './book-options.module.scss'

export default function BookOptions() {
    return (
        <div className={styles.bookOptions}>
            <div>
                <img src="/icons/book.svg" alt="none" />
                <p>Read</p>
            </div>
            <div>
                <img src="/icons/headphones.svg" alt="none" />
                <p>Listen</p>
            </div>
            <div>
                <img src="/icons/upload.svg" alt="none" />
                <p>Share</p>
            </div>
        </div>
    )
}
