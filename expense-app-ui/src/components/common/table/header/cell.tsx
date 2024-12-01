import { TableColumn } from "../column"

type HeaderCellProps<T> = {
  template: Omit<Omit<TableColumn<T>, "body">, "editBody">
  data: T[]
}

export function HeaderCell<T>(
  {
    template,
    data,
  }: HeaderCellProps<T>
) {
  return (
    <th>{template.header(data)}</th>
  )
}