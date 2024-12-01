import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../../components/common/select";

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { "label": "One", "value": "1" },
  { "label": "Two", "value": "2" },
  { "label": "Three", "value": "3" },
  { "label": "Four", "value": "4" },
  { "label": "Five", "value": "5" },
  { "label": "Six", "value": "6" },
  { "label": "Seven", "value": "7" },
  { "label": "Eight", "value": "8" },
  { "label": "Nine", "value": "9" },
  { "label": "Ten", "value": "10" }
]

export const Primary: Story = {
  args: {
    options,
    onChange: () => { },
  },
};
