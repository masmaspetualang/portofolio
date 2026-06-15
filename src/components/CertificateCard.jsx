import styles from './CertificateCard.module.css'

export default function CertificateCard({ title, provider, year, imgSrc }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        {imgSrc
          ? <img src={imgSrc} alt={title} className={styles.img} />
          : <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>◻</span>
            </div>
        }
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <div className={styles.meta}>
          <span className={styles.provider}>{provider}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.year}>{year}</span>
        </div>
      </div>
    </div>
  )
}
