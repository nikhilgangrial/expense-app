import { ReactNode } from "react"

export type TableColumn<T> = {
  header: (data: T[]) => ReactNode
  body: (rowData: T) => ReactNode
  editBody?: (data: T) => ReactNode
  sortable?: boolean
}