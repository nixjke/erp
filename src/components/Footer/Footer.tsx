import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>© 2022,</span>
        <span>mysmartoffice.pro</span>
      </div>
      <a onClick={e => e.preventDefault()}>Политика конфиденциальности</a>
    </footer>
  )
}
