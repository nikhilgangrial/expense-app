import { Input } from "../../components/common/input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { placeholder: "Name"},
};
