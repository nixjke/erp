import React from 'react'
import s from './Input.module.scss'

export default function Input(props: any) {
  console.log(props)
  return (
    <>
      <input className={`${s.input} ${props.error ? s.inputError : ''}`} {...props}></input>
      {props.error ? <div className={s.error}>{props.errortext}</div> : ''}
    </>
  )
}
