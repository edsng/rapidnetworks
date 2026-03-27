import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Package, Wrench, Search, Rocket } from 'lucide-react'
import { useInView } from './useInView'
import styles from './IndustrialParts.module.css'

const services = [
  {
    icon: Package,
    title: 'Custom Product Development',
    desc: 'For requirements that cannot be met with off-the-shelf solutions, we develop tailored products to your exact specifications.',
    tag: 'Development',
  },
  {
    icon: Search,
    title: 'Obsolete Parts Replacement',
    desc: 'We specialize in sourcing discontinued and hard-to-find components, ensuring your legacy systems stay operational.',
    tag: 'Sourcing',
  },
  {
    icon: Wrench,
    title: 'Industrial Parts Supply',
    desc: 'Beyond defense and aerospace, we supply industrial-grade components for manufacturing and heavy industry applications.',
    tag: 'Industrial',
  },
  {
    icon: Rocket,
    title: 'Full Procurement Service',
    desc: 'End-to-end procurement from 350+ manufacturers and authorized vendors with complete traceability and compliance documentation.',
    tag: 'Procurement',
  },
]

export default function IndustrialParts() {
  const [ref, inView] = useInView()
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      // rect.top = distance from viewport top to section top
      // Start: section top reaches 60% down the viewport (already partially visible)
      // End: section bottom reaches 80% of viewport (still mostly visible)
      const scrollStart = viewportHeight * 0.001
      const scrollEnd = viewportHeight * 0.9
      const currentPos = rect.top
      const scrolled = (scrollStart - currentPos) / (scrollStart + sectionHeight - scrollEnd)
      const clamped = Math.max(0, Math.min(1, scrolled))
      setProgress(clamped)

      // Map progress to active card index — tighter mapping
      const adjusted = (clamped - 0.05) / 0.8
      const idx = Math.floor(adjusted * services.length)
      setActiveIndex(Math.max(-1, Math.min(services.length - 1, idx)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="industrial" className={styles.section} ref={(el) => {
      ref.current = el
      sectionRef.current = el
    }}>
      <div className={styles.container}>
        <div className={styles.left}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Industrial Parts
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Scope of<br />Our Capabilities
          </motion.h2>
          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From sourcing to custom development, we provide comprehensive 
            procurement solutions for the world's most demanding industries.
          </motion.p>
          <motion.a
            href="#contact"
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Request a Consultation
          </motion.a>

          {/* Progress tracker — desktop only */}
          <motion.div
            className={styles.tracker}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className={styles.trackLine}>
              <div
                className={styles.trackFill}
                style={{ height: `${Math.max(0, Math.min(100, progress * 120 - 10))}%` }}
              />
            </div>
            <div className={styles.steps}>
              {services.map((s, i) => (
                <div
                  key={s.tag}
                  className={`${styles.step} ${i <= activeIndex ? styles.stepActive : ''}`}
                >
                  <div className={styles.stepDot}>
                    <s.icon size={12} />
                  </div>
                  <span className={styles.stepLabel}>{s.tag}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={styles.right}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={`${styles.card} ${i <= activeIndex ? styles.cardActive : ''}`}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <s.icon size={20} />
                </div>
                <span className={styles.tag}>{s.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
