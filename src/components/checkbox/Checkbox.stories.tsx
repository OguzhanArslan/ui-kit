import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Forms & Fields/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'name',
    label: 'Checkbox',
  },
};

export const Error: Story = {
  args: {
    name: 'name',
    label: 'Checkbox',
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'name',
    label: 'Checkbox',
    disabled: true,
  },
};
