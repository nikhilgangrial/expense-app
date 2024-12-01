import { Icon } from "../../components/common/icon";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { name: "sortAsc"},
};
