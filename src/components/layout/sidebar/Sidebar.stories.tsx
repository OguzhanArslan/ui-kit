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

import { SidebarFooter } from './footer/SidebarFooter';
import { SidebarHeader } from './header/SidebarHeader';
import { SidebarMenu } from './menu/SidebarMenu';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isOpen: true,
    children: null,
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: React.ComponentProps<typeof Sidebar>) {
  const [{ isOpen }, updateArgs] = useArgs();

  const toggle = () => updateArgs({ isOpen: !isOpen });

  return (
    <Sidebar {...args} isOpen={isOpen}>
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
    </Sidebar>
  );
}

export const Default: Story = {
  args: {
    isOpen: true,
    children: null,
  },
  render: Render,
};
