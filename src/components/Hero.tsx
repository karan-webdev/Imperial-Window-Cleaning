import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import hero from '../assets/hero.webp'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: 'calc(100vh - 72px)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '72px',
        background: '#0a0a0a',
      }}
    >
      <style>
        {`
          .hero-grid {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 3.5rem;
            min-height: 100%;
          }

          .hero-text-panel {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #0a0a0a;
            padding: 4rem 3rem;
            min-height: 100%;
            max-width: 600px;
            flex: 0 0 52%;
          }

          .hero-image-panel {
            position: relative;
            flex: 1;
            min-height: 520px;
            max-height: 520px;
            padding: 20px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.1);
            overflow: hidden;
            display: flex;
            align-items: stretch;
            justify-content: stretch;
          }

          .hero-image-panel::before {
            content: '';
            position: absolute;
            inset: 20px;
            background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.25) 100%);
            pointer-events: none;
          }

          .hero-image-panel > .hero-image-inner {
            position: relative;
            flex: 1;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            overflow: hidden;
          }

          @media (max-width: 900px) {
            .hero-grid {
              display: flex;
              flex-direction: column;
              gap: 2rem;
            }

            .hero-text-panel {
              padding: 3rem 2rem;
              border-radius: 0;
            }

            .hero-image-panel {
              min-height: 320px;
              max-height: none;
              width: 100%;
              margin-top: 2rem;
              border-radius: 0;
            }
          }
        `}
      </style>

      {/* MAIN TINT */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0a0a0a',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          padding: '0 2rem',
          flex: 1,
        }}
      >
        <div className="hero-grid">
          <div className="hero-text-panel">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1.25rem',
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'var(--font-condensed)',
                fontSize: '13px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '40px',
                  minWidth: '40px',
                  height: '2px',
                  background: 'var(--accent)',
                }}
              />
              BRISBANE'S BEST WINDOW CLEANING
            </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(54px, 8vw, 96px)',
              lineHeight: 0.9,
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
              textTransform: 'none',
              fontWeight: 600,
              maxWidth: '620px',
            }}
          >
            Flawless
            <br />
            <span
              style={{
                display: 'inline-block',
                background: 'linear-gradient(120deg, #bf953f 0%, #fcf6ba 45%, #b38728 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Clarity,
            </span>
            <br />
            Crafted.
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '520px',
              marginBottom: '2rem',
            }}
          >
            From soaring high-rise facades to prestige residential glass, we treat every pane like fine crystal — streak-free, fully insured, and finished by hand.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {/* PRIMARY BUTTON */}
            <motion.a
              href="tel:0413056207"
              whileHover={{ 
                backgroundColor: 'var(--accent-dark)'
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            className="button-pill button-pill-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <Phone size={16} />
              CALL NOW
            </motion.a>

            {/* OUTLINE BUTTON */}
            <motion.a
              href="#services"
              whileHover={{
                borderColor: '#ffffff'
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="button-pill button-pill-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              SERVICES <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          </div>

          <div className="hero-image-panel">
            <div
              className="hero-image-inner"
              style={{
                backgroundImage: `url(${hero})`,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}