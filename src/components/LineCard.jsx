import { motion } from 'framer-motion'
import { Cpu, CircuitBoard, Radio, Gauge, Plug, Cog } from 'lucide-react'
import { useInView } from './useInView'
import styles from './LineCard.module.css'

const categories = [
  {
    icon: CircuitBoard,
    title: 'Semiconductors & ICs',
    desc: 'Microprocessors, FPGAs, ASICs, memory modules, and logic devices from qualified manufacturers.',
  },
  {
    icon: Radio,
    title: 'RF & Microwave',
    desc: 'Amplifiers, filters, connectors, and antenna systems for communication and radar applications.',
  },
  {
    icon: Plug,
    title: 'Connectors & Cables',
    desc: 'MIL-SPEC connectors, high-reliability cable assemblies, and interconnect solutions.',
  },
  {
    icon: Gauge,
    title: 'Sensors & Instruments',
    desc: 'Pressure, temperature, and inertial sensors with full traceability for mission-critical systems.',
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    desc: 'Single-board computers, rugged displays, and embedded processing platforms.',
  },
  {
    icon: Cog,
    title: 'Electromechanical',
    desc: 'Motors, actuators, relays, switches, and power distribution components.',
  },
]

export default function LineCard() {
  const [ref, inView] = useInView()

  return (
    <section id="linecard" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Line Card
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Product Categories
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We represent and source from leading manufacturers across all major defense 
          and aerospace component categories.
        </motion.p>

        <div className={styles.grid}>
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
            >
              <div className={styles.iconWrap}>
                <c.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
