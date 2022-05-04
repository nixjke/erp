import React from 'react'
import s from './Body1.module.scss'

export default function Body1(props: any) {
  return <span className={s.body1}>{props.children}</span>
}
