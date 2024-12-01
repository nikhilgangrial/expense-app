import { SortDirection } from "../../../../types/common"
import { Button } from "../../button"
import { Icon } from "../../icon"
import { TableColumn } from "../column"

type HeaderCellProps<T> = {
  template: Omit<Omit<TableColumn<T>, "body">, "editBody">
  onSortChange: (column: string, direction: SortDirection) => void
  currentSort: { direction: SortDirection, column: string } | undefined
}

export function HeaderCell<T>(
  {
    template,
    onSortChange,
    currentSort
  }: HeaderCellProps<T>
) {
  const isActive = currentSort?.column === template.header;
  const direction = currentSort?.direction;

  const sortButton =
    <Button
      variant="text"
      style={{ padding: 0 }}
      onClick={() => {
        onSortChange(
          template.header,
          isActive
            ? direction === "asc"
              ? "desc"
              : "asc"
            : "asc"
        )
      }}
    >
      <Icon name={isActive && direction === "asc" ? "sortAsc" : "sortDesc"} />
    </Button>

  return (
    <th>{template.header} {template.sortable && sortButton}</th>
  )
}