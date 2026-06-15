import GalleryCard from '../components/GalleryCard'
import styles from './Collection.module.css'

import img1  from '../assets/portofolio-picture/1.jpeg'
import img2  from '../assets/portofolio-picture/2.jpeg'
import img3  from '../assets/portofolio-picture/3.jpeg'
import img4  from '../assets/portofolio-picture/4.jpeg'
import img5  from '../assets/portofolio-picture/5.jpeg'
import img6  from '../assets/portofolio-picture/6.jpeg'
import img7  from '../assets/portofolio-picture/7.jpeg'
import img8  from '../assets/portofolio-picture/8.jpeg'
import img9  from '../assets/portofolio-picture/9.jpeg'
import img10 from '../assets/portofolio-picture/10.jpeg'
import img11 from '../assets/portofolio-picture/11.jpeg'
import img12 from '../assets/portofolio-picture/12.jpeg'
import img13 from '../assets/portofolio-picture/13.png'

const COLLECTION = [
  { imgSrc: img1,  alt: 'Portfolio photo 1' },
  { imgSrc: img2,  alt: 'Portfolio photo 2' },
  { imgSrc: img3,  alt: 'Portfolio photo 3' },
  { imgSrc: img4,  alt: 'Portfolio photo 4' },
  { imgSrc: img5,  alt: 'Portfolio photo 5' },
  { imgSrc: img6,  alt: 'Portfolio photo 6' },
  { imgSrc: img7,  alt: 'Portfolio photo 7' },
  { imgSrc: img8,  alt: 'Portfolio photo 8' },
  { imgSrc: img9,  alt: 'Portfolio photo 9' },
  { imgSrc: img10, alt: 'Portfolio photo 10' },
  { imgSrc: img11, alt: 'Portfolio photo 11' },
  { imgSrc: img12, alt: 'Portfolio photo 12' },
  { imgSrc: img13, alt: 'Portfolio photo 13' },
]

export default function Collection() {
  return (
    <section className={styles.section} aria-label="Collection">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Collection</h2>
        <p className={styles.sectionSub}>{COLLECTION.length} items</p>
      </div>

      <div className={styles.grid}>
        {COLLECTION.map((item, i) => (
          <div
            key={i}
            className={styles.gridItem}
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <GalleryCard
              imgSrc={item.imgSrc}
              alt={item.alt}
              index={i}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
