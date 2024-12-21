import { TableColumn } from "./column"
import { TableHeader } from "./header"
import { TableRow } from "./tbody"
import "./index.css"
import { useState } from "react"
import { SortDirection } from "../../../types/common"
import { localSort } from "./utils"

type TableProps<T> = {
  columns: { [key:string]: TableColumn<T> }
  data: T[]
  onSortChange?: (data: T[], sortable: (data: T) => string | number, direction: SortDirection) => T[]
}

// TODO: Add row edit
export function Table<T>(
  {
    columns,
    data,
    onSortChange = localSort
  }: TableProps<T>) {
  const [sort, setSort] = useState<{direction: SortDirection, column: string}>();
  const [sortedData, setSortedData] = useState(data);

  const handleSortChange = (column: string, direction: SortDirection) => {
    setSort({column, direction})
    setSortedData(onSortChange(sortedData, columns[column].sortable!, direction))
  }

  return (
    <table>
      <TableHeader template={columns} currentSort={sort} onSortChange={handleSortChange} />
      <tbody>
        {sortedData.map((rowData, index) => {
          return <TableRow template={columns} rowData={rowData} key={index}/>
        })}
      </tbody>
    </table>
  )
}