import styles from "./Day2Frame.module.css"

const Day2Frame: any = () => {
    return (
        <div className={styles.frame}>
            <label className={styles.center}>
                    <input className={styles.checkbox} type="checkbox" />
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
            </label>
        </div>
    )
}

export default Day2Frame