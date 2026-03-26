import { motion } from 'framer-motion'
import { ArrowRight, Shield, Cpu, Globe } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridOverlay} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      
      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Shield size={14} />
          <span>ITAR & EAR Registered · DDTC Certified</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Global Defense &<br />
          Aerospace <span className={styles.accent}>Procurement</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Trusted by South Korea's leading defense contractors. We source mission-critical 
          components from 350+ manufacturers with full regulatory compliance.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#contact" className={styles.primaryBtn}>
            Get Started
            <ArrowRight size={18} />
          </a>
          <a href="#about" className={styles.secondaryBtn}>
            Learn More
          </a>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNumber}>350+</span>
            <span className={styles.statLabel}>Manufacturers</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Major Clients</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>12+</span>
            <span className={styles.statLabel}>Years of Service</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
