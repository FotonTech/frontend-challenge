import styles from './nav-bar.module.scss'

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.activePage}>
                <img src="/icons/home.svg" alt="none" />
                <p>Home</p>
            </div>
            <div>
                <img src="/icons/book.svg" alt="none" />
                <p>Libraries</p>
            </div>
            <div>
                <img src="/icons/profile.svg" alt="none" />
                <p>Profile</p>
            </div>
        </div>
    )
}
