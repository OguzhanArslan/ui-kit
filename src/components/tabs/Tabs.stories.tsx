import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = { title: 'Components/Tabs', component: Tabs };
export default meta;
type Story = StoryObj<typeof Tabs>;

const items = [
  { key: 'overview', label: 'Overview', content: <p>Overview content here.</p> },
  { key: 'analytics', label: 'Analytics', content: <p>Analytics data.</p> },
  { key: 'settings', label: 'Settings', content: <p>Settings panel.</p> },
];

export const Default: Story = { args: { items } };
export const WithDefault: Story = { args: { items, defaultActiveKey: 'analytics' } };
