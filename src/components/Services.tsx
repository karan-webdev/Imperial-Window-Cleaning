import { motion, type Variants, type Transition } from 'framer-motion'
import { useState } from 'react'
import { Droplet, Sun, Grid2x2, Wrench, Zap, type LucideIcon } from 'lucide-react'

const services: Array<{
  id: number
  category: string
  title: string
  desc: string
  icon: LucideIcon
}> = [
  {
    id: 1,
    category: 'Cleaning',
    title: 'WINDOW CLEANING',
    desc: 'Professional interior and exterior window cleaning for a streak-free finish.',
    icon: Grid2x2,
  },
  {
    id: 2,
    category: 'Cleaning',
    title: 'SOFT WASHING',
    desc: 'Gentle, effective cleaning for delicate surfaces and exterior walls.',
    icon: Droplet,
  },
  {
    id: 3,
    category: 'Cleaning',
    title: 'PRESSURE WASHING',
    desc: 'Deep clean for concrete, paths, driveways and other tough exterior surfaces.',
    icon: Zap,
  },
  {
    id: 4,
    category: 'Cleaning',
    title: 'SOLAR PANEL CLEANING',
    desc: 'Remove dust and grime to help improve panel performance and appearance.',
    icon: Sun,
  },
  {
    id: 5,
    category: 'Cleaning',
    title: 'GUTTER CLEANING',
    desc: 'Clear debris and leave gutters flowing properly to protect the property.',
    icon: Wrench,
  },
]

// ─── Fix 1: ease must be typed `as const` so TS sees a tuple, not number[] ───
const EASE = [0.22, 1, 0.36, 1] as const

// ─── Fix 2: cast variants using Variants from framer-motion.
//     The `custom` param pattern works fine at runtime but TS complains
//     about the index signature. Typing the object as Variants + using
//     `as const` for ease resolves both errors cleanly. ──────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,       // was 0.12 — slower stagger
      duration: 0.9,         // was 0.65
      ease: EASE,
    } satisfies Transition,
  }),
}

const cardImageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.11,       // was 0.07
      duration: 0.75,        // was 0.55
      ease: EASE,
    } satisfies Transition,
  }),
}

const cardTextVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.11 + 0.28, // was i * 0.07 + 0.18
      duration: 0.65,          // was 0.45
      ease: EASE,
    } satisfies Transition,
  }),
}

export default function Services() {
  const [gridSeen, setGridSeen] = useState(false)
  const filtered = services

  return (
    <section id="services" style={{ padding: '7rem 2rem', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px 0px' }}
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: 'var(--accent)',
              fontWeight: 800,
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            — Services
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px 0px' }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(38px, 4.8vw, 58px)',
              lineHeight: 0.95,
              fontWeight: 900,
              textTransform: 'uppercase',
              margin: 0,
              color: 'white',
            }}
          >
            Trusted Exterior<br />
            <span className="gradient-text">Cleaning Services</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px 0px' }}
            style={{
              maxWidth: '560px',
              margin: '1.2rem auto 0',
              color: 'rgba(255,255,255,0.72)',
              fontSize: '15px',
              lineHeight: 1.6,
            }}
          >
            From streak-free window cleaning to soft washing and gutter care, we deliver reliable service with attention to detail.
          </motion.p>
        </div>

        {/* GRID */}
        <motion.div
          layout
          transition={{ layout: { type: 'spring', stiffness: 120, damping: 18 } }}
          className="services-grid"
          onViewportEnter={() => setGridSeen(true)}
          viewport={{ once: true, margin: '-60px 0px' }}
        >
            {filtered.map((s, i) => {
              const Icon = s.icon

              return (
                <motion.div
                  layout
                  key={s.id}
                  custom={i}
                  variants={cardImageVariant}
                  initial="hidden"
                  animate={gridSeen ? 'visible' : 'hidden'}
                  className="scard"
                >
                  <div className="scard-content">
                    <div className="scard-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="scard-title">{s.title}</h3>
                    <p className="scard-desc">{s.desc}</p>
                  </div>
                </motion.div>
              )
            })}
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px 0px' }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
        >
          <motion.a
            href="#contact"
            whileHover={{ backgroundColor: 'var(--accent-dark)' }}
            whileTap={{ backgroundColor: 'var(--accent-dark)' }}
            transition={{ duration: 0.2 }}
            className="button-pill button-pill-primary"
            style={{ textDecoration: 'none' }}
          >
            Get a Free Quote →
          </motion.a>
        </motion.div>

      </div>

      {/* STYLES */}
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(250px, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .scard {
          position: relative;
          border-radius: 0;
          overflow: hidden;
          cursor: default;
          min-height: 220px;
          display: flex;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .scard-content {
          position: relative;
          inset: auto;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .scard-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(201, 168, 76, 0.12);
          color: var(--accent);
          margin-bottom: 18px;
        }

        .scard-title {
          color: white;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0;
          margin-bottom: 10px;
        }

        .scard-desc {
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
          }
        }

        @media (max-width: 700px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}