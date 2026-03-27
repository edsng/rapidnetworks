import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="Rapid Networks" className={styles.logoIcon} />
              <div>
                <span className={styles.logoText}>RAPID</span>
                <span className={styles.logoSub}>NETWORKS</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Global defense and aerospace procurement. Trusted by South Korea's leading contractors.
            </p>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Products</h4>
            <a href="#defense" className={styles.footLink}>Defense & Aerospace</a>
            <a href="#industrial" className={styles.footLink}>Industrial Parts</a>
            <a href="#linecard" className={styles.footLink}>Line Card</a>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Services</h4>
            <a href="#compliance" className={styles.footLink}>Compliance</a>
            <a href="#contact" className={styles.footLink}>Support</a>
            <a href="#about" className={styles.footLink}>About Us</a>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Compliance</h4>
            <a href="https://www.pmddtc.state.gov/ddtc_public?id=ddtc_kb_article_page&sys_id=24d528fddbfc930044f9ff621f961987" target="_blank" rel="noopener noreferrer" className={styles.footLink}>ITAR (22 CFR 120-130)</a>
            <a href="https://www.bis.gov/regulations/ear" target="_blank" rel="noopener noreferrer" className={styles.footLink}>EAR (15 CFR 730-774)</a>
            <a href="https://www.pmddtc.state.gov/ddtc_public" target="_blank" rel="noopener noreferrer" className={styles.footLink}>DDTC</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Rapid Networks. All Rights Reserved.</p>
          <p className={styles.address}>3470 Wilshire Blvd. Suite 620, Los Angeles, CA 90010</p>
        </div>
      </div>
    </footer>
  )
}
