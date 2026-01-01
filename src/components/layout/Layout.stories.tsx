import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR } from '@/foundation/colors';

import { Button } from '../button';
import { CalendarIcon, GearIcon, HomeIcon, ShopingBagIcon } from '../icons';
import { Sidebar, SidebarFooter, SidebarHeader, SidebarMenu } from '../sidebar';
import { LayoutContent } from './content/LayoutContent';
import { Layout } from './Layout';

const meta = {
  title: 'Layout',
  component: Layout,
  tags: ['autodocs'],
  args: {
    children: null,
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: React.ComponentProps<typeof Layout>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Layout {...args}>
      <Sidebar isOpen={isOpen}>
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
      <LayoutContent>Content</LayoutContent>
    </Layout>
  );
}

export const Default: Story = {
  args: {
    children: 'deneme',
  },
  render: Render,
};
