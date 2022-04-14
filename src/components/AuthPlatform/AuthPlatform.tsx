import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './AuthPlatform.module.scss'

export default function AuthPlatform() {
  const navigate = useNavigate()

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
          <button
            onClick={e => {
              e.preventDefault()
              navigate('/company-name/signin')
            }}
            className={styles.button}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}
