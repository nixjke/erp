import React from 'react'
import s from './Body1.module.scss'

export default function Body1(props: any) {
  return <div className={s.body1}>{props.children}</div>
}
