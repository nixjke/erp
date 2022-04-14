import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/image/LogoMySmartOffice.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={logo} alt="logo" />
        <div>|  CRM CompanyName</div>
      </div>
    </header>
  )
}
