import { TableColumn } from "../column";

type TableCellProps<T> = {
  rowData: T,
  template: Omit<Omit<TableColumn<T>, "sortable">, "header">,
}

export function TableCell<T>(
  {
    rowData,
    template,
  }: TableCellProps<T>) {
    return (
      <td>{template.body(rowData)}</td>
    )
}