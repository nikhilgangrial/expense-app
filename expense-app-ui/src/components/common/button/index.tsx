import { ReactNode } from "react"
import "./index.css"
import { Color, Size, Variant } from "../../../types/common"

type ButtonProps = {
  children: ReactNode
  onClick?: () => void,
  style?: React.CSSProperties,
  size?: Size,
  variant: Variant,
  color?: Color,
}

export const Button = (
  {
    children,
    onClick,
    style,
    size = "small",
    variant = "filled",
    color = "primary",
  }: ButtonProps,
) => {
  return (
    <button 
      style={style}
      className={`button button-${variant} button-${color} button-${size}`} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}