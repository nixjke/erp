import React from 'react'
import s from './Input.module.scss'

export default function Input(props: any) {
  return (
    <div style={props.styles}>
      <input className={`${s.input} ${props.error ? s.inputError : ''}`} {...props}></input>
      {props.error ? <div className={s.error}>{props.errortext}</div> : ''}
    </div>
  )
}
