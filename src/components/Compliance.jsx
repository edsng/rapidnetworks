import { motion } from 'framer-motion'
import { useInView } from './useInView'
import styles from './Compliance.module.css'

const regulations = [
  {
    name: 'ITAR',
    ref: '22 CFR 120-130',
    refUrl: 'https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M/part-120?toc=1',
    color: '#3b82f6',
    points: [
      'Regulates military items and defense articles based on the USML',
      'Covers goods and technology designed for military settings',
      'Governed by strict regulatory licensing',
      'Includes space-related and missile technology',
      'Covers technical data and services for defense articles',
    ],
  },
  {
    name: 'EAR',
    ref: '15 CFR 730-774',
    refUrl: 'https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-730',
    color: '#10b981',
    points: [
      'Covers commercial items with potential military application (CCL)',
      'Includes both goods and technology such as computers and software',
      'Licensing addresses competing interests and foreign availability',
      'Combines commercial and research with national security objectives',
    ],
  },
]

export default function Compliance() {
  const [ref, inView] = useInView()

  return (
    <section id="compliance" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Compliance
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Regulation Compliance
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Trading defense articles is strictly controlled. We are registered as an Exporter / Broker 
            at DDTC and can guide you through the regulatory maze so you can focus on your core business.
          </motion.p>
        </div>

        <div className={styles.cards}>
          {regulations.map((reg, i) => (
            <motion.div
              key={reg.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              style={{ '--card-accent': reg.color }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardBadge} style={{ background: reg.color }}>
                  {reg.name}
                </div>
                <a href={reg.refUrl} target="_blank" rel="noopener noreferrer" className={styles.cardRef}>{reg.ref}</a>
              </div>
              <ul className={styles.list}>
                {reg.points.map((pt, j) => (
                  <li key={j} className={styles.listItem}>
                    <span className={styles.bullet} style={{ background: reg.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.ddtc}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className={styles.ddtcIcon}>✓</div>
          <div>
            <p className={styles.ddtcTitle}>Registered Exporter / Broker at DDTC</p>
            <p className={styles.ddtcDesc}>
              Rapid Networks can walk you through the maze of regulations, so you can focus on your core strength of business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
