import { Table } from "../components/common/table";
import { TableColumn } from "../components/common/table/column";

export const TablePage = () => {
  type Human = {
    name: string,
    age: number,
  }
  
  const data: Human[] = [
    { "name": "John", "age": 34 },
    { "name": "Alice", "age": 28 },
    { "name": "Bob", "age": 42 },
    { "name": "Emma", "age": 30 },
    { "name": "David", "age": 55 },
    { "name": "Sophia", "age": 23 },
    { "name": "James", "age": 37 },
    { "name": "Olivia", "age": 29 },
    { "name": "Michael", "age": 41 },
    { "name": "Isabella", "age": 33 }
  ]
  
  const columns: { [key: string]: TableColumn<Human> } = {
    "Name": { 
      header: "Name",
      body: (rowData) => rowData.name,
      sortable: (rowData) => rowData.name,
    },
    "Age": { 
      header: "Age",
      body: (rowData) => rowData.age,
      sortable: (rowData) => rowData.age,
    }
  };

  return (
    <Table columns={columns} data={data}/>
  )
}