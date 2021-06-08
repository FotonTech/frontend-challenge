import styles from './reviews-shelf.module.scss'

export default function ReviewsShelf() {
    return (
        <div className={styles.reviewsShelf}>
            <div>
                <h2>Reviews of The Day</h2>
                <span>All video</span>
            </div>
            <div>
                <img src="/images/review-thumbnail.jpg" alt="none" />
                <div>
                    <h3>Don't Make Me Think | Steve Krug | UX Design Book Review</h3>
                </div>
            </div>
        </div>
    )
}
