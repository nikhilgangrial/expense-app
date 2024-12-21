import { ChangeEventHandler } from "react"
import { Size } from "../../../types/common"
import "./index.css"

type SelectProps = {
  size?: Size
  options: { label: string, value: string }[]
  onChange: ChangeEventHandler
}

export const Select = (
  {
    size = "small",
    options,
    onChange,
  }: SelectProps
) => {
  return (
    <select className={`select select-${size}`} onChange={onChange}>
      {options.map(
        ({ label, value }, index) => {
          return <option label={label} value={value} key={index} />
        }
      )}
    </select>
  )
}