import { ReactNode } from "react"

export type TableColumn<T> = {
  header: string
  body: (rowData: T) => ReactNode
  editBody?: (data: T) => ReactNode
  sortable?: (data: T) => string | number
}