import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ArrowUpIcon, HomeIcon } from '@/components/icons';
import { COLOR } from '@/foundation/colors';
import { SIZE } from '@/foundation/sizes';

import { Button } from './Button';

const meta = {
  title: 'Forms & Fields/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'radio',
      options: [
        COLOR.primary,
        COLOR.secondary,
        COLOR.tertiary,
        COLOR.success,
        COLOR.warning,
        COLOR.error,
      ],
    },
    size: {
      control: 'radio',
      options: [SIZE.sm, SIZE.md, SIZE.lg],
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    color: COLOR.primary,
  },
};

export const Secondary: Story = {
  args: {
    color: COLOR.secondary,
    label: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    color: COLOR.tertiary,
    label: 'Button',
  },
};

export const Menu: Story = {
  args: {
    color: COLOR.menu,
    label: 'Dashboard',
    prefix: <HomeIcon aria-hidden="true" focusable="false" />,
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button color="primary" label="Primary" />
      <Button color="secondary" label="Secondary" />
      <Button color="tertiary" label="Tertiary" />
      <Button color="success" label="Success" />
      <Button color="warning" label="Warning" />
      <Button color="error" label="Error" />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    color: COLOR.tertiary,
    label: 'Button',
    isLoading: true,
  },
};

export const Icon: Story = {
  args: {
    color: COLOR.primary,
    ariaLabel: 'Button',
    prefix: <ArrowUpIcon aria-hidden="true" focusable="false" />,
    isLoading: true,
  },
};

export const IconPrefix: Story = {
  args: {
    color: COLOR.primary,
    label: 'Button',
    prefix: <ArrowUpIcon aria-hidden="true" focusable="false" />,
  },
};

export const IconSuffix: Story = {
  args: {
    color: COLOR.primary,
    label: 'Button',
    suffix: <ArrowUpIcon aria-hidden="true" focusable="false" />,
  },
};
