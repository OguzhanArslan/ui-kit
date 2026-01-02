import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { BarChartIcon, CirclePlusIcon } from '../icons';
import { Box } from './Box';

const meta = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'name',
    children: 'Content',
    actions: (
      <>
        <Button color="primary" size="xs" prefix={<BarChartIcon />} />
        <Button color="primary" size="xs" prefix={<CirclePlusIcon />} />
      </>
    ),
    footer: 'footer',
  },
};
