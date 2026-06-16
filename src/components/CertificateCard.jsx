import styles from './CertificateCard.module.css'

export default function CertificateCard({ title, provider, year, imgSrc, onClick }) {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
    >
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

