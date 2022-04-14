import React from 'react'
import styles from './InitHeader.module.scss'
import logo from '../../assets/image/InitMySmartOffice.svg'
import { Link } from 'react-router-dom'

export default function InitHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.buttons}>
          <Link className={styles.signIn} to="/auth-platform">
            Войти
          </Link>
          <a className={styles.signUp} href="./">
            Зарегистрироваться бесплатно
          </a>
        </div>
      </div>
    </header>
  )
}
