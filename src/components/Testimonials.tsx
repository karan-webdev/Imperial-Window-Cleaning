import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import testimonial_1 from '../assets/testimonial_1.png'
import testimonial_2 from '../assets/testimonial_2.png'
import testimonial_3 from '../assets/testimonial_3.png'
import testimonial_4 from '../assets/testimonial_4.png'
import testimonial_5 from '../assets/testimonial_5.png'
import testimonial_6 from '../assets/testimonial_6.png'

const EASE = [0.22, 1, 0.36, 1] as const

const testimonials = [
  {
    name: 'Danielle Morris',
    location: 'Google Review',
    rating: 5,
    text: 'I got them out to soft wash my house. Cannot recommend them enough. 5 stars!',
    service: 'House Soft Washing',
    initials: 'DM',
    avatar: testimonial_1,
  },
  {
    name: 'Josh Whiting',
    location: 'Google Review',
    rating: 5,
    text: 'Such a great company. They came out and cleaned my driveway hassle-free. Would recommend them to anyone. Affordable prices as well.',
    service: 'Driveway Cleaning',
    initials: 'JW',
    avatar: testimonial_2,
  },
  {
    name: 'William Jenkins',
    location: 'Google Review',
    rating: 5,
    text: 'Cleaned our double-storey house. We will definitely be getting them back out next time we need anything cleaned on the exterior of our property.',
    service: 'Exterior House Cleaning',
    initials: 'WJ',
    avatar: testimonial_3,
  },
  {
    name: 'Gene Dutton99',
    location: 'Google Review',
    rating: 5,
    text: 'Very professional and efficient. Highly recommended. My pool area looks spectacular.',
    service: 'Pool Area Cleaning',
    initials: 'GD',
    avatar: testimonial_4,
  },
  {
    name: 'Josie',
    location: 'Google Review',
    rating: 5,
    text: 'Amazing job on our driveway.',
    service: 'Driveway Cleaning',
    initials: 'JO',
    avatar: testimonial_5,
  },
  {
    name: 'Clinton Joe',
    location: 'Google Review',
    rating: 5,
    text: 'Contacted the team at Imperial Window Cleaning for a last-minute driveway and patio clean. They managed to fit me into the schedule within 48 hours. Came out and did an amazing job. Couldn’t recommend them enough.',
    service: 'Driveway & Patio Cleaning',
    initials: 'CJ',
    avatar: testimonial_6,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      style={{
        background: '#0a0a0a',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── HEADER ── staggered fade-up */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}
          >
            — WHAT CLIENTS ARE SAYING
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 42px)',
              color: 'white',
              lineHeight: 1.05,
              margin: 0,
              fontWeight: 700,
              textTransform: 'none',
            }}
          >
            TRUSTED BY <span className="gradient-text">OUR CLIENTS</span>
          </motion.h2>
        </div>

        {/* ── SLIDER ── fades in as a block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px 0px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          style={{ position: 'relative' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 60 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -60 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: EASE }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                // borderRadius: '12px',
                padding: '3.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(17px, 2.2vw, 18px)',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={t.avatar} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '17px', color: 'white' }}>
                      {t.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                      {t.location}
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'var(--accent-soft)',
                  border: '1px solid var(--accent-glow)',
                  borderRadius: '100px',
                  padding: '6px 16px',
                  fontFamily: 'var(--font-condensed)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)',
                }}>
                  {t.service.toUpperCase()}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '2.5rem',
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  style={{
                    width: i === current ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '100px',
                    background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = i === current ? 'var(--accent)' : 'rgba(255,255,255,0.35)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = i === current ? 'var(--accent)' : 'rgba(255,255,255,0.2)'
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={prev}
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  cursor: 'pointer', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-dark)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)' }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── GOOGLE TRUST BADGE ── pops in last */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px 0px' }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
          style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}
        >
          <a
            href="https://www.google.com/search?q=imperial+window+cleaning+brisbane&rlz=1C1CHBF_enAU1094AU1094&oq=imperial+window+cleaning+brisbane&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzI5MmowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x4c1de21141633ebd:0xcb41edf12d5c611d,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 18px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/046/861/647/original/google-logo-transparent-background-free-png.png"
              alt="Google"
              style={{ width: 34, height: 34, objectFit: 'contain' }}
            />

            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', lineHeight: 1, gap: '4px', minWidth: 120,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', fontWeight: 600 }}>
                8 reviews
              </div>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  )
}