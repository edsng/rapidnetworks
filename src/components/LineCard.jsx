import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, CircuitBoard, Radio, Gauge, Plug, Cog, X } from 'lucide-react'
import { useInView } from './useInView'
import styles from './LineCard.module.css'

const categories = [
  {
    icon: CircuitBoard,
    title: 'Semiconductors & ICs',
    desc: 'Microprocessors, FPGAs, ASICs, memory modules, and logic devices from qualified manufacturers.',
    suppliers: [
      'Actel', 'Advanced Micro Device (AMD)', 'AMCC', 'Analog Devices Inc', 'Atmel',
      'Avago Technologies', 'BroadCom', 'Cavium Networks', 'Cirrus Logic', 'Conexant',
      'Fairchild Semiconductor', 'Freescale Semiconductor', 'Intel', 'Kemet Electronics',
      'Littlefuse Inc', 'Maxim Integrated', 'Micron', 'Microsemi', 'Microsemiconductor',
      'Micross', 'Motorola', 'National Semiconductor', 'ON Semiconductor', 'QLogic',
      'Rohm Semiconductor', 'SGS Thompson', 'Texas Instruments', 'Toshiba', 'Vishay',
      'Xilinx', 'Yageo',
    ],
  },
  {
    icon: Radio,
    title: 'RF & Microwave',
    desc: 'Amplifiers, filters, connectors, and antenna systems for communication and radar applications.',
    suppliers: [
      'Aeroflex', 'Agilent Technology', 'Anritsu', 'Delta Microwave',
      'Hittite Microwave Corporation', 'Polyphaser', 'Radicon',
    ],
  },
  {
    icon: Plug,
    title: 'Connectors & Cables',
    desc: 'MIL-SPEC connectors, high-reliability cable assemblies, and interconnect solutions.',
    suppliers: [
      'Allied Wire & Cables', 'Amphenol', 'Array Connector', 'Buchanan', 'Cinch',
      'Cristek', 'Deutsch', 'Fischer', 'Glenair', 'Harwin', 'ITT Cannon',
      'Positronics', 'Souriau', 'Sunbank', 'TE Connectivity',
    ],
  },
  {
    icon: Gauge,
    title: 'Sensors & Instruments',
    desc: 'Pressure, temperature, and inertial sensors with full traceability for mission-critical systems.',
    suppliers: [
      'Barksdale', 'Honeywell', 'Mitutoyo', 'MTS Temposonics',
      'Omron Electronics Inc', 'Sensata Technologies / Airpax', 'Wika',
    ],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    desc: 'Single-board computers, rugged displays, and embedded processing platforms.',
    suppliers: [
      'Applied Data Systems', 'BEA Systems', 'Delta Computer Systems',
    ],
  },
  {
    icon: Cog,
    title: 'Electromechanical',
    desc: 'Motors, actuators, relays, switches, and power distribution components.',
    suppliers: [
      'Alp Electronics', 'AVX Corporation', 'Bourns Inc', 'Cooper Bussmann',
      'Cornell Dubilier Electronics', 'EPCOS Inc', 'Johanson Technology Inc',
      'Murata Electronics', 'Panasonic', 'Schurter Inc', 'Sprague', 'TDK Corporation',
    ],
  },
]

export default function LineCard() {
  const [ref, inView] = useInView()
  const [activeCategory, setActiveCategory] = useState(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeCategory !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeCategory])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveCategory(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const active = activeCategory !== null ? categories[activeCategory] : null

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
              onClick={() => setActiveCategory(i)}
            >
              <div className={styles.iconWrap}>
                <c.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <span className={styles.cardCount}>
                {c.suppliers.length >= 5
                  ? `${c.suppliers.length}+ featured manufacturers`
                  : 'Featured manufacturers'}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveCategory(null)}
            />
            <div className={styles.modalWrap} onClick={() => setActiveCategory(null)}>
              <motion.div
                className={styles.modal}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
              <div className={styles.modalHeader}>
                <div className={styles.modalHeaderLeft}>
                  <div className={styles.modalIcon}>
                    <active.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className={styles.modalTitle}>{active.title}</h3>
                    <p className={styles.modalSubtitle}>{active.suppliers.length} manufacturers</p>
                  </div>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setActiveCategory(null)}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <p className={styles.modalDesc}>{active.desc}</p>
              <div className={styles.supplierGrid}>
                {active.suppliers.map((s) => (
                  <div key={s} className={styles.supplierItem}>
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
