import React from 'react'
import s from './Box.module.scss'

interface boxProps {
  children?: React.ReactNode
}

const Box: React.FC<boxProps> = ({ children }: boxProps) => {
  return <div className={s.box}>{children}</div>
}

export default Box
