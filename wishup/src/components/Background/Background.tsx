import styles from './Background.module.scss'
import cloud from '/images/cloud.png'

export const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles['row--right']}>
        <div className={styles['row--rightWrap']}>
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
        </div>
      </div>
      <div className={styles['row--left']}>
        <div className={styles['row--leftWrap']}>
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
        </div>
      </div>
      <div className={styles['row--right']}>
        <div className={styles['row--rightWrap']}>
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
          <img className={styles.rowItem} src={cloud} alt="Cloud" />
        </div>
      </div>
    </div>
  )
}
