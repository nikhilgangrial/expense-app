import { Meta, StoryObj } from "@storybook/react";
import { Table } from "../../components/common/table";
import { TableColumn } from "../../components/common/table/column";

const meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

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

const columns: TableColumn<Human>[] = [
  { 
    header: () => "Name",
    body: (rowData) => rowData.name,
  },
  { 
    header: () => "Age",
    body: (rowData) => rowData.age,
  }
];

type Story = StoryObj<typeof Table<Human>>;

export const Primary: Story = {
  args: {
    columns: columns,
    data: data,
  },
};
