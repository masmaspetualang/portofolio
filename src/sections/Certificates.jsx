import CertificateCard from '../components/CertificateCard'
import styles from './Certificates.module.css'

import certTekser from '../assets/certificate/Miftahul Huda asisten tekser-1.png'
import certCsirt from '../assets/certificate/csirt-1.png'
import certTLab from '../assets/certificate/deploy T-lab.png'

const CERTIFICATES = [
  {
    title: 'Asisten Praktikum Teknologi Server',
    provider: 'Laboratorium Jaringan & Komunikasi Data',
    year: '2024',
    imgSrc: certTekser,
  },
  {
    title: 'Computer Security Incident Response Team (CSIRT)',
    provider: 'Cyber Security & Incident Response',
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

export default function Certificates({ onCertClick }) {
  return (
    <section className={styles.section} aria-label="Certificates">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Certificates</h2>
        <p className={styles.sectionSub}>
          {CERTIFICATES.length} credentials
        </p>
      </div>

      <div className={styles.grid}>
        {CERTIFICATES.map((cert, i) => (
          <div
            key={cert.title}
            className={styles.gridItem}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <CertificateCard
              title={cert.title}
              provider={cert.provider}
              year={cert.year}
              imgSrc={cert.imgSrc}
              onClick={() => onCertClick && onCertClick(cert)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
