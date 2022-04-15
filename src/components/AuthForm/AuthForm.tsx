import React from 'react'
import styles from './AuthForm.module.scss'

export default function AuthForm() {
  return (
    <div className={styles.authForm}>
      <form className={styles.form}>
        <h1>Войти в аккаунт</h1>
        <div className={styles.inputs}>
          <input className={styles.email} type="text" placeholder="Email" />
          <input className={styles.password} type="text" placeholder="Пароль" />
        </div>
        <a href="">Забыли пароль?</a>
        <label className={styles.label}>
          <input type="checkbox" />
          <span> Запомнить меня</span>
        </label>
        <button className={styles.button}>Войти</button>
        <div className={styles.register}>
          <p>Еще нет аккаунта?</p>
          <a href="">Зарегистируйтесь бесплатно</a>
        </div>
      </form>
    </div>
  )
}
