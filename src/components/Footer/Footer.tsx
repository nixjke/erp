import React from 'react'
import { useAppSelector } from '../../store/redux-hooks'
import styles from './Footer.module.scss'

export default function Footer() {
  const signin = useAppSelector(store => store.signin)

  if (!signin.isFooter) return <></>

  return (
    <footer className={styles.footer}>
      <div>
        <span>© 2022,</span>
        {/* <span>{signin.item.footer.footer.Links[0].title}</span> */}
      </div>
      <span className={styles.link} onClick={e => e.preventDefault()}>
        Политика конфиденциальности
      </span>
    </footer>
  )
}
