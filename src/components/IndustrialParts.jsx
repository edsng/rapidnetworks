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

  return (
    <section id="industrial" className={styles.section} ref={ref}>
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
        </div>

        <div className={styles.right}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.card}
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
