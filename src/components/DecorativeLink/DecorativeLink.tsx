import React from 'react'
import s from './DecorativeLink.module.scss'

export default function DecorativeLink(props: any) {
  return <div className={s.link}>{props.children}</div>
}
