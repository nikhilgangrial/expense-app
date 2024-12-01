import { ChangeEventHandler, CSSProperties, HTMLInputTypeAttribute } from "react"
import { Size } from "../../../types/common"
import "./index.css"

type InputProps = {
  type?: HTMLInputTypeAttribute
  size?: Size,
  style?: CSSProperties
  placeholder?: string
  onChange?: ChangeEventHandler
}

export const Input = (
  {
    type = "text",
    size = "small",
    placeholder = "",
    style,
    onChange,
  }: InputProps
) => {
  return (
    <input
      role="textbox"
      type={type}
      style={style}
      placeholder={placeholder}
      className={`input input-${size}`}
      onChange={onChange}
    />
  )
}