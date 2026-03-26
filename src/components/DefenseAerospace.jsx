import { motion } from 'framer-motion'
import { ShieldCheck, FileCheck, Layers, AlertTriangle } from 'lucide-react'
import { useInView } from './useInView'
import styles from './DefenseAerospace.module.css'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Highest Standards',
    desc: 'Aerospace parts must withstand the most demanding usage under extreme conditions. There is no margin for error — even the smallest part can cause total system failure.',
  },
  {
    icon: FileCheck,
    title: 'Full Traceability',
    desc: 'Every part assembled into the final product is accounted for — from manufacturing to assembly line. Our documentation ensures complete chain-of-custody integrity.',
  },
  {
    icon: Layers,
    title: 'Quality Control',
    desc: 'Material compliance, storage control, and delivery tracing are incorporated into our process to safeguard quality and analyze risk factors at every stage.',
  },
  {
    icon: AlertTriangle,
    title: 'Mission Critical',
    desc: 'We understand how mission critical your requirements are and are committed to providing quality, value, and sustained availability for defense operations.',
  },
]

export default function DefenseAerospace() {
  const [ref, inView] = useInView()

  return (
    <section id="defense" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Defense & Aerospace
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Uncompromising Accountability
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          In the defense and aerospace industry, precision isn't optional — it's everything. 
          We secure parts from the most reputable sources known for their unmatched quality.
        </motion.p>

        <div className={styles.grid}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.pillar}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className={styles.pillarIcon}>
                <p.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
              <div className={styles.pillarLine} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
