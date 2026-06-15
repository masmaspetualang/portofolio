import profileNoBg from '../assets/profile-nobg.png'
import styles from './Hero.module.css'

export default function Hero({ onScrollDown }) {
  return (
    <section className={styles.hero} aria-label="Hero">

      {/* Big background PORTFOLIO text */}
      <span className={styles.bgText} aria-hidden="true">PORTFOLIO</span>

      {/* Top-left label */}
      <span className={styles.cornerTop}>2026 — Portfolio</span>

      {/* Profile image — center stage */}
      <div className={styles.profileWrap}>
        <img
          src={profileNoBg}
          alt="Miftahul Huda"
          className={styles.profileImg}
        />
      </div>

      {/* Top Center Name Block */}
      <div className={styles.topNameBlock}>
        <h1 className={styles.name}>MIFTAHUL HUDA</h1>
        <p className={styles.role}>React Frontend Developer</p>
      </div>

      {/* Bottom text block */}
      <div className={styles.bottomBlock}>
        <button
          className={styles.scrollCue}
          onClick={onScrollDown}
          aria-label="Scroll down to portfolio"
        >
          <span className={styles.scrollLine} />
          <span>Enter Portfolio</span>
          <span className={styles.scrollArrow}>↓</span>
        </button>
      </div>

      <span className={styles.cornerBottom}>Yogyakarta, ID</span>
    </section>
  )
}
