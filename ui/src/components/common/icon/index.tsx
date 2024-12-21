import { Size } from "../../../types/common";
import { IconName } from "./icon_names";
import icons from "./icons.json"
import "./index.css";

type IconProps = {
  name: IconName,
  size?: Size,
  color?: string,
}

export const Icon = (
  {
    name,
    size = 'small',
    color = 'white',
  }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon-${size}`} viewBox="0 0 24 24">
      <path d={icons[name]} fill={color} />
    </svg>
  )
};