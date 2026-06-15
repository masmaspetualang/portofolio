import styles from './GalleryCard.module.css'

export default function GalleryCard({ imgSrc, alt, index }) {
  return (
    <div className={styles.card} aria-label={alt}>
      {imgSrc
        ? <img src={imgSrc} alt={alt} className={styles.img} loading="lazy" />
        : <div className={styles.placeholder}>
            <span className={styles.num}>0{index + 1}</span>
          </div>
      }
    </div>
  )
}
