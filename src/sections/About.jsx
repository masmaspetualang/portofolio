import SkillCard from '../components/SkillCard'
import styles from './About.module.css'

const SKILLS = [
  {
    tech: 'React.js',
    items: ['React Hooks', 'Component Architecture', 'React Router'],
  },
  {
    tech: 'PHP',
    items: ['Backend Fundamental', 'API Integration'],
  },
  {
    tech: 'Laravel',
    items: ['REST API', 'Backend Development'],
  },
  {
    tech: 'FastAPI',
    items: ['API Service', 'Backend Integration'],
  },
  {
    tech: 'Docker',
    items: ['Containerization', 'Deployment Workflow'],
  },
]

export default function About() {
  return (
    <section className={styles.section} aria-label="About">
      {/* About Me */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>About Me</h2>
        <div className={styles.aboutCard}>
          <p className={styles.aboutText}>
            Frontend Developer yang fokus membuat aplikasi web modern menggunakan React.js.
            Berpengalaman dalam membangun antarmuka yang bersih, responsif, dan mudah digunakan.
          </p>
          <div className={styles.expList}>
            <div className={styles.expItem}>
              <span className={styles.expDash}>—</span>
              <span>Company profile website</span>
            </div>
            <div className={styles.expItem}>
              <span className={styles.expDash}>—</span>
              <span>Dashboard application</span>
            </div>
            <div className={styles.expItem}>
              <span className={styles.expDash}>—</span>
              <span>Product showcase website</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Tech Stack</h2>
        <div className={styles.skillGrid}>
          {SKILLS.map((s) => (
            <SkillCard key={s.tech} tech={s.tech} items={s.items} />
          ))}
        </div>
      </div>

    </section>
  )
}
