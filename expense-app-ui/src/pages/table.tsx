import { Input } from "../components/common/input"
import { Size } from "../types/common"

export const TablePage = () => {
  const sizes: Size[] = ["small", "medium", "large"]

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", margin: "1rem" }}>
      {sizes.map((size) => {
        return (
          <Input size={size} placeholder={size}/>
        )
      })}
    </div>
  )
}