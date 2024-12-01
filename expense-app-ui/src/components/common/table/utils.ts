import { SortDirection } from "../../../types/common";

export function localSort<T>(data: T[], sortable: (data: T) => string | number, direction: SortDirection) {
  const result = [...data]
  result.sort((a, b) => sortable(a) > sortable(b) ? 1: -1)
  return direction === "asc" ? result: result.reverse() 
}