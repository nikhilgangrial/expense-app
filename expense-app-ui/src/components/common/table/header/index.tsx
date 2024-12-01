import { TableColumn } from "../column";
import { HeaderCell } from "./cell";

type TableHeaderProps<T> = {
  template: Omit<Omit<TableColumn<T>, "body">, "editBody">[]
  data: T[]
}

export function TableHeader<T>({
  template,
  data
}: TableHeaderProps<T>) {
  return(
    <thead>
      <tr>
        {template.map((columnTemplate, index) => {
          return <HeaderCell template={columnTemplate} data={data} key={index}/>
        })}
      </tr>
    </thead>
  )
}