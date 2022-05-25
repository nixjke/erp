import React from 'react'
import s from './PanelsPlatformActivation.module.scss'

interface Props {
  children?: React.ReactNode
}

export const PanelsPlatformActivation: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={s.panels}>
      <div className={s.body}>{children}</div>
    </div>
  )
}
