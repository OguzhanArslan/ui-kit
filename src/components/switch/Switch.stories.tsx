import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = { title: 'Components/Switch', component: Switch };
export default meta;
type Story = StoryObj<typeof Switch>;

const Controlled: React.FC = () => {
  const [on, setOn] = useState(false);
  return <Switch checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />;
};

export const Default: Story = { render: () => <Controlled /> };
export const Disabled: Story = { args: { checked: true, disabled: true, label: 'Disabled' } };
export const WithLabel: Story = { args: { label: 'Enable notifications' } };
