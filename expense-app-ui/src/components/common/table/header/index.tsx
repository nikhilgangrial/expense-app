import { SortDirection } from "../../../../types/common";
import { TableColumn } from "../column";
import { HeaderCell } from "./cell";

type TableHeaderProps<T> = {
  template: { [key: string]: Omit<Omit<TableColumn<T>, "body">, "editBody"> }
  onSortChange: (column: string, direction: SortDirection) => void
  currentSort: { direction: SortDirection, column: string } | undefined
}

export function TableHeader<T>({
  template,
  onSortChange,
  currentSort,
}: TableHeaderProps<T>) {
  return (
    <thead>
      <tr>
        {Object.keys(template).map((columnTemplate, index) => {
          return (
            <HeaderCell
              template={template[columnTemplate]}
              key={index}
              currentSort={currentSort}
              onSortChange={onSortChange}
            />
          )
        })}
      </tr>
    </thead>
  )
}