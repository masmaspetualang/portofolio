import styles from './SkillCard.module.css'

export default function SkillCard({ tech, items }) {
  return (
    <div className={styles.card}>
      <p className={styles.techName}>{tech}</p>
      <ul className={styles.subList}>
        {items.map((item) => (
          <li key={item} className={styles.subItem}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
