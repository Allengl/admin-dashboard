import React, { FC } from 'react'

interface ButtonProps {
  bgColor?: string
  color?: string
  size?: string
  text?: string
  borderRadius?: string

}

const Button: FC<ButtonProps> = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl `}
    >
      {text}
    </button>
  )
}

export default Button
