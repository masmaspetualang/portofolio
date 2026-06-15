import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, description, tags, imgSrc }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        {imgSrc
          ? <img src={imgSrc} alt={title} className={styles.img} />
          : <div className={styles.placeholder}>
              <span className={styles.placeholderText}>{title.charAt(0)}</span>
            </div>
        }
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
