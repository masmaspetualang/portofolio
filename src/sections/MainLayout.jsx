import { useState, useEffect, useRef } from 'react'
import ProfileSidebar from '../components/ProfileSidebar'
import CategoryNavigation from '../components/CategoryNavigation'
import About from './About'
import Projects from './Projects'
import Collection from './Collection'
import Certificates from './Certificates'
import CertificateModal from '../components/CertificateModal'
import styles from './MainLayout.module.css'

const SECTIONS = {
  about: About,
  projects: Projects,
  collection: Collection,
  certificates: Certificates,
}

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState('about')
  const [selectedCert, setSelectedCert] = useState(null)
  const contentBodyRef = useRef(null)
  const layoutRef = useRef(null)

  useEffect(() => {
    if (contentBodyRef.current) {
      contentBodyRef.current.scrollTop = 0
    }
    if (layoutRef.current) {
      layoutRef.current.scrollTop = 0
    }
  }, [activeSection])

  const ActiveComponent = SECTIONS[activeSection]

  return (
    <div className={styles.layout} ref={layoutRef}>
      {/* Left: Fixed sidebar */}
      <aside className={styles.sidebar}>
        <ProfileSidebar onCertClick={setSelectedCert} />
      </aside>

      {/* Right: Content */}
      <main className={styles.content}>
        <CategoryNavigation
          active={activeSection}
          onChange={setActiveSection}
        />
        <div className={styles.contentBody} ref={contentBodyRef} key={activeSection}>
          <ActiveComponent onCertClick={setSelectedCert} />
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  )
}

