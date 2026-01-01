import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/internal/preview-api';

import { Button } from '@/components/button';
import {
  CalendarIcon,
  GearIcon,
  HomeIcon,
  ShopingBagIcon,
} from '@/components/icons';
import { COLOR } from '@/foundation/colors';

import { SidebarFooter } from '../footer/SidebarFooter';
import { SidebarHeader } from '../header/SidebarHeader';
import { SidebarMenu } from '../menu/SidebarMenu';
import { SidebarContent } from './SidebarContent';

const meta = {
  title: 'Sidebar/Content',
  component: SidebarContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isOpen: true,
    children: null,
  },
} satisfies Meta<typeof SidebarContent>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: React.ComponentProps<typeof SidebarContent>) {
  const [{ isOpen }, updateArgs] = useArgs();

  const toggle = () => updateArgs({ isOpen: !isOpen });

  return (
    <SidebarContent {...args} isOpen={isOpen}>
      <SidebarHeader title="CARİ PUSULA" isOpen={isOpen} onClick={toggle} />
      <SidebarMenu>
        <Button
          prefix={<HomeIcon />}
          label="Dashboard"
          color={COLOR.menu}
          isFullWidth
          isActive
          isHiddenLabel={!isOpen}
        />
        <Button
          prefix={<ShopingBagIcon />}
          label="Products"
          color={COLOR.menu}
          isFullWidth
          isHiddenLabel={!isOpen}
        />
        <Button
          prefix={<CalendarIcon />}
          label="Calendar"
          color={COLOR.menu}
          isFullWidth
          isHiddenLabel={!isOpen}
        />
        <Button
          prefix={<GearIcon />}
          label="Settings"
          color={COLOR.menu}
          isFullWidth
          isHiddenLabel={!isOpen}
        />
      </SidebarMenu>
      <SidebarFooter>Footer</SidebarFooter>
    </SidebarContent>
  );
}

export const Default: Story = {
  args: {
    isOpen: true,
    children: null,
  },
  render: Render,
};
