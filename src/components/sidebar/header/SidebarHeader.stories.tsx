import type { Meta, StoryObj } from '@storybook/react-vite';

import { SidebarHeader } from './SidebarHeader';

const meta = {
  title: 'Sidebar/Header',
  component: SidebarHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'CARİ PUSULA',
  },
};
