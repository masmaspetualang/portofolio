import { useEffect } from 'react'
import styles from './CertificateModal.module.css'

export default function CertificateModal({ certificate, onClose }) {
  const { title, provider, year, imgSrc } = certificate

  // Close modal on Escape key press and disable body scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close modal"
      >
        <span className={styles.closeIcon}>&times;</span>
      </button>

      <div
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.imageWrapper}>
          <img
            src={imgSrc}
            alt={title}
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <h3 id="modal-title" className={styles.title}>{title}</h3>
          <div className={styles.meta}>
            <span className={styles.provider}>{provider}</span>
            <span className={styles.dot}>&middot;</span>
            <span className={styles.year}>{year}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
