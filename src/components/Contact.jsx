import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react'
import { useInView } from './useInView'
import styles from './Contact.module.css'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '213-487-1600', href: 'tel:2134871600' },
  { icon: Mail, label: 'Email', value: 'sales@rapidnetworks.com', href: 'mailto:sales@rapidnetworks.com' },
  { icon: MapPin, label: 'Office', value: '3470 Wilshire Blvd. Suite 620, Los Angeles, CA 90010' },
  { icon: Clock, label: 'Fax', value: '213-487-1602' },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Quote Request from ${formData.name} - ${formData.company}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.location.href = `mailto:sales@rapidnetworks.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.left}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's discuss your<br />requirements
          </motion.h2>
          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you need a specific component sourced or a custom solution developed, 
            our team is ready to help.
          </motion.p>

          <div className={styles.infoList}>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className={styles.infoItem}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <div className={styles.infoIcon}>
                  <item.icon size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className={styles.infoValue}>{item.value}</a>
                  ) : (
                    <span className={styles.infoValue}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.formWrap}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.formInner} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Name</label>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email</label>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Company</label>
              <input
                type="text"
                name="company"
                className={styles.input}
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Message</label>
              <textarea
                name="message"
                className={styles.textarea}
                placeholder="Describe your requirements..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="button" className={styles.submitBtn} onClick={handleSubmit}>
              <Send size={16} />
              Send Request
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
