import type { Meta, StoryObj } from '@storybook/react-vite';

import { Content } from './Content';

const meta = {
  title: 'Layout/Content',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: null,
  },
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: React.ComponentProps<typeof Content>) {
  return <Content {...args}>deneme</Content>;
}

export const Default: Story = {
  args: {
    children: 'deneme',
  },
  render: Render,
};
