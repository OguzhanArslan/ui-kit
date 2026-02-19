import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="This is a tooltip" placement="top">
        <button>Hover me</button>
      </Tooltip>
    </div>
  ),
};

export const Bottom: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <button>Bottom</button>
      </Tooltip>
    </div>
  ),
};

export const Left: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Left tooltip" placement="left">
        <button>Left</button>
      </Tooltip>
    </div>
  ),
};

export const Right: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Right tooltip" placement="right">
        <button>Right</button>
      </Tooltip>
    </div>
  ),
};
