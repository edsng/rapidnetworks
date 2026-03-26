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

  const logos = [...clients, ...clients, ...clients]

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
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Serving South Korea's premier defense and aerospace organizations
        </motion.p>
      </div>

      <motion.div
        className={styles.carouselWrap}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <div className={styles.track}>
          {logos.map((client, i) => (
            <div key={`${client.name}-${i}`} className={styles.logoItem}>
              <img
                src={client.logo}
                alt={client.name}
                className={styles.clientLogo}
                title={client.name}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
