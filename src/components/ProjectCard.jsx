import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, description, tags, imgSrc, projectUrl }) {
  const CardTag = projectUrl ? 'a' : 'article'

  return (
    <CardTag
      href={projectUrl}
      target={projectUrl ? '_blank' : undefined}
      rel={projectUrl ? 'noopener noreferrer' : undefined}
      className={`${styles.card} ${projectUrl ? styles.clickable : ''}`}
    >
      <div className={styles.thumb}>
        {imgSrc
          ? <img src={imgSrc} alt={title} className={styles.img} />
          : <div className={styles.placeholder}>
              <span className={styles.placeholderText}>{title.charAt(0)}</span>
            </div>
        }
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          {projectUrl && <span className={styles.arrow}>↗</span>}
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </CardTag>
  )
}

