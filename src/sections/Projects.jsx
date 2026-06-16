import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

import imgBagava from '../assets/bagava_alam_semesta_showcase.png'
import imgWinston from '../assets/winston_everly_showcase.png'
import img3D from '../assets/three_d_design_showcase.png'
import imgSea from '../assets/seabiogastech_showcase.png'

const PROJECTS = [
  {
    title: 'Bagava Alam Semesta',
    description:
      'Website profil perusahaan resmi untuk Bagava Alam Semesta, menampilkan layanan dan komitmen solusi lingkungan hidup yang berkelanjutan.',
    tags: ['React.js', 'Company Profile', 'Responsive Web'],
    projectUrl: 'https://bagavaalamsemesta.com/',
    imgSrc: imgBagava,
  },
  {
    title: 'Winston Everly',
    description:
      'Website portofolio interaktif dan visual showcase modern yang dibangun dengan tata letak minimalis dan performa tinggi.',
    tags: ['Next.js', 'Portfolio', 'Creative UI'],
    projectUrl: 'https://winstoneverly.vercel.app/',
    imgSrc: imgWinston,
  },
  {
    title: '3D Design Web Showcase',
    description:
      'Eksperimen interaktif web 3D yang dinamis, memungkinkan eksplorasi objek 3D secara real-time langsung di browser.',
    tags: ['Three.js', 'React Three Fiber', '3D Graphics'],
    projectUrl: 'https://3-d-designweb-h5p6.vercel.app/',
    imgSrc: img3D,
  },
  {
    title: 'SEA Biogastech',
    description:
      'Platform informasi dan teknologi terpadu untuk pengolahan energi terbarukan biogas yang ramah lingkungan.',
    tags: ['Laravel', 'Sustainable Energy', 'Clean Tech'],
    projectUrl: 'https://seabiogastech.com/',
    imgSrc: imgSea,
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
              projectUrl={project.projectUrl}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

