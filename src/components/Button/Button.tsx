import React from 'react'
import s from './Button.module.scss'

export default function Button(props: any) {
  return <button className={s.button}>{props.children}</button>
}
