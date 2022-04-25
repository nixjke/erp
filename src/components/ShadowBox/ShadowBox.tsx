import React from 'react'
import s from './ShadowBox.module.scss'

export default function ShadowBox(props: any) {
  return <div className={s.shadowBox}>{props.children}</div>
}
