import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'danger', 'info'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'Badge' } };
export const Success: Story = { args: { children: 'Active', variant: 'success' } };
export const Warning: Story = { args: { children: 'Pending', variant: 'warning' } };
export const Danger: Story = { args: { children: 'Error', variant: 'danger' } };
export const Info: Story = { args: { children: 'Info', variant: 'info' } };
export const Small: Story = { args: { children: 'Small', size: 'sm' } };
export const WithDot: Story = { args: { children: 'Online', variant: 'success', dot: true } };
export const Removable: Story = { args: { children: 'Tag', onRemove: () => alert('removed') } };
