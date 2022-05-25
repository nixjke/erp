import React from 'react'

import { Typography as MuiTypography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'

import { Variant } from '@mui/material/styles/createTypography'

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Montserrat',
      fontSize: '36px',
      fontWeight: '700',
      letterSpacing: '0.5px',
      '@media only screen and (max-width: 900px)': {
        fontSize: '32px',
      },
      '@media only screen and (max-width: 600px)': {
        fontSize: '24px',
      },
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '28px',
      fontWeight: '700',
      '@media only screen and (max-width: 900px)': {
        fontSize: '24px',
      },
      '@media only screen and (max-width: 600px)': {
        fontSize: '20px',
      },
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '21px',
      fontWeight: '700',
      '@media only screen and (max-width: 900px)': {
        fontSize: '21px',
      },
      '@media only screen and (max-width: 600px)': {
        fontSize: '18px',
      },
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '700',
      '@media only screen and (max-width: 600px)': {
        fontSize: '16px',
      },
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '16px',
      fontWeight: '700',
      '@media only screen and (max-width: 600px)': {
        fontSize: '14px',
      },
    },
    body1: {
      fontFamily: 'Montserrat',
      fontSize: '16px',
      fontWeight: '400',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontSize: '14px',
      fontWeight: '400',
    },
    caption: {
      fontFamily: 'Montserrat',
      fontSize: '12px',
      fontWeight: '400',
    },
    button: {
      fontFamily: 'Montserrat',
      fontSize: '16px',
      fontWeight: '400',
    },
  },
})

interface TypographyProps {
  variant?: Variant
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  children,
  style,
}: TypographyProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTypography style={style} variant={variant}>
        {children}
      </MuiTypography>
    </ThemeProvider>
  )
}

export default Typography
