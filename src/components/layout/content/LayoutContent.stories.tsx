import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutContent } from './LayoutContent';

const meta = {
  title: 'Layout/Content',
  component: LayoutContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: null,
  },
} satisfies Meta<typeof LayoutContent>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: React.ComponentProps<typeof LayoutContent>) {
  return <LayoutContent {...args}>deneme</LayoutContent>;
}

export const Default: Story = {
  args: {
    children: 'deneme',
  },
  render: Render,
};
