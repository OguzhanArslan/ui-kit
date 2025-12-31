import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/button';
import { HomeIcon } from '@/components/icons';
import { COLOR } from '@/foundation/colors';

import { SidebarMenu } from './SidebarMenu';

const meta = {
  title: 'Sidebar/Menu',
  component: SidebarMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button
          prefix={<HomeIcon />}
          label="Dashboard"
          color={COLOR.menu}
          isFullWidth
        />
      </>
    ),
  },
};
