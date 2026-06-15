import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'Company Profile Website',
    description:
      'Website company profile yang dibangun dengan React.js, menampilkan informasi perusahaan dengan desain modern, responsif, dan performa tinggi.',
    tags: ['React', 'Vite', 'CSS Modules'],
  },
  {
    title: 'Product Showcase Website',
    description:
      'Platform showcase produk interaktif dengan komponen reusable, dynamic filtering, dan animasi transisi yang halus.',
    tags: ['React', 'Component Architecture', 'Responsive'],
  },
  {
    title: 'Dashboard Application',
    description:
      'Aplikasi dashboard admin yang terhubung dengan REST API, menampilkan data real-time dengan visualisasi tabel dan statistik.',
    tags: ['React', 'REST API', 'Laravel'],
  },
  {
    title: 'API Service with FastAPI',
    description:
      'Backend service ringan menggunakan FastAPI untuk kebutuhan integrasi microservice dan pengelolaan data endpoint.',
    tags: ['FastAPI', 'Python', 'Docker'],
  },
]

export default function Projects() {
  return (
    <section className={styles.section} aria-label="Projects">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Selected Work</h2>
        <p className={styles.sectionSub}>
          {PROJECTS.length} projects
        </p>
      </div>

      <div className={styles.list}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className={styles.item}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              imgSrc={project.imgSrc}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
