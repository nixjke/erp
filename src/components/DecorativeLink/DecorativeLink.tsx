import React from 'react'
import s from './DecorativeLink.module.scss'

export default function DecorativeLink(props: any) {
  return <span style={props.style} className={s.link}>{props.children}</span>
}
