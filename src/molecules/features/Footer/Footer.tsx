import React from 'react'
import LinkTypography from '../../../atoms/LinkTypography/LinkTypography'
import s from './Footer.module.scss'

interface FooterProps {
  link?: string
  privacyPolicy?: string
}

const Footer: React.FC<FooterProps> = ({ link, privacyPolicy }: FooterProps) => {
  if (link === undefined || privacyPolicy === undefined) return <></>

  return (
    <footer className={s.footer}>
      <LinkTypography>{link}</LinkTypography>
      <LinkTypography>{privacyPolicy}</LinkTypography>
    </footer>
  )
}

export default Footer
