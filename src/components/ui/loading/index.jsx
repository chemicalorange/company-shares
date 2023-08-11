import styles from './style.module.css'
export const Loading = () => (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}>
                <div></div>
            </div>
        </div>
)