import React from 'react'
import { useAppSelector } from '../../store/redux-hooks'
import styles from './Footer.module.scss'

export default function Footer() {
  const signin = useAppSelector(store => store.signin)
  console.log(signin.item.footer)

  if (!signin.isLoading)
    return (
      <footer className={styles.footer}>
        <div>
          <span>
            <h1>Loading...</h1>
          </span>
        </div>
      </footer>
    )

  return (
    <footer className={styles.footer}>
      <div>
        <span>© 2022,</span>
        <span>{signin.item.footer.footer.Links[0].title}</span>
      </div>
      <span className={styles.link} onClick={e => e.preventDefault()}>
        Политика конфиденциальности
      </span>
    </footer>
  )
}
