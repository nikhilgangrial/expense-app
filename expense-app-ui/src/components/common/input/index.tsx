import { ChangeEventHandler, CSSProperties, HTMLInputTypeAttribute } from "react"
import { Size } from "../../../types/common"
import "./index.css"

type InputProps = {
  type?: HTMLInputTypeAttribute
  size?: Size,
  style?: CSSProperties
  onChange?: ChangeEventHandler
}

export const Input = (
  {
    type = "text",
    size = "small",
    style,
    onChange,
  }: InputProps
) => {
  return (
    <input
      type={type}
      style={style}
      className={`input-${size}`}
      onChange={onChange}
    />
  )
}