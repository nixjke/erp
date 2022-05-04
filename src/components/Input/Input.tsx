import React from 'react'
import s from './Input.module.scss'

export default function Input(props: any) {
  return (
    <div style={props.styles}>
      <input className={`${s.input} ${props.error ? s.inputError : ''}`} {...props}></input>
      {props.error ? (
        <div className={s.error}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
              stroke="#EB5636"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 6L6 10"
              stroke="#EB5636"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L10 10"
              stroke="#EB5636"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className={s.errorText}>{props.errortext}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
