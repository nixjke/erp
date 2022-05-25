import React from 'react'
import s from './LinkTypography.module.scss'

interface LinkTypographyProps {
  size?: 'large' | 'normal' | 'medium' | 'small' | 'extraSmall'
  children?: React.ReactNode
  style?: React.CSSProperties
}

const LinkTypography: React.FC<LinkTypographyProps> = ({
  size = 'medium',
  children,
  style
}: LinkTypographyProps) => {
  let linkSize = `${size}`

  if (size === 'large') {
    linkSize = s.large
  }
  if (size === 'normal') {
    linkSize = s.normal
  }
  if (size === 'medium') {
    linkSize = s.medium
  }
  if (size === 'small') {
    linkSize = s.small
  }
  if (size === 'extraSmall') {
    linkSize = s.extraSmall
  }

  return <span style={style} className={`${s.link} ${linkSize}`}>{children}</span>
}

export default LinkTypography
