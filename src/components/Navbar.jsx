import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  {
    label: 'Products',
    href: '#defense',
    children: [
      { label: 'Defense & Aerospace', href: '#defense' },
      { label: 'Industrial Parts', href: '#industrial' },
      { label: 'Line Card', href: '#linecard' },
    ],
  },
  {
    label: 'Services',
    href: '#compliance',
    children: [
      { label: 'Compliance', href: '#compliance' },
      { label: 'Support', href: '#contact' },
    ],
  },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMobileNav = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 350)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="Rapid Networks" className={styles.logoIcon} />
          <div>
            <span className={styles.logoText}>RAPID</span>
            <span className={styles.logoSub}>NETWORKS</span>
          </div>
        </a>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={styles.linkWrapper}
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={link.href} className={styles.navLink}>
                {link.label}
                {link.children && <ChevronDown size={14} style={{ marginLeft: 4 }} />}
              </a>
              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.children.map((child) => (
                      <a key={child.label} href={child.href} className={styles.dropdownItem}>
                        {child.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <a href="#contact" className={styles.cta}>Request Quote</a>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={(e) => handleMobileNav(e, link.href)}
                >
                  {link.label}
                </a>
                {link.children?.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    className={styles.mobileSubLink}
                    onClick={(e) => handleMobileNav(e, child.href)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
            <a href="#contact" className={styles.mobileCta} onClick={(e) => handleMobileNav(e, '#contact')}>
              Request Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
