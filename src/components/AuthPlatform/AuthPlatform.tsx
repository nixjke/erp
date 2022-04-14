import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AuthPlatform.module.scss'

export default function AuthPlatform() {
  return (
    <div className={styles.authPlatform}>
      <div className={styles.form}>
        <Link to="/" className={styles.close}>
          X
        </Link>
        <form className={styles.authForm}>
          <h1>Войти в аккаунт</h1>
          <div className={styles.inputs}>
            <input type="text" placeholder="Название платформы" />
            <input type="text" value=".mysmartoffice.pro" readOnly />
          </div>
          <button className={styles.button}>Войти</button>
        </form>
      </div>
    </div>
  )
}
