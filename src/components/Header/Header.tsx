import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/image/LogoMySmartOffice.svg'
import { useAppSelector } from '../../store/redux-hooks'

export default function Header() {
  const signin = useAppSelector(store => store.signin)

  if (!signin.isHeader) return <></>

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={logo} alt={signin.item.header.Image[0].title} />
        <div>| {signin.item.header.Texts[0].title}</div>
      </div>
    </header>
  )
}
