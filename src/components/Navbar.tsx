import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.png'

const links = ['Services', 'Testimonials', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // SWIPE REFS (UNCHANGED)
  const startX = useRef<number>(0)
  const currentX = useRef<number>(0)
  const dragging = useRef<boolean>(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ✅ CLEAN SCROLL LOCK (FIXED)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }, [open])

  // SWIPE TO CLOSE (UNCHANGED)
  useEffect(() => {
    if (!open) return

    const onTouchStart = (e: TouchEvent) => {
      dragging.current = true
      startX.current = e.touches[0].clientX
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current || !panelRef.current) return

      currentX.current = e.touches[0].clientX
      const diff = currentX.current - startX.current

      if (diff > 0) {
        panelRef.current.style.transform = `translateX(${diff}px)`
      }
    }

    const onTouchEnd = () => {
      if (!panelRef.current) return

      const diff = currentX.current - startX.current
      dragging.current = false

      if (diff > 60) {
        setOpen(false)
      } else {
        panelRef.current.style.transform = 'translateX(0px)'
      }
    }

    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [open])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,0.75)' : '#0a0a0a',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '3rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* LOGO */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Imperial Window Cleaning"
            style={{
              height: '100px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </a>

        {/* DESKTOP NAV */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}
        >
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA + MENU */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.a
            href="tel:0413056207"
            whileHover={{ backgroundColor: 'rgba(164, 139, 67, 0.16)' }}
            whileTap={{ backgroundColor: 'rgba(164, 139, 67, 0.2)' }}
            transition={{ duration: 0.2 }}
            className="button-pill button-pill-secondary-gold"
            style={{ textDecoration: 'none', gap: '8px', padding: '11px 20px' }}
          >
            <Phone size={14} />
            0413 056 207
          </motion.a>

          <button
            onClick={() => setOpen(true)}
            className="menu-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                zIndex: 199,
              }}
            />

            <motion.div
              ref={panelRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '100vh',
                background: '#000',
                zIndex: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
              }}
            >
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: 'fixed',
                  top: '18px',
                  right: '2rem',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  zIndex: 300,
                }}
              >
                <X size={26} />
              </button>

              {/* LINKS */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  marginTop: '4rem',
                }}
              >
                {links.map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontWeight: 700,
                      fontSize: '22px',
                      letterSpacing: '0.12em',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    {link.toUpperCase()}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <a
                href="tel:0413056207"
                className="button-pill button-pill-primary"
                style={{
                  marginTop: 'auto',
                  marginBottom: '4rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  gap: '10px',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
              >
                <Phone size={16} />
                0413 056 207
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .menu-btn { display: flex !important; }
          .cta-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}