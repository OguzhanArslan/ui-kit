import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
  title: 'Forms & Fields/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'name',
  },
};

export const Error: Story = {
  args: {
    name: 'name',
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'name',
    disabled: true,
  },
};
