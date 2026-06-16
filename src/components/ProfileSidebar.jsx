import profileImg from '../assets/profile.jpeg'
import styles from './ProfileSidebar.module.css'

import certTekser from '../assets/certificate/Miftahul Huda asisten tekser-1.png'
import certCsirt from '../assets/certificate/csirt-1.png'
import certTLab from '../assets/certificate/deploy T-lab.png'

const FRAMEWORKS = [
  'React', 'Laravel', 'PHP', 'FastAPI', 'Docker', 'Git',
]

const CERTIFICATES = [
  {
    title: 'Asisten Praktikum Teknologi Server',
    provider: 'Lab Jaringan',
    year: '2024',
    imgSrc: certTekser,
  },
  {
    title: 'Computer Security Incident Response Team (CSIRT)',
    provider: 'CSIRT',
    year: '2024',
    imgSrc: certCsirt,
  },
  {
    title: 'Deployment & Infrastructure',
    provider: 'T-Lab',
    year: '2024',
    imgSrc: certTLab,
  },
]

export default function ProfileSidebar({ onCertClick }) {
  return (
    <div className={styles.sidebar}>

      {/* Profile Header (Avatar + Name) */}
      <div className={styles.profileHeader}>
        <div className={styles.avatarWrap}>
          <img src={profileImg} alt="Miftahul Huda" className={styles.avatar} />
        </div>

        <div className={styles.identity}>
          <h2 className={styles.name}>MIFTAHUL<br />HUDA</h2>
          <p className={styles.role}>React Frontend Developer</p>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Section Content Grid */}
      <div className={styles.contentGrid}>
        {/* Frameworks */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Framework &amp; Tools</p>
          <div className={styles.tags}>
            {FRAMEWORKS.map((fw) => (
              <span key={fw} className={styles.tag}>{fw}</span>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Location */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Location</p>
          <p className={styles.sectionValue}>Yogyakarta, Indonesia</p>
        </div>

        {/* Github */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>GitHub</p>
          <a
            href="https://github.com/masmaspetualang"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            masmaspetualang ↗
          </a>
        </div>

        <div className={styles.divider} />

        {/* Certificates */}
        <div className={`${styles.section} ${styles.fullWidth}`}>
          <p className={styles.sectionLabel}>Certificates</p>
          <div className={styles.certList}>
            {CERTIFICATES.map((c) => (
              <div
                key={c.title}
                className={styles.certItem}
                onClick={() => onCertClick && onCertClick(c)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onCertClick && onCertClick(c)
                  }
                }}
              >
                <div className={styles.certDot} />
                <div className={styles.certInfo}>
                  <p className={styles.certTitle}>{c.title}</p>
                  <p className={styles.certMeta}>{c.provider} · {c.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status */}
      <div className={styles.statusWrap}>
        <span className={styles.statusDot} />
        <span className={styles.statusText}>Open to work</span>
      </div>

    </div>
  )
}

