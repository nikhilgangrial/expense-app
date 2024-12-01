import { TableColumn } from "../column"
import { TableCell } from "./cell"
import "./index.css";

type TableRowProps<T> = {
  template: Omit<Omit<TableColumn<T>, "sortable">, "header">[]
  rowData: T
}

export function TableRow<T>(
  {
    template,
    rowData,
  }: TableRowProps<T>) {
  return (
    <tr>
      {template.map((columnTemplate, index) => {
        return <TableCell rowData={rowData} template={columnTemplate} key={index}/>
      })}
    </tr>
  )
}