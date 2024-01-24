import classNames from 'classnames';
import styles from './Introduction.module.css';

const Introduction: any = () => {
    return (
        <main className={styles.introductionView}>
            <div className={styles.introductionViewLogo}>
                <div className={styles.hundred}>
                    <div className={styles.one_one}></div>
                    <div className={classNames(styles.one, styles.shadow)}></div>
                    <div className={classNames(styles.zero, styles.zero_one, styles.shadow)}></div>
                    <div className={classNames(styles.zero, styles.zero_two)}></div>
                </div>
                
                <h1 className={classNames(styles.highlight, styles.text)}>DAYS</h1>
                <span className={classNames(styles.span, styles.text)}>CSS CHALLENGE</span>
            </div>

            <div className={styles.introductionViewTitle}>
                <h1>Welcome!</h1>
                <span>Welcome to my freame gallery, where I'm listing my 100 days Css Challenge answers. I hope you enjoy!</span>
            </div>
        </main>
    )
}

export default Introduction;