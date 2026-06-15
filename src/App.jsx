import { useState, useEffect } from 'react'
import Hero from './sections/Hero'
import MainLayout from './sections/MainLayout'
import './App.css'

function App() {
  const [showMain, setShowMain]   = useState(false)
  const [isLocked, setIsLocked]   = useState(false)
  const [scrollCount, setScrollCount] = useState(0)

  /* ── Transition to main section ── */
  const handleScrollDown = () => {
    setShowMain(true)
    setTimeout(() => {
      setIsLocked(true)
      setScrollCount(0)
    }, 750)
  }

  /* ── Return to hero (double-scroll-up OR button) ── */
  const handleBackToHero = () => {
    setIsLocked(false)
    setShowMain(false)
    setScrollCount(0)
  }

  /* ── Listen wheel/touch on hero for scroll-down trigger ── */
  useEffect(() => {
    if (showMain) return

    const handleWheel = (e) => {
      if (e.deltaY > 20) handleScrollDown()
    }
    const handleTouchStart = (e) => {
      const startY = e.touches[0].clientY
      const handleTouchMove = (mv) => {
        if (startY - mv.touches[0].clientY > 50) {
          handleScrollDown()
          window.removeEventListener('touchmove', handleTouchMove)
        }
      }
      window.addEventListener('touchmove', handleTouchMove, { passive: true })
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
    }
  }, [showMain])

  /* ── Double-scroll-up detection when in main section ── */
  useEffect(() => {
    if (!isLocked) return

    const handleWheel = (e) => {
      if (e.deltaY < -30) {
        setScrollCount((prev) => {
          const next = prev + 1
          if (next >= 2) {
            handleBackToHero()
            return 0
          }
          return next
        })
      } else if (e.deltaY > 30) {
        setScrollCount(0)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [isLocked])

  /* ── Reset double-scroll counter after 1.2s inactivity ── */
  useEffect(() => {
    if (scrollCount === 0) return
    const timer = setTimeout(() => setScrollCount(0), 1200)
    return () => clearTimeout(timer)
  }, [scrollCount])

  return (
    <div className={`app-wrapper ${isLocked ? 'locked' : ''}`}>
      {!isLocked && (
        <div className={`hero-wrapper ${showMain ? 'slide-up' : ''}`}>
          <Hero onScrollDown={handleScrollDown} />
        </div>
      )}

      <div className={`main-wrapper ${showMain ? 'slide-up' : ''} ${isLocked ? 'active' : ''}`}>
        <MainLayout />
      </div>

      {/* Luxury back-to-top button */}
      {isLocked && (
        <button
          className={`back-btn ${scrollCount >= 1 ? 'hinted' : ''}`}
          onClick={handleBackToHero}
          aria-label="Back to cover"
          title="Back to cover (or scroll up twice)"
        >
          <span className="back-btn__arrow">↑</span>
        </button>
      )}
    </div>
  )
}

export default App
