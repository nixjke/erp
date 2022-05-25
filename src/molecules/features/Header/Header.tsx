import React from 'react'
import s from './Header.module.scss'
import Typography from '../../../atoms/Typography/Typography'

interface HeaderProps {
  logo?: string
  name?: string
  PlatformActivation?: boolean
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({
  logo,
  name,
  PlatformActivation = false,
  children,
}: HeaderProps) => {
  if (logo === undefined || name === undefined) return <></>

  return PlatformActivation ? (
    <header className={s.headerPlatform}>
      <div className={s.logo}>
        <img src={logo} alt='Logo' />
      </div>
      <Typography style={{display: 'flex'}} variant='h5'>{children}</Typography>
    </header>
  ) : (
    <header className={s.header}>
      <div className={s.logo}>
        {logo}
        <img src='' alt='Logo' />
      </div>
      <Typography variant='h2'>| {name}</Typography>
    </header>
  )
}

export default Header
