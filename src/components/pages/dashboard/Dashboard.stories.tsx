import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/button';
import {
  CalendarIcon,
  GearIcon,
  HomeIcon,
  ShopingBagIcon,
} from '@/components/icons';
import {
  Content,
  Layout,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from '@/components/layout';
import { COLOR } from '@/foundation/colors';

const meta = {
  title: 'Pages/Dashboard',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
      <Content>Content</Content>
    </Layout>
  );
}

export const Default: Story = {
  args: {
    children: 'deneme',
  },
  render: Render,
};
