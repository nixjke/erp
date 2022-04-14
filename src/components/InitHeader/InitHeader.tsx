import React from 'react'
import styles from './InitHeader.module.scss'
import logo from '../../assets/image/InitMySmartOffice.svg'

export default function InitHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.buttons}>
          <a className={styles.signIn} href="./">
            Войти
          </a>
          <a className={styles.signUp} href="./">
            Зарегистрироваться бесплатно
          </a>
        </div>
      </div>
    </header>
  )
}
