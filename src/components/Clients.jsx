import { motion } from 'framer-motion'
import { useInView } from './useInView'
import styles from './Clients.module.css'

const base = import.meta.env.BASE_URL

const clients = [
  { name: 'Korea Aerospace Industries', logo: `${base}kai.png` },
  { name: 'Hanwha Land Systems', logo: `${base}hanwha.png` },
  { name: 'Hyundai J-Com', logo: `${base}hyundai.png` },
  { name: 'Doosan Mottrol', logo: `${base}mottrol.png` },
  { name: 'Firstec Co, LTD', logo: `${base}firsttec.png` },
  { name: 'Hana Systems', logo: `${base}hanasystems.png` },
  { name: 'Samyung ENC', logo: `${base}samyung.png` },
  { name: 'Youngpoong Electronics', logo: `${base}ypelectronics.png` },
]

export default function Clients() {
  const [ref, inView] = useInView()

  return (
    <section id="clients" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted By
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Industry Leaders That<br />Rely On Our Service
        </motion.h2>

        <div className={styles.grid}>
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              className={styles.clientCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className={styles.clientLogo}
                  title={client.name}
                />
              ) : (
                <span className={styles.clientName}>{client.name}</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Serving South Korea's premier defense and aerospace organizations
        </motion.p>
      </div>
    </section>
  )
}
