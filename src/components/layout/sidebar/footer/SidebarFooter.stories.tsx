import type { Meta, StoryObj } from '@storybook/react-vite';

import { SidebarFooter } from './SidebarFooter';

const meta = {
  title: 'Layout/Sidebar/Footer',
  component: SidebarFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>Logo</>,
  },
};
