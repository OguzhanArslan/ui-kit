import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { variant: 'info', title: 'Information', children: 'This is an informational alert.' } };
export const Success: Story = { args: { variant: 'success', title: 'Success', children: 'Operation completed successfully.' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Warning', children: 'Please review before proceeding.' } };
export const Danger: Story = { args: { variant: 'danger', title: 'Error', children: 'Something went wrong.' } };
export const Dismissible: Story = { args: { variant: 'info', children: 'Dismissible alert.', dismissible: true } };
export const NoTitle: Story = { args: { variant: 'success', children: 'Simple alert without title.' } };
