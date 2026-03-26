import { motion } from 'framer-motion'
import { Target, Zap, Award, TrendingUp } from 'lucide-react'
import { useInView } from './useInView'
import styles from './About.module.css'

const features = [
  {
    icon: Target,
    title: 'Precision Sourcing',
    desc: 'We locate and deliver virtually any defense or aerospace component from our network of 350+ trusted manufacturers.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Our procurement service achieves the highest turnout rate, giving you fast turnover for mission-critical operations.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    desc: 'Process documentation incorporates material compliance, storage control, and delivery traceability.',
  },
  {
    icon: TrendingUp,
    title: 'Custom Solutions',
    desc: 'When off-the-shelf products can\'t meet requirements, our R&D services develop tailored solutions.',
  },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We will find what<br />you can't
          </motion.h2>
          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rapid Networks is proud to take part in the defense and aerospace industry, committed 
            to delivering the best quality products and optimal R&D solutions. Our service extends 
            beyond procurement to custom product development.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className={styles.iconWrap}>
                <f.icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
