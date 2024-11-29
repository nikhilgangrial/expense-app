import { Button } from "../components/common/button"
import { Color, Size, Variant } from "../types/common"

export const TablePage = () => {
  const variants: Variant[] = ["filled", "outlined", "text"]
  const colors: Color[] = ["success", "error", "warning", "info", "primary", "secondary", "disabled"]
  const sizes: Size[] = ["small", "medium", "large"]

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", margin: "1rem", flexGrow: "1" }}>
      {variants.map((variant) => {
        return (
          <>
            <span style={{marginTop: "2rem"}}>{variant}</span>
            <div style={{ display: "flex", flexDirection: "row", gap: "2rem", flexGrow: "1" }}>
              {colors.map((color) => {
                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1rem", flexGrow: "1" }}>
                    <span>{color}</span>
                    {sizes.map((size) => {
                      return (
                        <Button variant={variant} color={color} size={size}>Yo</Button>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}