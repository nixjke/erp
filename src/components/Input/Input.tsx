import React from 'react'
import s from './Input.module.scss'

export default function Input(props: any) {
  return <input className={s.input} {...props}></input>
}
