import React from 'react'
import s from './Checkbox.module.scss'

interface CheckboxProps {
  isChecked?: boolean
  disabled?: boolean
  onChange?: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked = false,
  disabled = false,
  ...props
}: CheckboxProps) => {
  return (
    <input
      defaultChecked={isChecked}
      className={`${s.checkbox} ${disabled ? s.disabled : ''}`}
      type='checkbox'
      disabled={disabled}
      {...props}
    />
  )
}

export default Checkbox
