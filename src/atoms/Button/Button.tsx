import React from 'react'
import s from './Button.module.scss'

interface ButtonProps {
  size?: 'large' | 'normal' | 'medium' | 'small' | 'extraSmall'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  size = 'normal',
  color = 'primary',
  disabled = false,
  children,
  style,
  ...props
}: ButtonProps) => {
  if (disabled === true) {
  }

  let buttonSize = `${size}`

  if (size === 'large') {
    buttonSize = s.large
  }
  if (size === 'normal') {
    buttonSize = s.normal
  }
  if (size === 'medium') {
    buttonSize = s.medium
  }
  if (size === 'small') {
    buttonSize = s.small
  }
  if (size === 'extraSmall') {
    buttonSize = s.extraSmall
  }

  let buttonColor = `${color}`

  if (color === 'primary') {
    buttonColor = s.primary
  } else {
    buttonColor = s.secondary
  }

  return (
    <div>
      <button
        disabled={disabled}
        {...props}
        className={`${s.button} ${buttonSize} ${buttonColor} ${disabled ? s.disabled : ''}`}
        style={style}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
