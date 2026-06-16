import styles from './CategoryNavigation.module.css'

const CATEGORIES = [
  { id: 'about',      label: 'About' },
  { id: 'projects',   label: 'My Project' },
  { id: 'collection', label: 'My Collection' },
  { id: 'certificates', label: 'Certificates' },
]

export default function CategoryNavigation({ active, onChange }) {
  return (
    <nav className={styles.nav} aria-label="Section navigation">
      <div className={styles.inner}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            id={`nav-${cat.id}`}
            className={`${styles.btn} ${active === cat.id ? styles.active : ''}`}
            onClick={() => onChange(cat.id)}
            aria-current={active === cat.id ? 'page' : undefined}
          >
            {cat.label}
            {active === cat.id && <span className={styles.indicator} />}
          </button>
        ))}
      </div>
    </nav>
  )
}
