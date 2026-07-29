import { motion } from 'framer-motion'
import { Phone, Mail, User, MapPin, MessageSquare } from 'lucide-react'
import contact from '../assets/contact.webp'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ContactBanner() {
  return (
    <section
      id="contact"
      style={{ position: 'relative', overflow: 'hidden', padding: '8rem 2rem' }}
    >
      {/* BACKGROUND */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${contact})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
          zIndex: 0,
        }}
      />

      {/* OVERLAYS */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.78)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.92) 100%)',
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.9, ease: EASE }}
          >
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
              GET A FREE QUOTE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px 0px' }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(50px, 6vw, 90px)',
                color: 'white',
                lineHeight: 0.95,
                marginBottom: '1.5rem',
              }}
            >
              LET&apos;S BOOK
              <br />
              <span className="gradient-text">YOUR CLEAN</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px 0px' }}
              transition={{ duration: 0.75, delay: 0.28, ease: EASE }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                maxWidth: '420px',
              }}
            >
              Fill out the form and we'll get back to you fast with a real quote for Brisbane and Sunshine Coast properties.
            </motion.p>

            {/* CONTACT INFO */}
            <motion.div
              style={{
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              {[
                { icon: Phone, text: '0413 056 207' },
                { icon: Mail, text: 'imperialwindowcleaning@gmail.com' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px 0px' }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease: EASE }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <item.icon size={14} color="var(--accent)" />
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '2rem',
              backdropFilter: 'blur(12px)',
            }}
          >
            <form
              // action="https://formspree.io/f/xbjndlza"
              method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              {/* hidden inputs */}
              <input type="hidden" name="_subject" value="New Quote Request" />

              {[
                { icon: User, placeholder: 'Full Name', name: 'name' },
                { icon: Phone, placeholder: 'Phone Number', name: 'phone' },
                { icon: MapPin, placeholder: 'Suburb / Location', name: 'location' },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px 0px' }}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.08, ease: EASE }}
                  style={inputWrap}
                >
                  <field.icon size={16} color="var(--accent)" />
                  <input
                    name={field.name}
                    placeholder={field.placeholder}
                    style={inputStyle}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px 0px' }}
                transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
                style={{ ...inputWrap, alignItems: 'flex-start' }}
              >
                <MessageSquare size={16} color="var(--accent)" />
                <textarea
                  name="message"
                  placeholder="What do you need cleaned?"
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px 0px' }}
                transition={{ duration: 0.55, delay: 0.58, ease: EASE }}
                whileHover={{
                  translateY: -2,
                  boxShadow: '0 14px 40px rgba(164, 139, 67, 0.4)',
                }}
                whileTap={{ translateY: 0 }}
                className="button-pill button-pill-primary"
                style={{ marginTop: '10px', border: 'none', cursor: 'pointer' }}
              >
                REQUEST QUOTE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const inputWrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '10px',
  padding: '12px 14px',
  transition: 'border-color 0.2s ease',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'white',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
}