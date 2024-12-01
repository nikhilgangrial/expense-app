import { TableColumn } from "./column"
import { TableHeader } from "./header"
import { TableRow } from "./tbody"

type TableProps<T> = {
  columns: TableColumn<T>[]
  data: T[]
}

export function Table<T>(
  {
    columns,
    data
  }: TableProps<T>) {

  // TODO: Handle Sort and Edit
  return (
    <table>
      <TableHeader template={columns} data={data} />
      <tbody>
        {data.map((rowData) => {
          return <TableRow template={columns} rowData={rowData} />
        })}
      </tbody>
    </table>
  )
}